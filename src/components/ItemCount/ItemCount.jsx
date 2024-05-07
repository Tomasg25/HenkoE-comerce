import { Flex, Button, Heading } from '@chakra-ui/react'
import useCounter from '../../Hooks/useCounter'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {contador, sumar, restar }= useCounter(initialValue, stock)

    return (
        <Flex>
            <Button marginRight='2' bgColor='#637074' onClick={restar}>-</Button>
            <Heading>{contador}</Heading>
            <Button marginLeft='2'  bgColor='#637074' onClick={sumar}>+</Button>
            <Button marginLeft='2' bgColor='#637074' onClick={()=>onAdd(contador)}>Agregar al Carrito</Button>
        </Flex>
  )
}

export default ItemCount