import { createContext } from 'react'

const initialState = {
  cartlist: [],
  cartTotal: 0,
}

const CartContext = createContext(initialState)

const CartProvider = ({ children }) => {
  const value = {}
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export { CartProvider, CartContext }
