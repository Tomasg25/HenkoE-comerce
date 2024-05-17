import { Flex, Button, Heading, useMediaQuery, Grid, GridItem } from '@chakra-ui/react'
import useCounter from '../../Hooks/useCounter'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {contador, sumar, restar }= useCounter(initialValue, stock)
    const [isLargerThan610] = useMediaQuery('(min-width: 610px)')
    return (
        <>
        {
            isLargerThan610 ?
            <Flex>
                <Button w={'30px'} bg="#7E8D85" color={'#3C493F'} fontSize={'2xl'} _hover={{backgroundColor: '#3C493F',color: '#7E8D85',}} marginRight='2' onClick={restar}>-</Button>
                <Heading>{contador}</Heading>
                <Button w={'30px'} bg="#7E8D85" color={'#3C493F'} fontSize={'2xl'} _hover={{ backgroundColor: '#3C493F', color: '#7E8D85', }} marginLeft='2' onClick={sumar}>+</Button>
                <Button w={'250px'} bg="#7E8D85" color={'#3C493F'} fontSize={'2xl'} _hover={{ backgroundColor: '#3C493F', color: '#7E8D85', }} marginLeft='2' onClick={()=>onAdd(contador)}>Agregar al Carrito</Button>
            </Flex>
            :
                    <Grid templateAreas={`"acc acc acc"
                                        "ad ad ad"`}
                        gridTemplateColumns={'1fr 1fr 1fr'}>
                        <GridItem area={'acc'} justifySelf={'center'}>
                            <Flex>
                                <Button w={'30px'} bg="#7E8D85" color={'#3C493F'} fontSize={'xl'} _hover={{ backgroundColor: '#3C493F', color: '#7E8D85', }} marginRight='2' onClick={restar}>-</Button>
                            <Heading>{contador}</Heading>
                                <Button w={'30px'} bg="#7E8D85" color={'#3C493F'} fontSize={'xl'} _hover={{ backgroundColor: '#3C493F', color: '#7E8D85', }} marginLeft='2' onClick={sumar}>+</Button>
                            </Flex>
                        </GridItem>
                        <GridItem area={'ad'} justifySelf={'center'}>
                            <Button bg="#7E8D85" color={'#3C493F'} fontSize={'xl'} mt={'2'} _hover={{ backgroundColor: '#3C493F', color: '#7E8D85', }}  onClick={() => onAdd(contador)}>Agregar al Carrito</Button>
                        </GridItem>
                    </Grid>
        }
        </>
  )
}

export default ItemCount