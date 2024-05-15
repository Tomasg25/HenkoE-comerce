import CardWidget from '../CardWidget/Cardwidget'
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box,} from '@chakra-ui/react'
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../img/henkoLogo-Photoroom.png-Photoroom.png'
import './NavBar.scss'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <Flex justify={'space-between'} align={'center'} className='NavBar'>
            <Box ml={10}>
                <Menu>
                    <MenuButton
                        bgColor={'#3C493F'}
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
            <Link to='/'><img src={Logo} className='Logo' /></Link>
            
            <Link to='/Carrito'><CardWidget /></Link>
        </Flex>
    )
}

export default Navbar