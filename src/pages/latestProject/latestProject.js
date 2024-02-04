import { Button } from 'react-bootstrap'
import styles from './latestProject.module.css'
import React from 'react'
import Styles from './../../components/transiciones.module.css'

export default function LatestProject(){
    return(
        <div className={styles.mainCont}>
            <h1 className={styles.titulo}>{'< Our Projects >'}</h1>
            <h2 className={styles.subTitulo}>Favorites Projects</h2>
            <div className={styles.imagenesCont}>
                <div className={styles.imagenes}>I1</div>
                <div className={styles.imagenes}>I2</div>
                <div className={styles.imagenes}>I3</div>

            </div>
            <div className={styles.imagenesCont}>
                <div className={styles.imagenes}>I1</div>
                <div className={styles.imagenes}>I2</div>
                <div className={styles.imagenes}>I3</div>

            </div>
            <div className={styles.botonCont}>
                <Button data-animation="diagonal" className={Styles.Boton} href="/portfolio"> {'<Portafolio>'}
                    <span className={Styles.borderTop} id="border"></span>
                    <span className={Styles.borderRight} id="border"></span>
                    <span className={Styles.borderBottom} id="border"></span>
                    <span className={Styles.borderLeft} id="border"></span>
                </Button>
            </div> 
        </div>
    )
}