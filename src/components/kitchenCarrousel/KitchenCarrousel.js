import React from "react";
import styles from "./kitchenCarrousel.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import cocinaI from "./../../imagenes/cocinaI.jpg"
import cocinaII from "./../../imagenes/CocinaII.jpg"
import cocina1 from "./../../imagenes/cocina1.jpg"
import cocina2 from "./../../imagenes/cocina2.jpg"





const IMAGES = [
    {
        // imagen: cocina1,
        imagen: cocinaI,
        texto: "your dream kitchen"
    },
    {
        // imagen: cocina2,
        imagen: cocinaII,
        texto: "your beautiful kitchen"
       },
    ]

   


export default function KitchenCarrousel(){
    return(
        <div className={styles.contenedorPrincipal} >
      <div className={styles.contenedorCarrusel}>
        <Carousel variant="dark" className={styles.carousel}>
          {IMAGES.map((item, index) => {
            return(
              <Carousel.Item interval={9000} key={index} className={styles.carouselItem}>
              <div className={styles.carouselItemDiv}>
                <div className={styles.imageDiv} >
                  <img className={styles.imagen} src={item.imagen} />
                  
                </div >
                <div className={styles.textCont}>
                <p className={styles.titulo}>{'< nombreNegocio Kitchen >'} </p>
                  <h1 className={styles.texto}>We build the perfect Kitchen for you, fulfilling your dreams and expectations.</h1>
                </div>
              
              </div>
            </Carousel.Item>
            );
          })}
        </Carousel>

      </div>
      
    </div>
    )
}