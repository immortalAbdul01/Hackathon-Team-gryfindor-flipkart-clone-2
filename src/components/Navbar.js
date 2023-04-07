import React from 'react'
import Image from 'next/image'
import { MenuIcon,SearchIcon,ShoppingCartIcon }from '@heroicons/react/outline'
import { signIn,signOut,useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { selectItems } from '../slices/basketSlice'
function Navbar() {
    const { data: session } = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)
  
  return (
    <header>
    {/* top */}
       <div className='flex items-center bg-blue-500 p-1 flex-grow py-2 '>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image onClick={()=>router.push('/')}
                src='https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png' width={70} height={40} objectFit='contain' className='cursor-pointer'/>
                     <Image onClick={()=>router.push('https://github.com/immortalAbdul01/Hackathon-Team-gryfindor-flipkart-clone-2')}
                src='https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png' width={70} height={40} objectFit='contain' className='cursor-pointer'/>
            </div>
            <div className='hidden sm:flex bg-green-400 items-center h-10 rounded-md hover:bg-yellow-500 flex-grow cursor-pointer'>
                <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                <SearchIcon className='h-12 p-4'/>
            </div>

            {/* Right */}
            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div onClick={!session ? signIn : signOut} className='link cursor-pointer' >
                    <p className='font-extrabold md:text-sm'>{session?`Hello ${session.user.name}`:'LOGIN'}</p>
                    {session?(<Image className='mx-auto' width={30} height={30} src={ session.user.image }/>):(<p></p>)}
               
                </div>
              
                <div onClick={()=>router.push('/checkout')} className='link relative items-center' >
                    <span className='absolute top-0 right-0 md:right-18 h-4 w-4 bg-green-400 text-center rounded-full text-black font-bold'>{items.length}</span>
                    <ShoppingCartIcon className='h-10'/>
                    <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                </div>
            </div>
       </div>


       {/* // bottom */}
       <div className='flex items-center bg-blue-500 text-white text-sm space-x-3 p-2 pl-6'>
        <p className='link flex items-center'>
            <MenuIcon className='h-6 mr-1'/>
            All
        </p>
        <p className='link'>
            Video Platform

        </p>
        <p className='link'>
           About Us

        </p>
        <p className='link'>
            Our Business

        </p>
        <p className='link hidden lg:inline-flex'>
           Electrons

        </p>
        <p className='link hidden lg:inline-flex'>
           Electrons

        </p>
        <p className='link hidden lg:inline-flex'>
           Electrons

        </p>
        <p className='link hidden lg:inline-flex'>
           Electrons

        </p>
        <p className='link hidden lg:inline-flex'>
           Electrons

        </p>
       </div>
    </header>
  )
}

export default Navbar
