import { useState } from 'react'
import { CartCard } from '../components'

export const Cart = ({ cart }) => {
  return (
    <div className='container flex  flex-wrap justify-center gap-4 mx-auto px-4 py-8 bg-gray-300 dark:bg-gray-400 pt-24 text-gray-800 dark:text-gray-100'>
      <h1 className='text-3xl font-bold  text-center mb-4'>Cart</h1>
      {cart.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  )
}
