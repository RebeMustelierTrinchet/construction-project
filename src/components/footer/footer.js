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
        <div className={styles.main__Container}>
            
            <div className={styles.image__icon__container}>
                <img src={icono} className={styles.image__icon}/>
            </div>
            <p className={styles.text}>As an expert in making your dreams come true, we have extensive experience in building custom homes. Our goal is to help you create a home that is true to your style and personality.</p>
            <div className={styles.btn__container}>
                <div className={styles.sub__btn__container}>
                    <div className={styles.sub__btn__container}>
                        <Button className={styles.btn__social__media} href="https://www.facebook.com/Damarco.Tx?mibextid=LQQJ4d"><FaFacebookF  className={styles.button__icon}  /></Button>
                        <button className={styles.btn__social__media} href="/"><FaInstagram  className={styles.button__icon}  /></button>
                        <button className={styles.btn__social__media} href="/"><FaTwitter  className={styles.button__icon} /></button>
                        <button className={styles.btn__social__media} href="/"><CgMail  className={styles.button__icon} /> </button>
                    </div>

                </div>
                <div className={styles.btn__container__contact}>
                    <Button  className={styles.btn__contact} href="/contact-us" > {'Text Us'} </Button>
                </div>
            </div>
            <div className={styles.btn__container}>
                <div className={styles.Sub__Btn__Container}>
                    <Button className={styles.btn__navigation} href="/">Home</Button>
                    <Button className={styles.btn__navigation} href="/portfolio" >Portfolio</Button>
                    <Button className={styles.btn__navigation} href="/services">Services</Button>
                </div>
                <div className={styles.contact__us__container}>
                    <span className={styles.text__contact}><FaPhoneVolume size={"18px"} className={styles.icons}/><span className={styles.phone_number}>(936){' '}777-3000</span></span>
                    <span className={styles.text__contact}><CgMail className={styles.icons} />DamarCo.Tx@Gmail.Com</span>
                </div>
            </div>
            


            
        </div>
    )
}