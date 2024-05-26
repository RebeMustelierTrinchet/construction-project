import styles from './services.module.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OurServices from '../../components/ourServices/ourServices';
import Faq from '../../components/faq/faq';
import Styles from './../../components/transiciones.module.css'
import Comments from '../../components/comments/comments';
import Work__Process from '../../components/work-process/work_process';





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
                    <div className={styles.btn__container}>
                        <Button data-animation="diagonal" className={`${Styles.Boton} ${ styles.btn}`} href="/portfolio" > {'<Go Portfolio>'}
                        <span className={Styles.borderTop} id="border"></span>
                        <span className={Styles.borderRight} id="border"></span>
                        <span className={Styles.borderBottom} id="border"></span>
                        <span className={Styles.borderLeft} id="border"></span>
                        </Button>
                    </div>
            </div>
            <div className={styles.services}>
                <OurServices/>
            </div>
            <Comments />
            <Work__Process/>
            
        </div>
    )
}