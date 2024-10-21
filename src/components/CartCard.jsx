export const CartCard = (product) => {
  return (
    <div className='flex flex-col items-center bg-white border border-gray-200  shadow md:flex-row md:max-w-screen-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 min-w-full md:py-2 rounded-lg py-8  justify-between'>
      <img
        className='object-cover w-24 rounded-lg h-auto md:h-auto  md:w-24 md:rounded-none md:rounded-s-lg'
        src={product.product.image}
        alt=''
      />
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {product.product.name}
        </h5>
        <p className='mb-3 text-2xl font-bold text-gray-900 dark:text-gray-200'>
          ${product.product.price}
        </p>
      </div>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          />
        </svg>
      </button>
    </div>
  )
}
