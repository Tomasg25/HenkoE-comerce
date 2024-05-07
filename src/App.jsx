import './App.css'
import { ItemDetailConteiner } from './components/ItemDetailConteiner/ItemDetailConteiner'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import Navbar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ContextProvider } from './Context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <ChakraProvider>
      <ContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/'element= {<ItemListConteiner title = 'Tienda'/>}/>
            <Route path='/Categoria/:categoryId' element={<ItemListConteiner title='Tienda'/>}/>
            <Route path='/Producto/:productoId' element={<ItemDetailConteiner />}/>
            <Route path='/*' element={<PageNotFound />} />
            <Route path='/Carrito' element={<Cart/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ChakraProvider>


  )
}

export default App