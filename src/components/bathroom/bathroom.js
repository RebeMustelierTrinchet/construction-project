import react from "react";
import styles from './bathroom.module.css'
export default function Bathroom(){
    return(
        <div className={styles.mainCont}>
            <div className={styles.imagenesCont}>
                <div className={styles.imagenes}>
                    <div className={styles.nombre}></div>
                </div>
                <div className={styles.imagenes}>
                    <div className={styles.nombre}></div>
                </div>
                <div className={styles.imagenes}>
                    <div className={styles.nombre}></div>
                </div>
            </div>
            <div className={styles.imagenesCont}>
                <div className={styles.imagenes}>
                    <div className={styles.nombre}></div>
                </div>
                <div className={styles.imagenes}>
                    <div className={styles.nombre}></div>
                </div>
                <div className={styles.imagenes}>
                    <div className={styles.nombre}></div>
                </div>
            </div>
        </div>
    )
}