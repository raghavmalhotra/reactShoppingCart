import { ProductCard } from '../components/ProductCard'
export const Home = ({ products }) => {
  return (
    <main className='container flex  flex-wrap justify-center gap-4 mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-400 pt-24 text-gray-600 dark:text-gray-300'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  )
}
