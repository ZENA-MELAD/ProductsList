import React from 'react'
import useGet from "../../Custom Hooks/useGet.js"
import config from "../../Constants/environment.js"
import Dessert from "../Dessert/Dessert.jsx"
import DessertInfo from '../DessertInfo/DessertInfo.jsx'
const Card = () => {
  const[allProducts,loading]=useGet(config.desserts)
  if (loading) return <p>loading products....</p>
  return (
   <>
{allProducts && allProducts.map(item=>(
  <div key={item.id} className='flex flex-col items-start'>
  <Dessert productImage={item.image}/>
  <DessertInfo name={item.name} description={item.description} price={item.price}/>
  </div>
))
}
 </>  
  )
}

export default Card