import { Box, Flex, Heading } from "@chakra-ui/react"
import { useEffect, useState} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { RotateLoader }from "react-spinners"
import { db } from "../../config/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListConteiner = ({ title }) => {
    const [products,setProducts] = useState([])
    const [cargando,setCarga] = useState(true)
    const { categoryId } = useParams() 
    useEffect(()=>{
        setCarga(true)
        const getData = async ()=>{
            const coleccion = collection(db,'productos')
            const queryRef = !categoryId ? 
            coleccion 
            :
            query(coleccion, where('categoria', '==', categoryId))

            const respuesta = await getDocs(queryRef)
            console.log(respuesta)
            const productos = respuesta.docs.map((doc)=>{
                const newItem = {
                    ...doc.data(),
                    id: doc.id
                }
                return newItem
            })
            setProducts(productos)
            setCarga(false)
        }
        getData()
    },[categoryId])

    return (
        <Box>
            <Heading textAlign={'center'} mt={15}>{title}</Heading>
            {
                cargando?
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                        <RotateLoader color="#B3BFB8"/>
                </Flex>
                :
                <ItemList products={products}/>
            }
        </Box>
    )
}

export default ItemListConteiner