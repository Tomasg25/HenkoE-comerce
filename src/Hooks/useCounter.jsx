import { useState } from 'react'

const useCounter = (initialValue, stock) => {
    const [contador, setContador]=useState(initialValue)

    const sumar = () => {
        contador < stock && setContador(contador + 1)
    }
    const restar = () => {
        contador > initialValue && setContador(contador - 1)
    }
  return {
    contador,
    sumar,
    restar
  }
}

export default useCounter