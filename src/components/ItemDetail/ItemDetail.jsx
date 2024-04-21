
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({nombre,precio,stock,img,descripcion}) => {
    const onAdd = (cantidad) =>{
        console.log('Agregaste '+cantidad+' productos')
    }

    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={img} alt={descripcion}/>
            <Stack>
                <CardBody>
                    <Heading size='md'>{nombre}</Heading>
                    <Text>
                        ${precio}
                    </Text>
                    <Text py='2'>
                        {descripcion}
                    </Text>
                </CardBody>
                <Divider/>
                <CardFooter>
                <ItemCount initialValue={1} stock={stock} onAdd={onAdd}/>
                </CardFooter>
            </Stack>
        </Card>
    )
    }

export default ItemDetail