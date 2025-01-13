import React from 'react'

const Watches = () => {

  const watchData = [
    {id: 1, name:'WhiteHorse', price: 12000, description: 'Luxury watch', image: '/image-1.jpg' },
    {id: 2, name:'Uniq-Glass', price: 8000, description: 'Stylish', image: '/image-2.jpg' },
    {id: 3, name:'BlackCamel', price: 25000, description: 'Elegant timepiece', image: '/image-3.jpg' },
    {id: 4, name:'SteelMilan', price: 10000, description: 'Bold and rugged', image: '/image-4.jpg' },
    {id: 5, name:'SteelSoft', price: 18000, description: 'Sporty and stylish', image: '/image-5.jpg' },
    {id: 6, name:'SteelSilver', price: 12000, description: 'Affordable and reliable', image: '/image-6.jpg' }

  ]
  return (
    <div>
      <div className='watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
        {watchData.map((watch) => (
          <div key={watch.id} className='bg-white p-5 rounded-md shadow-sm text-center'>
              <img src={watch.image} alt={watch.name} className='w-full rounded-md  transition-transform duration-300 transform hover:scale-100'/>
              <h3>{watch.name}</h3>
              <p className='text-gray-500'>{watch.description}</p>
              <div className='price text-blue-700 text-xl font-semibold mt-2'>${watch.price}</div>
              <button className='mt-4 px-4 py-2 bg-blue-700 text-white rounded-md'>Add to Cart</button>
          </div>
        )
      
      )}
      </div>
    </div>
  )
}

export default Watches
