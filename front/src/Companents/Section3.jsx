// import React from 'react'
import "./Section3.scss"
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function Section3() {
  return (
    <div >
          <Swiper pagination={true} modules={[Pagination,Autoplay]} className="mySwiper"
           
           loop={true}
           autoplay={{
                   delay: 1000,
                   disableOnInteraction:true
               }}>
        <SwiperSlide className='swipper3'> <img src="https://preview.colorlib.com/theme/pulse/img/review-bg.jpg.webp" alt="" />
        <div className='inseide3'> 
        <div className='inside3__top'>
        <i class="fa-solid fa-ice-cream"></i>
        </div>
        <div className='inside3__2'>
            <div className='xett' style={{width:"100px", height:"1px",backgroundColor:"yellow"}}></div>
            <div> jkjhkjhjkh</div>
            <div className='xett'></div>
           
        </div>
        <div className='section3__3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda recusandae illum quibusdam cupiditate dolorem maiores quaerat in dolorum provident accusantium at doloribus iusto sunt, similique enim esse expedita neque?</p>
        </div>
        <div style={{marginTop:"30px"}}>
            <span style={{color:"yellow"}}>Ted Chapman</span> <span>Client</span>
        </div>
        
        
        </div></SwiperSlide>
        <SwiperSlide className='swipper3'> <img src="https://preview.colorlib.com/theme/pulse/img/review-bg.jpg.webp" alt="" />
        <div className='inseide3'> 
        <div className='inside3__top'>
        <i class="fa-solid fa-ice-cream"></i>
        </div>
        <div className='inside3__2'>
            <div className='xett' style={{width:"100px", height:"1px",backgroundColor:"yellow"}}></div>
            <div> jkjhkjhjkh</div>
            <div className='xett'></div>
           
        </div>
        <div className='section3__3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda recusandae illum quibusdam cupiditate dolorem maiores quaerat in dolorum provident accusantium at doloribus iusto sunt, similique enim esse expedita neque?</p>
        </div>
        <div style={{marginTop:"30px"}}>
            <span style={{color:"yellow"}}>Ted Chapman</span> <span>Client</span>
        </div>
        
        
        </div>
        </SwiperSlide>
        
  
      </Swiper>
          
        
      
    </div>
  )
}

export default Section3
