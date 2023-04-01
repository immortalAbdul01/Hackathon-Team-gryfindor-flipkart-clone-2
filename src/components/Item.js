import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const Max = 5 ;
const Min = 1;
function Item({id,title,price,description, category,image}) {
  const dispatch = useDispatch()
    const [rating]=useState(
        Math.floor(Math.random()*(Max-Min+1))+Min
    )
    const addItem= ()=>{
      alert('Item added to basket click on basket to checkout')

      const product = { 
        id,title,price,rating,description,category,image
      }
      dispatch(addToBasket(product))
    }
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absoulte top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image src={image} height={200} width={200} objectFit='contain'/>
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
    {Array(rating).fill().map((_,i)=>(

      <StarIcon className='h-5 text-yellow-500'/>
    ))}
      </div>
    <p className='text-xs my-2 line-clamp-2'>{description}</p>
    <div className='mb-5'>

    <Currency
  quantity={price}
  currency="INR"
/>
    </div>
    <button className='mt-auto button' onClick={addItem}> Add to chor bazzar Bag</button>
    </div>
  )
}

export default Item
