import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from 'react-currency-formatter'
import CheckoutProduct from '../components/CheckoutProduct'
import { loadStripe } from '@stripe/stripe-js'
// import createCheckoutSession from './api/create-checkout-session'
import { useSession } from 'next-auth/react'
import axios from 'axios'
const stripePromise = loadStripe(process.env.stripe_public_key);
function checkout() {
  const { data: session } = useSession()
  const total = useSelector(selectTotal)
  const items = useSelector(selectItems)

  const  createCheckoutSession = async()=>{
    const stripe = await stripePromise

    //call the backend
    const checkoutSession = await axios.post('/api/create-checkout-session',{
      items:items,
      email:session.user.email
    })
    //fronted 

    const result = await stripe.redirectToCheckout({
      sessionId:checkoutSession.data.id
    })
    if(result.error){
      alert('oops what the hell are you doing ')
    }
  }
  return (
    <div className='bg-gray-100'>
        <Navbar/>
      <main className='lg:flex max-w-screen-2xl mx-auto' >
       {/* left */}
       <div className='flex-grow m-5 shadow-sm' >
        <Image
        src='https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/11/Landing-page-banner-scaled.jpg' width={1020} height={250} objectFit='contain' />
            
        

        <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>{items.length>0?'Your flipkart bag':'Flipkart bag is empty'}</h1>

            {items.map((item,i)=>(
              <CheckoutProduct 
              key={i} 
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              

               />
            ))}
        </div>
       </div>


       {/* Right
        */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length>0 &&(
            <>
            <h2 className='whitespace-nowrap' >Subtotal {items.length} items: 
            <span className='font-bold' >
              <Currency quantity={total} currency='INR' />
            </span>
            </h2>
            <button role='link' onClick={createCheckoutSession} disabled={!session} className={`button mt-2 ${!session&& 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`} >
              {!session? 'Sign in to checkout':'checkout'}
            </button>
            </>
          )}
        </div>
      </main>
  
    </div>
  )
}

export default checkout


// stripe key 
// pk_test_51MnjvaSFoC6Q1uUWXwfMgorj51YHZKBCfg1rvLzqhPFaVVIYXqMpmNWYPJHj5LDkVRMf3Y8OaJTg26Soi0aMwSHc00QG4U6yId

// 
