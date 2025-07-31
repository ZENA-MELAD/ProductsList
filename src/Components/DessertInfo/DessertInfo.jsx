import React from 'react'

const DessertInfo = ({name,description,price}) => {
  return (
   <>
    <h2 className='text-zinc-700 text-base xs:text-xs sm:text-base  font-bold tracking-wider text-center'>{name}</h2>
     <p className='text-red-700 font-semibold text-lg xs:text-sm sm:text-base'>${price}</p>
    <p className=' capitalize text-lg xs:text-xs sm:text-base  font-medium'>{description}</p>
   
   </>
  )
}

export default DessertInfo