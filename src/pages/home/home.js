import React from 'react'; 
import styles from "./home.module.css"
import Button from 'react-bootstrap/Button';
import I1 from './../../imagenes/I1.jpg'
import I2 from './../../imagenes/I2.jpg'
import Services from '../services/services';
import LatestProject from '../latestProject/latestProject';
import Comments from '../../components/comments/comments';
import Faq from '../../components/faq/faq';

export default function Home(){
    return(
        <div className={styles.mainConteiner}>
           
            <div className={styles.bigConteiner}>
                <div className={styles.letras}>
                    <p className={styles.titulo}>{'< Quality Work & Duaraderos >'} </p>
                    <h2 className={styles.texto}>Remodeling, Renovation and High-End Designs For Your Property</h2>
                    <Button variant="outline-light" data-animation="diagonal" className={styles.Boton}>Contac Us
                        <span className={styles.borderTop} id="border"></span>
                        <span className={styles.borderRight} id="border"></span>
                        <span className={styles.borderBottom} id="border"></span>
                        <span className={styles.borderLeft} id="border"></span>
                    </Button>
                </div>
                <div className={styles.leftConteiner}>
                <img className={styles.imagenIzquierda} src={I1}></img>
                </div>
                <div className={styles.rightConteiner}>
                {/* <img className={styles.imagenDerecha} src={I2}></img> */}
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