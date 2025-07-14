import React from 'react'

const DessertInfo = ({name,description,price}) => {
  return (
   <>
    <h2 className='text-zinc-500 text-base xs:text-xs lg:text-sm tracking-wider'>{name}</h2>
    <p className=' capitalize text-lg xs:text-xs lg:text-sm font-bold tracking-wider'>{description}</p>
    <p className='text-red-700 font-semibold text-lg xs:text-sm '>${price}</p>
   </>
  )
}

export default DessertInfo