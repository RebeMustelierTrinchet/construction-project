import React from "react";
import styles from "./carrousel.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import I1 from "./../../imagenes/carrusel-Services/IMG_1934.jpg"
import I2 from "./../../imagenes/carrusel-Services/IMG_8833.jpg"
import I3 from "./../../imagenes/carrusel-Services/Screenshot 2024-02-07 113332.png"




const IMAGES = [I1, I2, I3]

export default function Carrusel(){
    return(
        <div className={styles.contenedorPrincipal} >
      <div className={styles.contenedorCarrusel}>
        <Carousel variant="dark" className={styles.carousel}>
          {IMAGES.map((image, index) => {
            return(
              <Carousel.Item interval={9000} key={index} className={styles.carouselItem}>
              <div className={styles.carouselItemDiv}>
                <div className={styles.imageDiv}>
                  <img className={styles.imagen} src={image} />
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