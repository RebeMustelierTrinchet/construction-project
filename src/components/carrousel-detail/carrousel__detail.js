// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import styles from './carrousel__details.module.css';
// import text__styles from './../transiciones.module.css'

// // import required modules
// import { Pagination } from 'swiper/modules';
// import Card from 'react-bootstrap/Card';

// import I1 from './../../imagenes/bath1/IMG_8243.jpg'
// import I2 from './../../imagenes/bath1/IMG_7921.jpg'
// import I3 from './../../imagenes/bath2/IMG_2069.jpg'
// import I4 from './../../imagenes/bath1/IMG_7925.jpg'
// import I5 from './../../imagenes/bath2/IMG_1151 - Copy.jpg'
// import I6 from './../../imagenes/bath1/IMG_7797.jpg'

// import logo from './../../imagenes/icono dorado.png'
// export default function Carrousel__Details() {

//     const nombreNegocio= 'Damarco'
//   const Cartas=[
//     {
//         image: I1,
//         title: nombreNegocio,
//         service:"< Custom Design >",
//         text: "We create unique designs that fit your style and needs. From modern to classic bathrooms, we work with you to bring your vision to life.",
        
//     },
//     {
//         image: I2,
//         title: nombreNegocio,
//         service:"< Complete Remodeling >",
//         text: "We transform old bathrooms into modern, functional spaces. We handle everything from demolition to the final finishes.",
        
//     },
//     {
//         image: I3,
//         title: nombreNegocio,
//         service:"< Repairs and Maintenance >",
//         text: "We fix any problem in your bathroom, from leaks and cracks to installing new fixtures. We keep your bathroom in perfect condition.",
        
//     },
//     {
//         image: I4,
//         title: nombreNegocio,
//         service:"< Furniture and Accessories Installation >",
//         text: "We install bathroom furniture, mirrors, shelves, and all necessary accessories to enhance the functionality and aesthetics of your bathroom.",
        
//     },
//     {
//         image: I5,
//         title: nombreNegocio,
//         service:"< Plumbing Solutions >",
//         text: "We offer plumbing services to ensure that all water and drainage systems work correctly.",
        
//     },
//     {
//         image: I6,
//         title: nombreNegocio,
//         service:"<  Tiles and Flooring >",
//         text: "We install and repair tiles and flooring with precision and attention to detail, using high-quality materials to ensure durability and beauty.",
        
//     },
   
    
// ]
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={8}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className={styles.mySwiper}
//       >
//         {Cartas.map((item, index) => {
//           return(
//             <SwiperSlide className={styles.swiper__slide} key={index} > 
//                 <div className={styles.card__container}>
//                     <div className={styles.header}>
//                         <img src={item.image} className={styles.image}/>
//                         <img src={logo}  className={styles.icon} alt={'Damarco_icono'} />
//                     </div>
//                     <Card className={styles.sub__card__container}>
//                       <Card.Body>                                    
//                         <Card.Title className={`${text__styles.title} ${styles.title}`} >{item.service}</Card.Title>
//                         <   Card.Text className={`${text__styles.subtitle} ${styles.title}`}>Damarco</Card.Text>
//                           <Card.Text className={text__styles.text}>{item.text}</Card.Text>
//                       </Card.Body>
//                     </Card>
//                 </div>  
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>

//       {/* <img src={logo}  className={styles.icon} alt={'Damarco_icono'} /> */}
//     </>
//   );
// }
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './carrousel__details.module.css';
import text__styles from './../transiciones.module.css';
import { Pagination } from 'swiper/modules';
import Card from 'react-bootstrap/Card';
import logo from './../../imagenes/icono dorado.png';

export default function Carrousel__Details({ item }) {

  if (!Array.isArray(item)) {
    return null;
}
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className={styles.mySwiper}
            >
                {item.map((service, index) => (
                    <SwiperSlide className={styles.swiper__slide} key={index}>
                      <div className={styles.backgrond__container}></div>
                        <div className={styles.card__container}>
                            <div className={styles.header}>
                                <img src={service.image} className={styles.image} alt={service.alt} />
                                <img src={logo} className={styles.icon} alt={'Damarco_icono'} />
                            </div>
                            <Card className={styles.sub__card__container}>
                                <Card.Body>
                                    <Card.Title className={`${text__styles.title} ${styles.title}`}>{service.service}</Card.Title>
                                    <Card.Text className={`${text__styles.subtitle} ${styles.title}`}>Damarco</Card.Text>
                                    <Card.Text className={text__styles.text}>{service.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
