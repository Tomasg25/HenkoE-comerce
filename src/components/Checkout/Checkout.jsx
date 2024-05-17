import { useContext, useState } from 'react'
import {
  FormControl,
  Input,
  Flex,
  Heading,
  Button,
} from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../Context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const [user,setUser] = useState({
    nombre:'',
    email:'',
    emailRepetido:'',
    telefono:''
  })
  const [emailMatch, setEmailMatch] = useState(true)
  const [error, setError] = useState({})
  const errorMessage = Object.values(error).map(err => `• ${err}`);

  const {cart, precioTotal, clearCart} = useContext(Context)


  const updateUser = (event) =>{ 
    setUser((user)=>({
      ...user,
      [event.target.name]:event.target.value
    }))
  }
  const navigate = useNavigate()

const validateEmailMatch = () =>{
  if(user.email === user.emailRepetido){
    setEmailMatch(true)
  }else{
    setEmailMatch(false)
  }
}

  const validateForm = () => {
    const errors = {}
    if (!user.nombre) {
      errors.nombre = "Tenés que agregar un nombre"
    }

    if (user.telefono.length < 10 || user.telefono.length > 14){
      errors.telefono = "ingrese un numero valido"
      
    }
    if(emailMatch === false){
      errors.emailMatch = "Los email deben coincidir"
    }
    setError(errors)
    return Object.keys(errors).length === 0
  }

const getOrden = async () =>{
  const isFormValid = validateForm()
  validateEmailMatch()
  if(isFormValid && emailMatch){
    const coleccionNewOrden = collection(db,'ordenes')
    try {
      for(const item of cart){
        const productRef = doc(db, 'productos', item.id) 
        const productDoc = await getDoc(productRef)

        const stockActual = productDoc.data().stock
        if(stockActual >= item.cantidad){
          await updateDoc(productRef,{
            stock: stockActual-item.cantidad
          })
        }else{
          console.log(`No hay stock suficiente del producto ${item.nombre}`)
        }
          const newOrden = {
            Cliente: user,
            producto:cart,
            Total: precioTotal(),
            fechaDeCompra: Timestamp.now()
          }

          const orderDocRef = await addDoc(coleccionNewOrden,newOrden)
            Swal.fire({
              title: 'Gracias por tu compra!!',
              text: `El numero de su compra es ${orderDocRef.id}` ,
              icon: 'success',
              confirmButtonText: 'Confirmar',
              color: "#3C493F",
              background: "#B3BFB8",
            }).then(()=>{
              clearCart()
              navigate('/')
            })
          
      }
    } catch (error) {
    console.log(error)
    }
  } else{
    Swal.fire({
      title: "Complete los campos de manera correcta!!",
      text: errorMessage,
      icon: 'error',
      width: 600,
      padding: "3em",
      color: "#3C493F",
      background: "#B3BFB8",
    });
  }
}







  return (
    <Flex direction={'column'} justify={'center'} align={'center'} >
      <Heading mb={2} color={'#B3BFB8'}>Datos de facturación</Heading>
      <FormControl w={'40%'} mt={'10'}>
        <Input type='text' name='nombre' placeholder='Ingrese el Nombre' mb={3} onChange={updateUser}/>
        <Input type='email' name='email' placeholder='Ingrese el Email' mb={3} onChange={updateUser}/>
        <Input type='email' name='emailRepetido' placeholder='Ingrese nuevamente el Email' mb={3} onChange={updateUser}/>
        <Input type='text' name='telefono' placeholder='ingrese el Telefono' mb={3} onChange={updateUser}/>
      </FormControl>
      <Flex w={'100%'} justify={'center'} align={'center'}>
        <Button onClick={getOrden} backgroundColor={'#B3BFB8'}
          color={'#3C493F'}
          fontSize={'xl'}
          _hover={{
            backgroundColor: '#7E8D85',
            color: '#B3BFB8',
          }}>Finalizar compra</Button>
      </Flex>
    </Flex>
  )
}

export default Checkout