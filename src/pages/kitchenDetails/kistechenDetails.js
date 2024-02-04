import React from "react";
import styles from './kitchenDetails.module.css'
import KitchenCarrousel from "../../components/kitchenCarrousel/KitchenCarrousel";
import KitchenItems from "../../components/kitchenItem/kitchenItem";
import Kitchen from "../kitchen/kitchen"



export default function KitchenDetails(){
    return(
        <div className={styles.mainCont}> 
            <div className={styles.Cont}>
                <KitchenCarrousel />
            </div>

            <div className={styles.letras}>
                    <p className={styles.titulo}>{'< Services >'} </p>
                    <h2 className={styles.texto}>Some examples of kitchen remodeling</h2>
                </div>
            <KitchenItems/><br/>
            <div className={styles.letras}>
                    <p className={styles.titulo}>{'< Kitchens >'} </p>
                    <h2 className={styles.texto}>My favorite kitchen</h2>
                </div>

            
            <Kitchen/>
            
        </div>
    )

}