import './App.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import Navbar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <div>
        <Navbar />
      </div>
      <ItemListConteiner title='Henko' />
    </ChakraProvider>


  )
}

export default App
