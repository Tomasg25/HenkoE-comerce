import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button} from '@chakra-ui/react'
import './Item.scss'
import {Link} from 'react-router-dom'

const Item = ({ nombre, precio, img, descripcion, id , stock}) => {
    return (

        <Card className='cardConteiner' maxW='sm' bgColor={'#FBFAF8'}>
            <CardBody >
                <Image 
                    src={img}
                    alt={descripcion}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text color='#242424' fontSize='2xl' >
                        ${precio}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' bgColor='#637074'>
                        <Link to={`/producto/${id}`}>
                            Ver Producto
                        </Link>
                    </Button>


                    <Button variant='ghost' bgColor='#637074'>
                        Agregar al carrito
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item