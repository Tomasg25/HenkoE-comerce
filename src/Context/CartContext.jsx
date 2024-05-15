import { createContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({children}) => {

    const [cart , setCart] = useState([])

    const addItem = (productToAdd, cantidad) => {
        const newProduct = {
            ...productToAdd,
            cantidad
        }
        if (InCart(newProduct.id)){
            const updateCart = cart.map((el) =>{
                if(el.id === newProduct.id ){
                    return {...el, cantidad: el.cantidad + newProduct.cantidad}
                }
                return el
            })
            setCart(updateCart)
        }else{
            setCart([...cart,newProduct])
        }
        
    }
    const InCart = (id) =>{
        return cart.some((el) => el.id === id)
    }
    const eliminarItem = (id) => {
        const itemEliminado = cart.filter((el) => el.id !== id)
        setCart([...itemEliminado])
    }

    const precioTotal = () =>{
        const total = cart.reduce((acc,el)=> acc + el.precio * el.cantidad, 0)
        return total
    }
    const clearCart = () =>{
        setCart([])
    }
    const cantidadTotal = () =>{
        const total = cart.reduce((acc,el)=> acc + el.cantidad, 0)
        return total
    }
return (
    <Context.Provider
        value={{
            cart,
            addItem,
            eliminarItem,
            precioTotal,
            clearCart,
            cantidadTotal
        }}
        >
        {children}
    </Context.Provider>
)
}

export default Context