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
import Logo from '../../img/henkoLogo-Photoroom.png-Photoroom.png'
import './NavBar.scss'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <Flex justify={'space-between'} align={'center'} className='NavBar'>
            <Box ml={10}>
                <Menu>
                    <MenuButton
                        bgColor={'#637074'}
                        as={IconButton}
                        aria-label='Options'
                        icon={<RxHamburgerMenu />}
                        variant='outline' />
                    <MenuList color={'#242424'}>
                        <MenuItem ><Link to='/'>Inicio</Link></MenuItem>
                        <MenuItem ><Link to='/categoria/Remeras'> Remeras </Link></MenuItem>
                        <MenuItem ><Link to='/categoria/Buzos'> Buzos </Link></MenuItem>
                        <MenuItem ><Link to='/categoria/Pantalones'> Pantalones </Link></MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <img src={Logo} className='Logo' />
            <CardWidget />
        </Flex>
    )
}

export default Navbar