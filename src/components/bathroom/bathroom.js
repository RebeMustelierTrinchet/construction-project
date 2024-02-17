import react from "react";
import styles from './../../pages/kitchen/kitche.module.css'
import I1 from './../../imagenes/bath1/IMG_7921.jpg'
import I2 from './../../imagenes/carrusel-Services/IMG_1934.jpg'
import {Link} from "react-router-dom"

export default function Bathroom(){
    return(
        <div className={styles.mainCont}>
            <div className={styles.imagenesCont}>

                <div className={styles.imagenes}>
                    <Link to='/Bath1' className={styles.link} >
                        <img className={styles.imagen__cocina} src={I1}  href="/Bath1"/>
                    </Link>
                    <div className={styles.nombre}>
                        <h2 className={styles.texto}>A luxurious and sophisticated bathroom</h2>
                    </div>  
                </div>
                <div className={styles.imagenes}>
                    <Link to='/Bath2' className={styles.link} >
                        <img className={styles.imagen__cocina} src={I2}  href="/Bath2"/>
                    </Link>
                    <div className={styles.nombre}>
                        <h2 className={styles.texto}>A luxurious and sophisticated bathroom</h2>
                    </div>  
                </div>
            </div>
            {/* <div className={styles.imagenesCont}>
                <div className={styles.imagenes}>
                    <div className={styles.nombre}></div>
                </div>
                <div className={styles.imagenes}>
                    <div className={styles.nombre}></div>
                </div>
                <div className={styles.imagenes}>
                    <div className={styles.nombre}></div>
                </div>
            </div> */}
        </div>
    )
}