import react from "react";
import styles from './ProjectTabCard.module.css'

import I1 from './../../imagenes/kitchen1/20240105_174907.jpg'
import I2 from './../../imagenes/kitchen2/IMG_8833.jpg'

import { Link } from "react-router-dom"

export default function PorjectTabCard({ items }) {
    return (
        <div className={styles.mainCont}>
            <div className={styles.imagenesCont}>
                {items.map((item, index) => {
                    return (
                        <div key={index} className={styles.imagenes}>
                            <Link to={`/project-details/${item.id}`} className={styles.link}>
                                <img className={styles.imagen__cocina} src={item.imagen_principal} />
                            </Link>
                            <div className={styles.nombre}>
                                <h2 className={styles.texto}>{'< Go see our project >'}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}