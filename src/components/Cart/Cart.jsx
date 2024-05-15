/* eslint-disable react/jsx-key */
import { useContext } from 'react'
import Context from '../../Context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Flex,
    Heading,
    Center,
    Text,
} from '@chakra-ui/react'
import { TbGardenCartOff } from "react-icons/tb"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { Link } from 'react-router-dom'
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi"


const Cart = () => {
    const { cart, eliminarItem, precioTotal, clearCart, cantidadTotal } = useContext(Context)

if(cart.length === 0){
    return(
        <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
            <Heading color={'#B3BFB8'}>Todavia no agregaste ningun producto</Heading>
            <Link to={'/'}>
                <Button bgColor="#7E8D85" color={'#3C493F'} mt={5}>
                    <FiChevronsLeft />Ver productos<FiChevronsRight />
                </Button>
            </Link>
        </Flex>
        )
}
    return (
        <TableContainer w={'80%'} m={'0 auto'} mt={10}>
            <Table variant='striped'> 
                <Thead>
                    <Tr bgColor={'#7E8D85'}>
                        <Th fontSize={'1 rem'} color={'#3C493F'}>Producto</Th>
                        <Th fontSize={'1 rem'} color={'#3C493F'}>precio</Th>
                        <Th fontSize={'1 rem'} color={'#3C493F'}>cantidad</Th>
                        <Th fontSize={'1 rem'} color={'#3C493F'}>Subtotal</Th>
                        <Th fontSize={'1 rem'} color={'#3C493F'}></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {   
                        cart.map((el)=>(                        
                            <Tr key={el.id} ey={el.id} fontWeight={'bolder'}>
                                <Td border={'none'} color={'#3C493F'}>{el.nombre}</Td>
                                <Td border={'none'} color={'#3C493F'}>${el.precio}</Td>
                                <Td border={'none'} color={'#3C493F'}>{el.cantidad}</Td>
                                <Td border={'none'} color={'#3C493F'}>${el.precio * el.cantidad}</Td>
                                <Td border={'none'}>
                                    <Button bg={'transparent'} fontSize={'1.5rem'} color={'#3C493F'} 
                                    _hover={{
                                        backgroundColor:'#7E8D85',
                                        color: '#3C493F',
                                        }}
                                        onClick={() => eliminarItem(el.id)}>
                                        <RiDeleteBin5Fill color="#637074" size={30} />
                                    </Button>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
            <Center mt={10}>
                <Flex w={'60%'} justify={'space-around'} align={'center'}>
                    <Text fontSize={'3xl'} color={'#B3BFB8'} w={'15rem'} height={'3rem'}>Total: ${precioTotal()}</Text>
                    <Button onClick={() => clearCart()}
                        w={'10rem'}
                        height={'2rem'}
                        m={4}
                        backgroundColor={'#B3BFB8'}
                        color={'#3C493F'}
                        fontSize={'xl'}
                        _hover={{
                            backgroundColor: '#7E8D85',
                            color: '#B3BFB8',
                        }}
                    >
                        <span className='iconClearCart'>
                            <TbGardenCartOff />
                        </span>
                        Vaciar carrito
                    </Button>
                    <Link to='/Checkout' color='#B3BFB8'>
                        Finalizar compra
                    </Link>
                </Flex>
            </Center>
        </TableContainer>
    )
}

export default Cart