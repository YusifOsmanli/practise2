// import React from 'react'
import "./Section1.scss"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Section1() {
  return (
    <div >
          <Swiper pagination={true} modules={[Pagination,Autoplay]} className="mySwiper"
            
            loop={true}
            autoplay={{
                    delay: 1000,
                    disableOnInteraction:true
                }} >
        <SwiperSlide className='swipper1'> <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg.webp" alt="" />
        <div className='inseide1'> 
        <div className='inside1__left'>
            <p style={{color:"yellow"}}>01.</p>
            <p>02.</p>
            <p>03.</p>
        </div>
        <div className='inside1__right'>
            <h1>
                FOOD AND MORE.
                
            </h1>
            <p>BY chef Smithen Smith</p>
        </div>
        
        
        </div></SwiperSlide>
        <SwiperSlide className="swipper1"> <img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-2.jpg.webp" alt="" />
        <div className='inseide1'> 
        <div className='inside1__left'>
            <p style={{color:"yellow"}}>01.</p>
            <p>02.</p>
            <p>03.</p>
        </div>
        <div className='inside1__right'>
            <h1>
                Special Dish
                
            </h1>
            <p>BY chef Smithen Smith</p>
        </div>
        
        
        </div>
        </SwiperSlide>
        <SwiperSlide className='swipper1'><img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-3.jpg" alt="" />
        <div className='inseide1'> 
        <div className='inside1__left'>
            <p style={{color:"yellow"}}>01.</p>
            <p>02.</p>
            <p>03.</p>
        </div>
        <div className='inside1__right'>
            <h1>
               Hygenic Dish
                
            </h1>
            <p>BY chef Smithen Smith</p>
        </div>
        
        
        </div>
        </SwiperSlide>
  
      </Swiper>
          
        
      
    </div>
  )
}

export default Section1
