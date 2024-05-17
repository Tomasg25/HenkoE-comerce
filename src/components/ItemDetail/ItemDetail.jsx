import { Card, Image, Heading, Text,Flex, useMediaQuery, Grid, GridItem } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import Context from '../../Context/CartContext'
import Swal from 'sweetalert2';
import './Sweet.css'

const ItemDetail = ({ nombre, precio, stock, id, img, descripcion, categoria }) => {
    const { addItem } = useContext(Context)
    const [isLargerThan890] = useMediaQuery('(min-width: 890px)')
    const [isLargerThan610] = useMediaQuery('(min-width: 610px)')

    const onAdd = (cantidad) =>{
        const item ={
            id,
            nombre,
            stock,
            precio,
            img
        }
        addItem(item,cantidad)
        Swal.fire({
            position: 'center',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'my-swal-popup',
                icon: 'my-swal-icon'
            }
        });
    }

    return (
        <>
            {isLargerThan890 ?
            <Card w={'100%'} h={'100%'} boxShadow='lg'>
                <Flex bgColor='#B3BFB8' h={'5rem'} justify={'flex-start'} align={'center'} borderRadius={'5'}>
                    <Text ml={2} fontSize="large" fontWeight='bolder' color={'#3C493F'}>Categoria: {categoria}</Text>
                </Flex>
                <Flex color={'#3C493F'} fontWeight={'bolder'} wrap={'wrap'} align={'center'} justify={'space-between'} w={'100%'} h={'100%'} padding={'5'}>
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
            : isLargerThan610 ?
                <Card w={'100%'} h={'100%'}  boxShadow='lg'>
                    <Flex bgColor='#B3BFB8' h={'3rem'} justify={'flex-start'} align={'center'} borderRadius={'5'}>
                    <Text ml={2} fontSize="large" fontWeight='bolder' color={'#3C493F'}>Categoria: {categoria}</Text>
                </Flex>
                    <Grid templateAreas={
                                        `"img name"
                                        "img desc"
                                        "img price"
                                        "count count"`}
                    gridTemplateColumns={'1fr 1fr'}
                    color={'#3C493F'} fontWeight={'bold'} wrap={'wrap'} align={'center'} justify={'space-between'} padding={'5'}>
                        <GridItem area={'img'}  h={'90%'} justify={'center'} align={'center'}>
                            <Image src={img} alt={descripcion} borderRadius="lg" boxSize='100%' objectFit='contain' rowSpan={2} colSpan={1} />
                        </GridItem>
                        <GridItem area={'name'} direction={'column'} justify={'space-around'} align={'start'} >
                            <Heading size='xl'  >{nombre}</Heading>
                        </GridItem>
                        <GridItem area={'desc'} direction={'column'} justify={'space-around'} align={'start'} >
                            <Text fontSize={'large'}>
                                {descripcion}
                            </Text>
                        </GridItem>
                        <GridItem area={'price'} direction={'column'} justify={'space-around'} align={'start'} >
                            <Text fontSize={'x-large'}>
                                ${precio}
                            </Text>
                        </GridItem>
                        <GridItem area={'count'} justify={'flex-end'} align={'center'} pt={4}>
                            <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
                        </GridItem>
                    </Grid>
                </Card>
            :
                <Card w={'100%'} h={'100%'} boxShadow='lg'>
                    <Flex bgColor='#B3BFB8' h={'3rem'} justify={'flex-start'} align={'center'} borderRadius={'5'}>
                        <Text ml={2} fontSize="large" fontWeight='bolder' color={'#3C493F'}>Categoria: {categoria}</Text>
                    </Flex>
                        <Grid templateAreas={`"img img"
                                            "name name"
                                            "desc desc"
                                            "price price"
                                            "count count"`}
                        gridTemplateColumns={'1fr 1fr'}
                        color={'#3C493F'} fontWeight={'bold'} wrap={'wrap'} align={'center'} justify={'space-between'} padding={'5'}>
                        <GridItem area={'img'} h={'90%'} justify={'center'} align={'center'}>
                            <Image src={img} alt={descripcion} borderRadius="lg" boxSize='100%' objectFit='contain' rowSpan={2} colSpan={1} />
                        </GridItem>
                        <GridItem area={'name'} direction={'column'} justify={'space-around'} align={'start'} >
                            <Heading size='xl'  >{nombre}</Heading>
                        </GridItem>
                        <GridItem area={'desc'} direction={'column'} justify={'space-around'} align={'start'} >
                            <Text fontSize={'large'}>
                                {descripcion}
                            </Text>
                        </GridItem>
                        <GridItem area={'price'} direction={'column'} justify={'space-around'} align={'start'} >
                            <Text fontSize={'x-large'}>
                                ${precio}
                            </Text>
                        </GridItem>
                        <GridItem area={'count'} justify={'flex-end'} align={'center'} pt={4}>
                            <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
                        </GridItem>
                        </Grid>
                </Card>
            }
        </>
    )
    }

export default ItemDetail