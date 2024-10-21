import './App.css'
import { Header } from './components/Header'
import { ProductCard } from './components/ProductCard'
import { AllRoutes } from './routes/AllRoutes'
import { useState } from 'react'

function App() {
  const products = [
    {
      id: 1,
      name: 'Sony Wh-Ch510 Bluetooth Wireless',
      price: 149,
      rating: 4.5,
      image:
        'https://raw.githubusercontent.com/ShubhamSarda/shopmate/refs/heads/main/public/assets/images/1001.png',
      description:
        'Wireless headphones with long-lasting battery life and quick charging.',
    },
    {
      id: 2,
      name: 'boAt Rockerz 450',
      price: 49,
      rating: 4.2,
      image:
        'https://raw.githubusercontent.com/ShubhamSarda/shopmate/refs/heads/main/public/assets/images/1002.png',
      description:
        'Wireless headphones with long-lasting battery life and comfortable fit.',
    },
    {
      id: 3,
      name: 'JBL Tune 760NC',
      price: 179,
      rating: 4.8,
      image:
        'https://raw.githubusercontent.com/ShubhamSarda/shopmate/refs/heads/main/public/assets/images/1003.png',
      description:
        'Wireless headphones with long-lasting battery life and active noise cancellation.',
    },
    {
      id: 4,
      name: 'Logitech H111 Wired',
      price: 39,
      rating: 4.1,
      image:
        'https://raw.githubusercontent.com/ShubhamSarda/shopmate/refs/heads/main/public/assets/images/1004.png',
      description:
        'Wired headphones with great sound quality and durable design.',
    },
    {
      id: 5,
      name: 'APPLE Airpods Max Bluetooth Headset',
      price: 199,
      rating: 4.9,
      image:
        'https://raw.githubusercontent.com/ShubhamSarda/shopmate/refs/heads/main/public/assets/images/1005.png',
      description:
        'Wireless earbuds with great sound quality and long-lasting battery life.',
    },
    {
      id: 6,
      name: 'ZEBRONICS Zeb-Thunder Wired',
      price: 29,
      rating: 4.3,
      image:
        'https://raw.githubusercontent.com/ShubhamSarda/shopmate/refs/heads/main/public/assets/images/1006.png',
      description:
        'Wired headphones with great sound quality and comfortable fit.',
    },
  ]
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  return (
    <div className='dark:bg-black bg-gray-300 min-h-screen'>
      <Header cartTotal={cartTotal} />

      <AllRoutes products={products} cart={cart} />
    </div>
  )
}

export default App
