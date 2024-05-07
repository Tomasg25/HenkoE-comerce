import { Badge, Box, Flex} from "@chakra-ui/react";
import { useContext } from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import Context from "../../Context/CartContext";

const CardWidget = () => {
  const { cantidadTotal } = useContext(Context)
  return (
    <Flex mr={10}>
      <PiShoppingCartFill color="#637074" size={40}/>
      <Flex justify={'center'} align={'center'} h={'50%'} w={'50%'}>
        <Badge borderRadius={'50%'} color={'mm'} fontSize={'md'}>{cantidadTotal()}</Badge>
      </Flex>
    </Flex>
  )
}
export default CardWidget