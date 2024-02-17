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
        imagen: ImgKitchen,
        titulo: nombreNegocio,
        espacio:"< Kitchen >",
        text: "We build the perfect Kitchen for you, fulfilling your dreams and expectations.",
        boton:"See Kitchen",
        url:"/kitchen"
    },
    // {
    //     imagen: I1,
    //     titulo: nombreNegocio,
    //     espacio:"< Living Room >",
    //     text: " We transform your Living Room into a unique and personalized space, where you can enjoy special moments.",
    //     boton:"See Living Room",
    //     url:"/livingRoom"
    // },
    // {
    //     imagen: I1,
    //     titulo: nombreNegocio,
    //     espacio:"< Bedroom >",
    //     text: " We make your dream Bedroom come true, adapting to your tastes and needs.",
    //     boton:"See Bedroom",
    //     url:"/Bedroom"
    // },
    {
        imagen: ImgBath,
        titulo: nombreNegocio,
        espacio:"< Bathroom >",
        text: " No matter the size of your bathroom, we adapt to any space to create a relaxation oasis in your home.",
        boton:"See Bathroom",
        url:"/Bathroom"
    },
    {
      imagen: outSideImg,
      titulo: nombreNegocio,
      espacio:"< Others >",
      text: " We renovate the small details of your home to give it a unique and personalized style.",
      boton:"See Others Projects",
      url:"/OthersProjects"
  },
    
]
  return (
    <div className={styles.mainCont}>
      
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
            <SwiperSlide className={styles.swiperSlide} key={index} > 
            <Link to={item.ur} className={styles.link} >
                <div className={styles.contCartas}>
                    <div className={styles.cabeza}>
                        <img src={item.imagen} className={styles.imagen}/>
                        <span className={styles.titulos}>{item.titulo}</span>
                    </div>
                    <Card className={styles.Cartas}>
                      <Card.Body>                                    
                        <Card.Title className={styles.espacio} href={item.url}>{item.espacio}</Card.Title>
                          <Card.Text className={styles.text}>{item.text}
                          </Card.Text>
                      {/* <button href={item.url} className={styles.boton}>{item.boton}</button> */}
                      </Card.Body>
                    </Card>
                  </div>  
            </Link>
              </SwiperSlide>
          );
        })}
        
      </Swiper>
      <div className={styles.botonCont}>
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
