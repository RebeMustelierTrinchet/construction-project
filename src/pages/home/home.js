import React from 'react'; 
import styles from "./home.module.css"
import Button from 'react-bootstrap/Button';
import I1 from './../../imagenes/kitchen2/IMG_8833 - Copy.jpg'
import I2 from './../../imagenes/I2.jpg'
import Services from '../services/services';
import Carousel__Container from '../../components/carousel/carousel';
import LatestProject from '../../components/latestProject/latestProject';

export default function Home(){
    return(
        <div className={styles.main__conteiner}>
           
            <div className={styles.regular__conteiner}>
                
                <div className={styles.letters}>
                    <p className={styles.title}>{'< Quality Work & Durable >'} </p>
                    <h2 className={styles.text}>Remodeling, Renovation and High-End Designs For Your Property</h2>
                    <Button variant="outline-light" data-animation="diagonal" className={styles.Boton}  href="/contact-us">Contac Us
                        <span className={styles.borderTop} id="border"></span>
                        <span className={styles.borderRight} id="border"></span>
                        <span className={styles.borderBottom} id="border"></span>
                        <span className={styles.borderLeft} id="border"></span>
                    </Button>
                </div>
                <div className={styles.left__conteiner}>
                <img className={styles.left__image} src={I1}></img>
                </div>
                <div className={styles.right__conteiner}>
                {/* <img className={styles.imagenDerecha} src={I2}></img> */}
                </div>
            
            </div>
            <div className={styles.movil__view__conteiner}>
                <Carousel__Container/>
                <div className={styles.letters}>
                    <p className={styles.title}>{'< Quality Work & Durable >'} </p>
                    <h2 className={styles.text}>Remodeling, Renovation and High-End Designs For Your Property</h2>
                    <Button variant="outline-light" data-animation="diagonal" className={styles.Boton}  href="/contact-us">Contac Us
                        <span className={styles.borderTop} id="border"></span>
                        <span className={styles.borderRight} id="border"></span>
                        <span className={styles.borderBottom} id="border"></span>
                        <span className={styles.borderLeft} id="border"></span>
                    </Button>
                </div>
            </div>

            <div>
                <Services />
            </div>
            <div>
                <LatestProject />
            </div>
            {/* <div>
                { <Comments /> }
                <Faq />
            </div> */}

        </div>
    )
}