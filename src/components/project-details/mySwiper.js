// import React from "react";
// import styles from '../../../../../components/projects.module.css'
// import Styles from './../../components/transiciones.module.css'
// import Carousel__Container from "../../components/corrousel/carrousel";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { Navbar } from "react-bootstrap";
import styles from './../../components/projects.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import "../../index.css"


import { GiSofa } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";

// import I1 from './../../../imagees/bath2/IMG_1150.jpg'
// import I2 from './../../../imagees/bath2/IMG_1151.jpg'
// import I3 from './../../../imagees/bath2/IMG_1840.jpg'
// import I4 from './../../../imagees/bath2/IMG_2069.jpg'
// import I7 from './../../../imagees/bath1/IMG_0010 - Copy.jpg'

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


// const Images=[
//     {
//       image:I1,
//       evento:"Img1"
//     },
//     {
//       image:I2,
//       evento:"Img2"
//     },
//     {
//       image:I3,
//       evento:"Img3"
//     },
//     {
//       image:I4,
//       evento:"Img4"
//     },
    
    
  
//   ]
  
  



export default function CarouselContainer({images}){
    return (
       

        <>
        
       
        <Tab.Container id="left-tabs-example" defaultActiveKey="0" className={styles.nav}>
        <Row>

        <Row sm={9}>
            <Tab.Content className={styles.image__container}>
              {images.map((image,index) => {
                return(
                  <Tab.Pane eventKey={index}> <img className={styles.Tab__image} src={image.imagen} />   </Tab.Pane>
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

            <Nav variant="pills" className={styles.flex__row}>

            {images.map((image,index) => {
            return(
                <SwiperSlide className={styles.Swiper__Slide}>
                    <Nav.Item>
                    <Nav.Link className={styles.nav__Item} eventKey={index}>
                        <img className={styles.nav__image} src={image.imagen} />
                        
                    </Nav.Link> 
                    </Nav.Item>
                </SwiperSlide>
            );
            })}


            </Nav>
            </Swiper>
          {/* </Row> */}
         
          {/* <hr/> */}
          
        </Row>
      </Tab.Container>
      </>
      );
}


