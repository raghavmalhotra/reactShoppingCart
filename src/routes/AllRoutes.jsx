import { Routes, Route } from 'react-router-dom'
import { Home, Cart } from '../pages/'

export const AllRoutes = ({ products, cart, addtCart, removeCart }) => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home products={products} addtoCart={addtCart} />}
        />
        <Route
          path='/cart'
          element={<Cart cart={cart} removeCart={removeCart} />}
        />
      </Routes>
    </>
  )
}
