import CardWidget from '../CardWidget/Cardwidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    /*     MenuItemOption,
        MenuGroup,
        MenuOptionGroup,
        MenuDivider, */
    IconButton,
    Flex,
    Box,
} from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsHandIndexThumb } from "react-icons/bs";
import Logo from '../../img/henkoLogo.png'
import './NavBar.css'
const Navbar = () => {
    return (
        <Flex justify={'space-between'} align={'center'} className='NavBar'>
            <Box ml={10}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<RxHamburgerMenu />}
                        variant='outline' />
                    <MenuList color={'#242424'}>
                        <MenuItem icon={<BsHandIndexThumb />}>
                            Inicio
                        </MenuItem>
                        <MenuItem icon={<BsHandIndexThumb />}>
                            Remeras Y Musculosas
                        </MenuItem>
                        <MenuItem icon={<BsHandIndexThumb />}>
                            Pantalones Y Bermudas
                        </MenuItem>
                        <MenuItem icon={<BsHandIndexThumb />}>
                            Buzos
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <img src={Logo} className='Logo' />
            <CardWidget />
        </Flex>
    )
}

export default Navbar