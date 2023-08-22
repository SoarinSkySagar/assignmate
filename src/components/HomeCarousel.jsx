import React from 'react';
import Slider from 'react-slick';
import "tailwindcss/tailwind.css"


export default function HomeCarousel() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <div className='w-11/12 p-7 mx-auto'>
        <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <h1 className='text-7xl mb-20 text-white font-extrabold'>Our Happy Customers :D</h1>
        <Slider {...settings}>
        
          <div>
            <img src="assignmate-logo.jpg" className='mx-auto' alt="" />
          </div>
          <div>
            <img src="assignmate-logo.jpg" className='mx-auto' alt="" />
          </div>
          <div>
            <img src="assignmate-logo.jpg" className='mx-auto' alt="" />
          </div>
          <div>
            <img src="assignmate-logo.jpg" className='mx-auto' alt="" />
          </div>
          <div>
            <img src="assignmate-logo.jpg" className='mx-auto' alt="" />
          </div>
          <divs>
            <img src="assignmate-logo.jpg" className='mx-auto' alt="" />
          </divs>
        </Slider> 
        </div>
      )
}
