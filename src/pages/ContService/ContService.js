import React from "react";
import styles from './Contservice.module.css'
import Carousel__Container from "../../components/carousel/carousel";
import Services from "../services/services";
import Faq from "../../components/faq/faq";

export default function ContService(){
    return(
        <div>
            <Carousel__Container/>
            <Services />
            {/* <Faq/> */}
        </div>
    )
}