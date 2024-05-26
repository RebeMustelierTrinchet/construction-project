import React from "react";
import styles from "./carousel.module.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import text__styles from './../transiciones.module.css'

import I1 from "./../../imagenes/Carousel-services/IMG_1934.jpg"
import I2 from "./../../imagenes/Carousel-services/IMG_8833.jpg"
import I3 from "./../../imagenes/Carousel-services/Screenshot 2024-02-07 113332.png"




const IMAGES = [I1, I2, I3]

export default function Carousel__Container(){
    return(
        <div className={styles.contenedorPrincipal} >
      <div className={styles.Carousel__Container}>
        <Carousel variant="dark" className={styles.carousel}>
          {IMAGES.map((image, index) => {
            return(
              <Carousel.Item interval={9000} key={index} className={styles.carousel__item__container}>
              <div className={styles.carousel__item}>
                <div className={styles.image__contain}>
                  <img className={styles.image} src={image} />
                </div>
              </div>
            </Carousel.Item>
            );
          })}
       


        </Carousel>
           
        <div className={styles.text__container} >
          <div className={`${text__styles.letters} ${styles.letters}`} >

              <h1  className={`${text__styles.title} ${styles.title}`}>{'<Damrco Construction Services>'}</h1>
              <h2  className={`${text__styles.subtitle} ${styles.subtitle}`}> Turning Dreams into Reality: A Wide Range of Services for All Your Needs</h2>
            </div>
          </div>
      </div>

     
        
      
    </div>
    )
}