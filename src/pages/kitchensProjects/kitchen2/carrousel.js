// import React from "react";
import styles from './../../../components/projects.module.css'
// import Styles from './../../components/transiciones.module.css'
// import Carrusel from "../../components/corrousel/carrousel";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { Navbar } from "react-bootstrap";
// import stilos from './../../components/navBar/navBar.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import "../../index.css"


import { GiSofa } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";

import I1 from './../../../imagenes/kitchen2/IMG_0275.jpg'
import I2 from './../../../imagenes/kitchen2/IMG_0276.jpg'
import I3 from './../../../imagenes/kitchen2/IMG_8035.jpg'
import I4 from './../../../imagenes/kitchen2/IMG_8282.jpg'
import I5 from './../../../imagenes/kitchen2/IMG_6440.jpg'
import I6 from './../../../imagenes/kitchen2/IMG_8833.jpg'

// otro nav
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



const Images=[
  {
    imagen:I1,
    evento:"Img1"
  },
  {
    imagen:I2,
    evento:"Img2"
  },
  {
    imagen:I3,
    evento:"Img3"
  },
  {
    imagen:I4,
    evento:"Img4"
  },
  {
    imagen:I5,
    evento:"Img5"
  },

 

]



export default function CarruselKitchen1(){
    return (
       

        <>
       
        <Tab.Container id="left-tabs-example" defaultActiveKey="Img1" className={styles.nav}>
        <Row>

        <Row sm={9}>
            <Tab.Content className={styles.imagen__content}>
              {Images.map((item,index) => {
                return(
                  <Tab.Pane eventKey={item.evento}> <img className={styles.Tab__imagen} src={item.imagen} />   </Tab.Pane>
                );
              })}

            </Tab.Content>
          </Row>
            
          {/* <Row sm={19}> */}
          <Swiper
                grabCursor={true}
                slidesPerView={'auto'}
                spaceBetween={45}
                centeredSlides={true}
                freeMode={true}
                pagination={{
                clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className={styles.mySwiper}
            >

            <Nav variant="pills" className={styles.flexRow}>

              {Images.map((item,index) => {
                return(
                    <SwiperSlide className={styles.SwiperSlide}>
                      <Nav.Item className={styles.nav_obj}>
                        <Nav.Link className={styles.navItem} eventKey={item.evento}>
                            <img className={styles.nav__imagen} src={item.imagen} />    
                        </Nav.Link> 
                      </Nav.Item>
                    </SwiperSlide>
                );
              })}
            
              
            </Nav>
            </Swiper>
          
        </Row>
      </Tab.Container>
      </>
      );
}


