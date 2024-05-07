import React from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Center, Box, Flex } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import Context from '../../Context/CartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ nombre, precio, stock, id, img, descripcion, categoria }) => {

    const { addItem } = useContext(Context)

    const onAdd = (cantidad) =>{
        const item ={
            id,
            nombre,
            stock,
            precio
        }
        addItem(item,cantidad)
        toast.success(`Agregaste ${cantidad} unidades`)
    }

    return (
            <Card w={'100%'} h={'100%'} boxShadow='lg'>
                <Flex bgColor='#637074' h={'5rem'} justify={'flex-start'} align={'center'} borderRadius={'5'}>
                    <Text ml={2} fontSize="large" fontWeight='bolder'>Categoria: {categoria}</Text>
                </Flex>

                <Flex wrap={'wrap'} align={'center'} justify={'space-between'} w={'100%'} h={'100%'} padding={'5'}>
                    <Flex w={'40%'} h={'90%'} justify={'center'} align={'center'}> 
                        <Image src={img} alt={descripcion} borderRadius="lg" boxSize='100%' objectFit='contain' h='100%' w='400px' rowSpan={2} colSpan={1} />
                    </Flex>
                    <Flex direction={'column'} justify={'space-around'} align={'start'} w={'50%'} minHeight={'250px'}>
                        <Heading size='xl' h={'4rem'} >{nombre}</Heading>
                        <Text fontSize={'x-large'} w={'95%'}>
                            {descripcion}
                        </Text>
                        <Text fontSize={'x-large'}>
                            ${precio}
                        </Text>
                    </Flex>
                    <Flex w={'80%'} h={'10%'} justify={'flex-end'} align={'center'} pt={4}>
                        <ItemCount initialValue={1} stock={stock} onAdd={onAdd}/>
                    </Flex>
                </Flex>
            </Card>
    )
    }

export default ItemDetail