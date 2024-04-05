import react from "react";
import styles from './ProjectTabCard.module.css'

import I1 from './../../imagenes/kitchen1/20240105_174907.jpg'
import I2 from './../../imagenes/kitchen2/IMG_8833.jpg'

import { Link } from "react-router-dom"

export default function PorjectTabCard({ items }) {
    return (
        <div className={styles.main__container}>
            <div className={styles.image__conteiner}>
                {items.map((item, index) => {
                    return (
                        <div key={index} className={styles.image}>
                            <Link to={`/project-details/${item.id}`} className={styles.link}>
                                <img className={styles.room__image} src={item.imagen_principal} />
                            </Link>
                            <div className={styles.name__conteiner}>
                                <h2 className={styles.text}>{'< Go see our project >'}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}