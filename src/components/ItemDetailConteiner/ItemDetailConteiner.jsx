import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailConteiner = () => {
  const [producto , setProducto] = useState({})
  
  const { productoId } = useParams()
  
  useEffect(() => {
    getProductsById(productoId)
      .then((elemento) => setProducto(elemento))
      .catch((error) => console.log(error))
  },[productoId])
  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  )
}
