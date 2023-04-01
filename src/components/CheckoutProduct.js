import React from 'react'
import Image from 'next/image'
import { CurrencyRupeeIcon, StarIcon } from '@heroicons/react/outline'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket,removeFromBasket } from '../slices/basketSlice'


function CheckoutProduct({id,title,price,rating,description,category,image}) {
    const dispatch= useDispatch()
    const removeItem=()=>{
        dispatch(removeFromBasket({id}))
    }
    const addItem=()=>{
        const product={

            id,title,price,rating,description,category,image
        }
dispatch(addToBasket(product))
    }
  return (
    <div className='grid grid-cols-5' >
      <Image src={image} height={200} width={200} objectFit='contain' ></Image>

      {/* middle  */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <p>{category}</p>
        <div className='flex'>
            {Array(rating).fill().map((_,i)=>(
                <StarIcon key={i} className='h-5 text-yellow-500' />
            )
            )}
        </div>
        <p className='text-x5 my-2 line-clamp-3 ' >{description}</p>
      <Currency quantity={price} currency='INR'/>
      </div>
      {/* Right  */}
      <div className='flex flex-col space-y-2 my-auto justify-self-end' >

      <button className='button mt-auto' onClick={addItem}>Add to basket</button>
      <button onClick={removeItem} className='button mt-auto' >Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
