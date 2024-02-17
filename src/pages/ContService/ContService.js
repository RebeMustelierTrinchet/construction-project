import React from "react";
import styles from './Contservice.module.css'
import Carrusel from "../../components/corrousel/carrousel";
import Services from "../services/services";
import Faq from "../../components/faq/faq";

export default function ContService(){
    return(
        <div>
            <Carrusel/>
            <Services />
            <Faq/>
        </div>
    )
}