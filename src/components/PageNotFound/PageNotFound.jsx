import { Box, Center, Image } from '@chakra-ui/react'

const PageNotFound = () => {
  return (
    <Center>
        <Box 
            w={'100%'}
            h={'90vh'}>
            <Image
            padding={'20'}
            w={'100%'}
            h={'100%'}
            src={'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714521600&semt=ais'}
            objectFit={'contain'}

            />
        </Box>
    </Center>
  )
}

export default PageNotFound