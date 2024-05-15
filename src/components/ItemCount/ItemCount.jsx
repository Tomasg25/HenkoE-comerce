import { Flex, Button, Heading } from '@chakra-ui/react'
import useCounter from '../../Hooks/useCounter'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {contador, sumar, restar }= useCounter(initialValue, stock)

    return (
        <Flex>
            <Button bg="#3C493F" fontSize={'2xl'} _hover={{ bg: '#7E8D85' }} marginLeft='2' onClick={restar}>-</Button>
            <Heading>{contador}</Heading>
            <Button bg="#3C493F" fontSize={'2xl'} _hover={{ bg: '#7E8D85' }} marginLeft='2' onClick={sumar}>+</Button>
            <Button bg="#3C493F" fontSize={'2xl'} _hover={{ bg: '#7E8D85' }} marginLeft='2' onClick={()=>onAdd(contador)}>Agregar al Carrito</Button>
        </Flex>
  )
}

export default ItemCount