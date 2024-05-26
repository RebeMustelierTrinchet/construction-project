import styles from './ourServices_text.module.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Styles from './../../components/transiciones.module.css'





export default function Our__service__text(){

    
    return(
        <div className={styles.main__conteiner}>
            <div className={styles.letters}>
                <h1 className={styles.title}>{'< What we do >'}</h1>
                <h2 className={styles.subtitle}>Home renovations:</h2>
                <p className={styles.text}> Transform your space with renovations.
                    Update your kitchen, bathroom, or living room. Personalize your 
                    home according to your tastes and needs. Whether it's small changes 
                    or a complete renovation, create the home of your dreams.</p>
                    <div className={styles.btn__container}>
                        <Button data-animation="diagonal" className={`${Styles.Boton} ${ styles.btn}`} href="/portfolio" > {'<Go Portfolio>'}
                        <span className={Styles.borderTop} id="border"></span>
                        <span className={Styles.borderRight} id="border"></span>
                        <span className={Styles.borderBottom} id="border"></span>
                        <span className={Styles.borderLeft} id="border"></span>
                        </Button>
                    </div>
            </div>
           
            
        </div>
    )
}