import React from 'react'

const DessertInfo = ({name,description,price}) => {
  return (
   <>
    <h2 className='text-zinc-500 text-base xs:text-xs lg:text-sm tracking-wider mb-1.5'>{name}</h2>
    <p className=' capitalize text-lg xs:text-xs lg:text-sm font-bold tracking-wider mb-1.5'>{description}</p>
    <p className='text-red-700 font-semibold text-lg xs:text-sm '>${price}</p>
   </>
  )
}

export default DessertInfo