import styles from './footer.module.css'
import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaTwitter, FaInstagram,FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Styles from './../transiciones.module.css'
import { Button } from 'react-bootstrap';
import icono from './../../imagenes/icono.png'

import { FaPhoneVolume } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className={styles.mainCont}>
            
            <div className={styles.contenedor__imagen__icono}>
                <img src={icono} className={styles.imagen__icono}/>
            </div>
            <p className={styles.text}>As an expert in making your dreams come true, we have extensive experience in building custom homes. Our goal is to help you create a home that is true to your style and personality.</p>
            <div className={styles.littleCont}>
                <div className={styles.contBoton}>
                    <div className={styles.contBoton}>
                        <Button className={styles.boton} href="https://www.facebook.com/Damarco.Tx?mibextid=LQQJ4d"><FaFacebookF  className={styles.button__iconos}  /></Button>
                        <button className={styles.boton} href="/"><FaInstagram  className={styles.button__iconos}  /></button>
                        <button className={styles.boton} href="/"><FaTwitter  className={styles.button__iconos} /></button>
                        <button className={styles.boton} href="/"><CgMail  className={styles.button__iconos} /> </button>
                    </div>

                </div>
                <div className={styles.botonCont}>
                    <Button  className={styles.Boton} href="/contact-us" > {'Text Us'} </Button>
                </div>
            </div>
            <div className={styles.littleCont}>
                <div className={styles.ContBoton}>
                    <Button className={styles.botonNav} href="/">Home</Button>
                    <Button className={styles.botonNav} href="/portfolio" >Portfolio</Button>
                    <Button className={styles.botonNav} href="/services">Services</Button>
                </div>
                <div className={styles.contUs}>
                    <span className={styles.texto}><FaPhoneVolume size={"18px"} className={styles.iconos}/><span className={styles.phone_number}>(936){' '}777-3000</span></span>
                    <span className={styles.texto}><CgMail className={styles.iconos} />DamarCo.Tx@Gmail.Com</span>
                </div>
            </div>
            


            
        </div>
    )
}