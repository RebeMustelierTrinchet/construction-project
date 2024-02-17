import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './comments.module.css'
import Card from 'react-bootstrap/Card';
import I1 from './../../imagenes/I1.jpg'
// import Styles from './../components/transiciones.module.css'
import { Button } from 'react-bootstrap';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Comments() {
  
  const comentarios=[
    {
        text: "I was extremely pleased with the final result, as it was exceptional and exceeded all my expectations. The service provided was top quality and I felt treated with the utmost dedication and professionalism. The whole team made an effort to provide me with an unmatched experience and they truly succeeded in doing so. I have nothing but words of praise to describe how satisfied I am with the final result and the excellent service I received.",
        author:"Juanito Perez",
    },
    {
        text: "1. I was extremely delighted with the final outcome, as it was exceptional and surpassed all my expectations. The service provided was top-notch, and I felt treated with utmost dedication and professionalism. The entire team made every effort to provide me with an unparalleled experience, and they truly succeeded. I cannot find enough words of praise to describe how satisfied I am with the final result and the excellent service I received!",
        author:"Pedrito Sanchez",
    },
    {
        text: "1. I was extremely delighted with the final outcome as it exceeded all my expectations. The provided service was of top-notch quality and I felt treated with utmost dedication and professionalism. The entire team made every effort to provide me with an unparalleled experience, and they truly succeeded in doing so. I cannot express enough praise for how satisfied I am with the final outcome and the excellent service I received!",
        author:"Hello Kitty",
    },
    {
        text: "1. I was extremely delighted with the final outcome, as it surpassed all my expectations. The provided service was top-notch, and I felt treated with utmost dedication and professionalism. The entire team made every effort to provide me with an unparalleled experience, and they truly succeeded in doing so. I can't express enough praise to describe how satisfied I am with the final result and the excellent service I received!",
        author:"Yamile",
    },
    {
        text: "We build the perfect Kitchen for you, fulfilling your dreams and expectations.",
        author:"Carol",
    },
]
  return (
    <div className={styles.mainCont}>
        <h1 className={styles.titulo}>{'< What do others think >'}</h1>
        <h2 className={styles.subTitulo}> DAMARCO </h2>
      <Swiper
        // effect={'coverflow'}
        // grabCursor={true}
        // centeredSlides={true}
        // slidesPerView={'auto'}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        // pagination={true}
        // modules={[EffectCoverflow, Pagination]}
        // className={styles.swiper}
      >

        {comentarios.map((item, index) => {
          return(
            <SwiperSlide className={styles.swiperSlide} key ={index}> 
               <div className={styles.contComments}>
                      <p className={styles.text}>{item.text}</p>
                      <h2 className={styles.author}>{item.author}</h2>
                </div>  
            </SwiperSlide>
          );
        })}
        
      </Swiper>
      
    </ div>
  );
}
