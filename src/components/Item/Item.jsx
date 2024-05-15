import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button} from '@chakra-ui/react'
import './Item.scss'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const Item = ({ nombre, precio, img, descripcion, id , stock}) => {
    const [valid,setvalid] = useState(true)

    useEffect(()=>{
        const isInStock = () => {
            if (stock === 0) {
                setvalid(false)
            } else {
                setvalid(true)
            }
        }
        isInStock()
    })

    return (

        <Card className='cardConteiner' maxW='sm' bgColor={'#F0F7F4'}>
            <CardBody >
                <Image 
                    src={img}
                    alt={descripcion}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' color={'#3C493F'}>{nombre}</Heading>
                    <Text color='#3C493F' fontSize='2xl' >
                        ${precio}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                    {
                        valid ?
                <ButtonGroup spacing='2'>
                            <Button variant='solid' bgColor='#3C493F'>
                        <Link to={`/producto/${id}`}>Ver producto</Link>
                    </Button>
                </ButtonGroup>
                        :
                        <Text color={'#3C493F'} fontSize={'large'} fontWeight={'bolder'}>SIN STOCK</Text>
                    }
            </CardFooter>
        </Card>
    )
}

export default Item