import './App.css'
import { ItemDetailConteiner } from './components/ItemDetailConteiner/ItemDetailConteiner'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import Navbar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'element= {<ItemListConteiner title = 'Tienda'/>}/>
          <Route path='/categoria/:categoryId' element={<ItemListConteiner title='Tienda'/>}/>
          <Route path='/producto/:productoId' element={<ItemDetailConteiner />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>


  )
}

export default App
/*         
        <ItemListConteiner title ='Henko' />
        <ItemCount/> */