import styles from './services.module.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OurServices from '../../components/ourServices/ourServices';
import Faq from '../../components/faq/faq';




export default function Services(){

    
    return(
        <div className={styles.mainCont}>
            <div className={styles.letras}>
                <h1 className={styles.titulo}>{'< What we do >'}</h1>
                <h2 className={styles.subTitulo}>Home renovations:</h2>
                <p className={styles.texto}> Transform your space with renovations.
                    Update your kitchen, bathroom, or living room. Personalize your 
                    home according to your tastes and needs. Whether it's small changes 
                    or a complete renovation, create the home of your dreams.</p>
            </div>
            <div className={styles.services}>
                {/* {Cartas.map((item, index) => {
                    return(
                        <div className={styles.contCartas}>
                            <div className={styles.cabeza}>
                                <img src={item.imagen} />
                                <span className={styles.titulos}>{item.titulo}</span><hr/>
                            </div>
                            <Card className={styles.Cartas} key={index}>
                                {/* <Card.Img variant="top" src={item.imagen}  /><span className={styles.titulo}>{item.titulo}</span><hr/> }
                                <Card.Body>                                    
                                    <Card.Title className={styles.espacio}>{item.espacio}</Card.Title>
                                    <Card.Text className={styles.text}>{item.text}
                                    </Card.Text>
                                    <Button variant="primary" href={item.url} className={styles.boton}>{item.boton}</Button>
                                </Card.Body>
                            </Card>
                        </div>            
                        );
                     })} */}
                <OurServices/>
                
                
                
                

            </div>
        </div>
    )
}