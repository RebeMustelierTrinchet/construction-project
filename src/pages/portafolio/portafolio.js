import React from "react";
import styles from './portafolio.module.css'
import Styles from './../../components/transiciones.module.css'
import Carrusel from "../../components/corrousel/carrousel";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import stilos from './../../components/navBar/navBar.module.css'
import NavPortafolio from "./navPortafolio";
import Comments from "../../components/comments/comments";
// import Styles from "../../components/transiciones.module.css"

import Button from 'react-bootstrap/Button';

export default function Portafolio(){
    return(
        <div className={styles.mainCont}>
            <Carrusel/>
            <div className={Styles.letras}>
                <h1 className={Styles.titulo}>{'Click to view full Project'}</h1>
                <h2 className={Styles.subTitulo}>Home renovations Photos:</h2>
            </div> 
            <div className={styles.contNav}>
                <NavPortafolio/>
                <Button variant="outline-light" data-animation="diagonal" className={Styles.Boton}>Go Portafolio
                    <span className={Styles.borderTop} id="border"></span>
                    <span className={Styles.borderRight} id="border"></span>
                    <span className={Styles.borderBottom} id="border"></span>
                    <span className={Styles.borderLeft} id="border"></span>
                </Button> 
            </div>
            <div className={styles.contPort}>
              <Comments/>
            </div>

            
        </div>
    )
}