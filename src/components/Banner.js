import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Banner() {
  return (
    <div className='relative '>   
    <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
      autoPlay
      infiniteLoop
      showStatu
      interval={1000}
      >
        <div><img loading='lazy' src="https://www.shutterstock.com/image-vector/3d-yellow-great-discount-sale-260nw-2056851839.jpg" alt="" /></div>
        <div><img loading='lazy' src="https://th.com/is/image/BcomMedia/media/0610_HP_09_RTW_BikeShorts_1559243426341.jpg?scl=1&wid=1440" alt="" /></div>
        <div><img loading='lazy' src="https://i.pinimg.com/originals/8e/dc/a0/8edca0fc9ba10f24a23a34753ec53588.jpg" alt="" /></div>

      </Carousel>
    </div>
  )
}

export default Banner
