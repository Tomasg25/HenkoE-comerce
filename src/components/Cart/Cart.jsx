import { useContext } from 'react'
import Context from '../../Context/CartContext'
import {
    Button,
    Flex,
    Heading,
    Center,
    Text,
    Box,
    useMediaQuery,
    Image,
    Card,
    Grid,
    GridItem
} from '@chakra-ui/react'
import { TbGardenCartOff } from "react-icons/tb"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { Link } from 'react-router-dom'
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'


const Cart = () => {
    const { cart, eliminarItem, precioTotal, clearCart} = useContext(Context)
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    if (cart.length === 0) {
        return (
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
        <>
            {
                isLargerThan650 ?
                        <>
                            <Center>
                                <Card w={'90%'} h={'100%'} boxShadow='lg' margin={2}>
                                    <Accordion allowMultiple bgColor={'#B3BFB8'}>
                                        <AccordionItem >
                                            <h2 >
                                                <AccordionButton _expanded={{ bgColor: '#7E8D85' }}>
                                                    <Box as='span' flex='1' textAlign='center' >
                                                        <Text fontSize="large" fontWeight='bolder' color={'#3C493F'}>Resumen de compra</Text>
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                {
                                                    cart.map((el) => (
                                                        <Grid key={el.id} ey={el.id}
                                                            templateAreas={`"nombre del"
                                                                    "img info"`}
                                                            gridTemplateColumns={'150px 1fr'}
                                                            color={'#3C493F'} fontWeight={'bolder'} align={'center'} justify={'space-between'} w={'100%'} h={'100%'} padding={'5'}>
                                                            <GridItem area={'nombre'}>
                                                                <Text size='5 rem' fontWeight={'bolder'} justifyContent={'center'}>
                                                                    {el.nombre}
                                                                </Text>
                                                            </GridItem>
                                                            <GridItem area={'del'} justifySelf={'end'}>
                                                                <Button bg={'transparent'} fontSize={'1.5rem'} color={'#3C493F'}
                                                                    _hover={{
                                                                        backgroundColor: '#7E8D85',
                                                                        color: '#3C493F',
                                                                    }}
                                                                    onClick={() => eliminarItem(el.id)}>
                                                                    <RiDeleteBin5Fill color="#637074" size={20} />
                                                                </Button>
                                                            </GridItem>
                                                            <GridItem area={'img'} align={'start'} justifySelf={'center'}>
                                                                <Image src={el.img} alt={el.descripcion} borderRadius="lg" boxSize='100%' objectFit='contain' h='90%' w='80px' rowSpan={2} colSpan={1} />
                                                            </GridItem>
                                                            <GridItem area={'info'} justify={'center'} alignItems={'baseline'} flexDirection={'column'}>
                                                                <Text fontSize={'x-large'} justifyContent={'center'}>
                                                                    SubTotal:{el.precio * el.cantidad}
                                                                </Text>
                                                                <Text>
                                                                    Cantidad:{el.cantidad}
                                                                </Text>
                                                            </GridItem>
                                                        </Grid>
                                                    ))
                                                }
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </Card>
                            </Center>
                        <Grid templateAreas={
                            `"delAll delAll delAll"
                                                "tot tot tot"
                                                "fin fin fin"
                                                `}
                            gridTemplateColumns={'1fr 1fr 1fr'}
                            justify={'center'} align={'center'} flexDirection={'column'}>
                            <GridItem area={'tot'} direction={'column'} justify={'center'} align={'center'}>
                                <Text fontSize={'3xl'} color={'#B3BFB8'} height={'3rem'}>Total: ${precioTotal()}</Text>
                            </GridItem>
                            <GridItem area={'fin'} direction={'column'} justify={'center'} align={'center'}>
                                <Link to='/Checkout'>
                                    <Button
                                        backgroundColor={'#B3BFB8'}
                                        color={'#3C493F'}
                                        fontSize={'xl'}
                                        _hover={{
                                            backgroundColor: '#7E8D85',
                                            color: '#B3BFB8',
                                        }}>
                                        Finalizar compra
                                    </Button>
                                </Link>
                            </GridItem>
                            <GridItem area={'delAll'} justifySelf={'left'} pl={20}>
                                <Button
                                    backgroundColor={'#B3BFB8'}
                                    color={'#3C493F'}
                                    fontSize={'xl'}
                                    _hover={{
                                        backgroundColor: '#7E8D85',
                                        color: '#B3BFB8',
                                    }}>
                                    <span className='iconClearCart'>
                                        <TbGardenCartOff />
                                    </span>

                                </Button>
                            </GridItem>
                        </Grid>
                    </>
                    :
                    <>
                        <Center>
                            <Card w={'90%'} h={'100%'} boxShadow='lg' margin={2}>
                                <Accordion allowMultiple bgColor={'#B3BFB8'}>
                                    <AccordionItem >
                                        <h2 >
                                            <AccordionButton _expanded={{ bgColor: '#7E8D85' }}>
                                                <Box as='span' flex='1' textAlign='center' >
                                                    <Text fontSize="large" fontWeight='bolder' color={'#3C493F'}>Resumen de compra</Text>
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            {
                                                cart.map((el) => (
                                                    <Grid key={el.id} ey={el.id}
                                                        templateAreas={`"nombre del"
                                                                        "img cant"
                                                                        "subt subt"`}
                                                        gridTemplateColumns={'150px 1fr'}
                                                        color={'#3C493F'} fontWeight={'bolder'} align={'center'} justify={'space-between'} w={'100%'} h={'100%'} padding={'5'}>
                                                        <GridItem area={'nombre'}>
                                                            <Text size='5 rem' fontWeight={'bolder'} justifyContent={'center'}>
                                                                {el.nombre}
                                                            </Text>
                                                        </GridItem>
                                                        <GridItem area={'del'} justifySelf={'end'}>
                                                            <Button bg={'transparent'} fontSize={'1.5rem'} color={'#3C493F'}
                                                                _hover={{
                                                                    backgroundColor: '#7E8D85',
                                                                    color: '#3C493F',
                                                                }}
                                                                onClick={() => eliminarItem(el.id)}>
                                                                <RiDeleteBin5Fill color="#637074" size={20} />
                                                            </Button>
                                                        </GridItem>
                                                        <GridItem area={'img'} align={'start'} justifySelf={'center'}>
                                                            <Image src={el.img} alt={el.descripcion} borderRadius="lg" boxSize='100%' objectFit='contain' h='90%' w='80px' rowSpan={2} colSpan={1} />
                                                        </GridItem>
                                                        <GridItem area={'cant'} justify={'center'} alignSelf={'center'} flexDirection={'column'}>
                                                            <Text>
                                                                Cantidad:{el.cantidad}
                                                            </Text>
                                                        </GridItem>
                                                        <GridItem area={'subt'}>
                                                            <Text fontSize={'x-large'} justifyContent={'center'}>
                                                                SubTotal:{el.precio * el.cantidad}
                                                            </Text>
                                                        </GridItem>
                                                    </Grid>
                                                ))
                                            }
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                        </Center>
                        <Grid templateAreas={
                                            `"delAll delAll delAll"
                                            "tot tot tot"
                                            "fin fin fin"
                                            `}
                                gridTemplateColumns={'1fr 1fr 1fr'}
                                justify={'center'} align={'center'} flexDirection={'column'}>
                                <GridItem area={'tot'} direction={'column'} justify={'center'} align={'center'}>
                                    <Text fontSize={'3xl'} color={'#B3BFB8'} height={'3rem'}>Total: ${precioTotal()}</Text>
                                </GridItem>
                                <GridItem area={'fin'} direction={'column'} justify={'center'} align={'center'}>
                                    <Link to='/Checkout'>
                                        <Button
                                            backgroundColor={'#B3BFB8'}
                                            color={'#3C493F'}
                                            fontSize={'xl'}
                                            _hover={{
                                                backgroundColor: '#7E8D85',
                                                color: '#B3BFB8',
                                            }}>
                                            Finalizar compra
                                        </Button>
                                    </Link>
                                </GridItem>
                                <GridItem area={'delAll'} justifySelf={'left'} pl={6}>
                                    <Button
                                        backgroundColor={'#B3BFB8'}
                                        color={'#3C493F'}
                                        fontSize={'xl'}
                                        _hover={{
                                            backgroundColor: '#7E8D85',
                                            color: '#B3BFB8',
                                        }}>
                                        <span className='iconClearCart'>
                                            <TbGardenCartOff />
                                        </span>
                                        
                                    </Button>
                                </GridItem>
                            </Grid>
                    </>
            }
        </>
    )
}

export default Cart