import { Flex, Button, Heading } from '@chakra-ui/react'
import useCounter from '../../Hooks/useCounter'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {contador, sumar, restar }= useCounter(initialValue, stock)

    return (
        <Flex>
            <Button onClick={restar}>-</Button>
            <Heading>{contador}</Heading>
            <Button onClick={sumar}>+</Button>
            <Button onClick={()=>onAdd(contador)}>Agregar al Carrito</Button>
        </Flex>
  )
}

export default ItemCount