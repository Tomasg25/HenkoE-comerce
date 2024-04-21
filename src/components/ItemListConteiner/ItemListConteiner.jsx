import { Box, Center, Flex, Heading } from "@chakra-ui/react"
import { useEffect, useState} from "react"
import { getProducts, getProductsByCategory } from "../../data/asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { RotateLoader }from "react-spinners"

const ItemListConteiner = ({ title }) => {
    const [products,setProducts] = useState([])
    const [cargando,setCarga] = useState(true)
    const { categoryId } = useParams() 
    useEffect(()=>{
        setCarga(true)
        const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

        dataProductos
            .then((el)=>setProducts(el))
            .catch((error)=>console.log(error))
            .finally(() => setCarga(false))
    },[categoryId])

    return (
        <Box >
            <Heading textAlign={'center'} mt={15}>{title}</Heading>
            {
                cargando?
                    <RotateLoader color="#637074"/>
                :
                <ItemList products={products}/>
            }
        </Box>
    )
}

export default ItemListConteiner