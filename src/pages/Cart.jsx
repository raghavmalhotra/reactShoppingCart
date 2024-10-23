import { useEffect, useState } from 'react'
import { CartCard } from '../components'
import { useCart } from '../context/CartContext'

export const Cart = () => {
  const { cart } = useCart()

  if (cart.length === 0) {
    return (
      <div className='container flex  flex-wrap justify-center gap-4 mx-auto px-4 py-8 bg-gray-300 dark:bg-gray-400 pt-24 text-gray-800 dark:text-gray-100'>
        <h1 className='text-3xl font-bold  text-center mb-4'>Cart is empty</h1>
      </div>
    )
  }
  return (
    <div className='container flex  flex-wrap justify-center gap-4 mx-auto px-4 py-8 bg-gray-300 dark:bg-gray-400 pt-24 text-gray-800 dark:text-gray-100'>
      <h1 className='text-3xl font-bold  text-center mb-4'>{`Cart (${cart.length})`}</h1>
      {cart.map((product) => (
        <CartCard key={Math.random()} product={product} />
      ))}
    </div>
  )
}
