import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box, Flex } from '@chakra-ui/react'
import { RotateLoader } from "react-spinners"
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export const ItemDetailConteiner = () => {
  const [producto , setProducto] = useState({})
  const { productoId } = useParams()
  const [cargando, setCarga] = useState(true)

  const navigate = useNavigate()
  
  useEffect(() => {
    const getProduct = async() =>{
      const queryRef = doc(db ,'productos', productoId)
      const respuesta = await getDoc(queryRef)
      const newItem = {
        ...respuesta.data(),
        id: respuesta.id
      }
      setProducto(newItem)
      setCarga(false)
    }
    getProduct()
  },[productoId])
  return (
    <Box 
      w={'60%'}
      minHeight={'40vh'}
      margin={'0 auto'}
      mt={'10'}
      borderRadius={'10px'}>
      {
        cargando ?
        <Flex justify={'center'} align={'center'} h={'50vh'}>
            <RotateLoader color="#637074" />
        </Flex>
        :
        <ItemDetail {...producto}/>
      }
    </Box>
  )
}
