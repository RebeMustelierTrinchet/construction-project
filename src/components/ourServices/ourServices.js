import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './ourServices.module.css'
import Card from 'react-bootstrap/Card';
import I1 from './../../imagenes/I1.jpg'

// imagenes
import ImgKitchen from './../../imagenes/kitchen2/IMG_8833.jpg'
import ImgBath from './../../imagenes/bath1/IMG_7921.jpg'
import outSideImg from './../../imagenes/Screenshot 2024-02-07 11333.png'

import Styles from './../../components/transiciones.module.css'
import { Button } from 'react-bootstrap';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import {Link} from "react-router-dom"

export default function OurServices() {
  const nombreNegocio= 'Damarco'
  const Cartas=[
    {
        image: ImgKitchen,
        title: nombreNegocio,
        room:"< Kitchen >",
        text: "We build the perfect Kitchen for you, fulfilling your dreams and expectations.",
        boton:"See Kitchen",
        url:"/project-service/kitchen"
    },
    {
        image: ImgBath,
        title: nombreNegocio,
        room:"< Bathroom >",
        text: " No matter the size of your bathroom, we adapt to any space to create a relaxation oasis in your home.",
        boton:"See Bathroom",
        url:"/project-service/bathroom"
    },
    {
      image: outSideImg,
      title: nombreNegocio,
      room:"< Others >",
      text: " We renovate the small details of your home to give it a unique and personalized style.",
      boton:"See Others Projects",
      url:"/project-service/varied_spaces"
  },
    
]
  return (
    <div className={styles.main__container}>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper}
      >
        {Cartas.map((item, index) => {
          return(
            <SwiperSlide className={styles.swiper__slide} key={index} > 
            <Link to={item.url} className={styles.link} >
                <div className={styles.card__container}>
                    <div className={styles.header}>
                        <img src={item.image} className={styles.image}/>
                        <span className={styles.titles}>{item.title}</span>
                    </div>
                    <Card className={styles.sub__card__container}>
                      <Card.Body>                                    
                        <Card.Title className={styles.room} href={item.url}>{item.room}</Card.Title>
                          <Card.Text className={styles.text}>{item.text}
                          </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>  
            </Link>
              </SwiperSlide>
          );
        })}
        
      </Swiper>
      <div className={styles.btn__container}>
        <Button data-animation="diagonal" className={Styles.Boton} href="/contact-us" > {'<Contac Us>'}
          <span className={Styles.borderTop} id="border"></span>
          <span className={Styles.borderRight} id="border"></span>
          <span className={Styles.borderBottom} id="border"></span>
          <span className={Styles.borderLeft} id="border"></span>
        </Button>
      </div>
    </ div>
  );
}
