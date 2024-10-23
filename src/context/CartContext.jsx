import { createContext, useContext, useState } from 'react'

const initialState = {
  products: [],
  setProducts: () => {},
  deleteProduct: () => {},
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])

    console.log(cart)
  }

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.product.id))
    console.log(cart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
