import styles from './services.module.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OurServices from '../../components/ourServices/ourServices';
import Faq from '../../components/faq/faq';




export default function Services(){

    
    return(
        <div className={styles.main__conteiner}>
            <div className={styles.letters}>
                <h1 className={styles.title}>{'< What we do >'}</h1>
                <h2 className={styles.subtitle}>Home renovations:</h2>
                <p className={styles.text}> Transform your space with renovations.
                    Update your kitchen, bathroom, or living room. Personalize your 
                    home according to your tastes and needs. Whether it's small changes 
                    or a complete renovation, create the home of your dreams.</p>
            </div>
            <div className={styles.services}>
                <OurServices/>
            </div>
        </div>
    )
}