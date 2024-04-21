import { Box } from "@chakra-ui/react"
import Item from '../Item/Item'



const ItemList = ({products}) => {
  return (
    <Box className="ItemListBox" display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
      {products.map((el) => (
        <Box key={el.id} margin={2}>
        <Item {...el}/>
        </Box>
      ))}
    </Box>
  )
}

export default ItemList