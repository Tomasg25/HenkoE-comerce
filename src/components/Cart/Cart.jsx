/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import Context from '../../Context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Flex,
    Heading,
    Divider,
    Center,
    Text,
} from '@chakra-ui/react'
import { TbGardenCartOff } from "react-icons/tb"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from 'react-router-dom'
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi"


const Cart = () => {
    const { cart, eliminarItem, precioTotal, clearCart, cantidadTotal } = useContext(Context)

if(cart.length === 0){
    return(
        <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
            <Heading>Todavia no agregaste ningun producto</Heading>
            <Link to={'/'}>
                <Button color="#637074" mt={5}>
                    <FiChevronsLeft />Ver productos<FiChevronsRight />
                </Button>
            </Link>
        </Flex>
        )
}
    return (
        <TableContainer w={'80%'} m={'0 auto'} mt={10}>
            <Table variant='striped' /*colorScheme='teal'*/> 
                <Thead>
                    <Tr>
                        <Th fontSize={'1 rem'} color={'#898989'}>Producto</Th>
                        <Th fontSize={'1 rem'} color={'#898989'}>precio</Th>
                        <Th fontSize={'1 rem'} color={'#898989'}>cantidad</Th>
                        <Th fontSize={'1 rem'} color={'#898989'}>Subtotal</Th>
                        <Th fontSize={'1 rem'} color={'#898989'}></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {   
                        cart.map((el, index)=>(                        
                            <Tr key={el.id} ey={el.id} bg={index % 2 === 0 ? '#c5d0d3' : '#898989'} color={index % 2 === 0 ? '#898989' : '#fff'}>
                                <Td border={'none'}>{el.nombre}</Td>
                                <Td border={'none'}>${el.precio}</Td>
                                <Td border={'none'}>{el.cantidad}</Td>
                                <Td border={'none'}>${el.precio * el.cantidad}</Td>
                                <Td border={'none'}>
                                    <Button bg={'transparent'} fontSize={'1.5rem'} color={index % 2 === 0 ? '#416d6d' : '#fff'} 
                                    _hover={{
                                        backgroundColor: index % 2 === 0 ? '#898989' : '#c5d0d3',
                                        color: index % 2 === 0 ? '#c5d0d3' : '#898989',
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
                    <Text fontSize={'3xl'} color={'#898989'} w={'15rem'} height={'3rem'}>Total: ${precioTotal()}</Text>
                    <Button onClick={() => clearCart()}
                        w={'15rem'}
                        height={'3rem'}
                        backgroundColor={'#637074'}
                        color={'#fff'}
                        fontSize={'xl'}
                        _hover={{
                            backgroundColor: '#c5d0d3',
                            color: '#fff',
                        }}
                    >
                        <span className='iconClearCart'>
                            <TbGardenCartOff />
                        </span>
                        Vaciar carrito
                    </Button>
                    <Link to='/Checkout'>
                        Finalizar compra
                    </Link>
                </Flex>
            </Center>
        </TableContainer>
    )
}

export default Cart