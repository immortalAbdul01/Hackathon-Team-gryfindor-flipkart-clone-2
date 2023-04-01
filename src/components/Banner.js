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
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={1000}
      >
        <div><img loading='lazy' src="https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/11/Landing-page-banner-scaled.jpg" alt="" /></div>
        <div><img loading='lazy' src="https://th.bing.com/th/id/R.497762a8e92f3c9c065232a70fc43b18?rik=FnPAPfsDv7eGXQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0217%2f6856%2ffiles%2f1080x608-1_1024x1024.jpg%3f50257&ehk=fvfzgUDmVSpilNam5HNhENNUdrPckHG9MMLbiZXQlv0%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
        <div><img loading='lazy' src="https://i.ytimg.com/vi/tYpCyI89Yf8/maxresdefault.jpg" alt="" /></div>
        <div><img loading='lazy' src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0610_HP_09_RTW_BikeShorts_1559243426341.jpg?scl=1&wid=1440" alt="" /></div>
        <div><img loading='lazy' src="https://i.pinimg.com/originals/8e/dc/a0/8edca0fc9ba10f24a23a34753ec53588.jpg" alt="" /></div>

      </Carousel>
    </div>
  )
}

export default Banner
