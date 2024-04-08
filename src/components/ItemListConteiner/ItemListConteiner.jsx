import { Box, Center, Heading } from "@chakra-ui/react"

const ItemListConteiner = ({ title }) => {
    return (
        <Box textAlign={'center'} mt={15}>
            <Heading>{title}</Heading>
        </Box>
    )
}

export default ItemListConteiner