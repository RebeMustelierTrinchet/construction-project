import react from "react";
import styles from './kitche.module.css'

import I1 from './../../imagenes/kitchen1/20240105_174907.jpg'
import I2 from './../../imagenes/kitchen2/IMG_8833.jpg'

import {Link} from "react-router-dom"

export default function Kitchen(){
    return(
        <div className={styles.mainCont}>
            <div className={styles.imagenesCont}>
                
                <div className={styles.imagenes}>
                    <Link to='/kitchen1' className={styles.link} >
                        <img className={styles.imagen__cocina} src={I1}  href="/kitchen1"/>
                        </Link>
                        <div className={styles.nombre}>
                            <h2 className={styles.texto}>Open Concept Kitchen/Dining Layout</h2>
                        </div>
                    
                </div>
                <div className={styles.imagenes}>
                    <Link to='/kitchen2' className={styles.link} >
                        <img className={styles.imagen__cocina} src={I2}  href="/kitchen2"/>
                    </Link>
                        <div className={styles.nombre}>
                        <h2 className={styles.texto}>A kitchen that represents your individual taste</h2>
                    </div>
                </div>
                {/* <div className={styles.imagenes}>
                <img className={styles.imagen__cocina} src={I1}  href="/"/>
                    <div className={styles.nombre}></div>
                </div> */}
            </div>
            {/* <div className={styles.imagenesCont}>
                <div className={styles.imagenes}>
                <img className={styles.imagen__cocina} src={I1}  href="/"/>
                    <div className={styles.nombre}></div>
                </div>
                <div className={styles.imagenes}>
                <img className={styles.imagen__cocina} src={I1}  href="/"/>
                    <div className={styles.nombre}></div>
                </div>
                <div className={styles.imagenes}>
                <img className={styles.imagen__cocina} src={I1}  href="/"/>
                    <div className={styles.nombre}></div>
                </div>
            </div> */}
        </div>
    )
}