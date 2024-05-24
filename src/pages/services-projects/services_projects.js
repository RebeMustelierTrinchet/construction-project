import React from 'react'; 
import styles from "./services_projects.module.css"
import Button from 'react-bootstrap/Button';
import text__styles from './../../components/transiciones.module.css'
import Header_Bath_Project from '../../components/header-bath-project/headre_bath_project';
import B2 from './../../imagenes/bath2/IMG_1934.jpg'
import Carrousel__Details from '../../components/carrousel-detail/carrousel__detail';
import B1 from './../../imagenes/bath1/IMG_7916.jpg'
import b_background from './../../imagenes/bath1/IMG_7921.jpg'
import k_background from './../../imagenes/CocinaII.jpg'
import o_background from './../../imagenes/kitchen1/20240105_175158.jpg'
import K1 from './../../imagenes/kitchen1/20240105_175102.jpg'
import V1 from './../../imagenes/cut-transformed.png'
import Introductions from '../../components/introduction/introduction';

import I1 from './../../imagenes/bath1/IMG_8243.jpg'
import I2 from './../../imagenes/bath1/IMG_7921.jpg'
import I3 from './../../imagenes/bath2/IMG_2069.jpg'
import I4 from './../../imagenes/bath1/IMG_7925.jpg'
import I5 from './../../imagenes/bath2/IMG_1151 - Copy.jpg'
import I6 from './../../imagenes/bath1/IMG_7797.jpg'

import K_service1 from './../../imagenes/kitchen2/IMG_0275 cut.jpg'
import K_service2 from './../../imagenes/kitchen1/20240105_174907.jpg'
import K_service3 from './../../imagenes/kitchen1/Screenshot 2024-05-24 100718.png'
import K_service4 from './../../imagenes/kitchen1/20240105_174918 cut.jpg'
import K_service5 from './../../imagenes/kitchen2/IMG_8035.jpg'
import K_service6 from './../../imagenes/kitchen1/20240105_154258 copy.jpg'

import O_service1 from './../../imagenes/livin room1/20240105_175102.jpg'
import O_service2 from './../../imagenes/other/Screenshot 2024-05-24 103400.png'
import O_service3 from './../../imagenes/other/Screenshot 2024-05-24 103044.png'
import O_service4 from './../../imagenes/other/Screenshot 2024-05-24 103929.png'
import O_service5 from './../../imagenes/other/Screenshot 2024-05-24 104144.png'
import O_service6 from './../../imagenes/other/Screenshot 2024-05-24 104314.png'

import k__intro from './../../imagenes/kitchen1/20240105_161619.jpg'

import o__intro from './../../imagenes/kitchen1/20240105_175438.jpg'

import { useParams } from "react-router-dom";

const nombreNegocio= 'Damarco'

const headers=[
    {
        id:"bathroom",
        image:B1,
        background:  b_background ,
        alt:"bath example",
        title:" Construction & Renovation of Bathrooms >",
        subtitle:"We transform your bathroom into a space of comfort and style"

    },
    {
        id: "kitchen",
        image: K1,
        background: k_background ,
        alt: "kitchen example",
        title: "Construction & Renovation of Kitchens >",
        subtitle: "We turn your kitchen into a hub of functionality and elegance"
    },
    {
        id: "varied_spaces",
        image: o_background,
        background:V1,
        alt: "varied spaces example",
        title: "Construction & Renovation of Varied Spaces >",
        subtitle: "We enhance any area, indoors or outdoors, to suit your needs and style"
    }
];

const introductions=[
    {
        id:"bathroom",
        image:B2,
        alt:"bath example",
        text:"Bathrooms are one of the most important and used spaces in any home. At Damarco, we specialize in building and repairing bathrooms, offering customized, high-quality  solutions to meet all your needs. Whether you need a complete remodel or small repairs, we're here to help."

    },
    {
            id: "kitchen",
            image:k__intro,
            alt: "kitchen example",
            text: "The kitchen is the heart of the home. At Damarco, we excel in designing and renovating kitchens, offering tailored, high-quality solutions to cater to all your culinary desires. Whether it's a complete overhaul or minor upgrades, we're dedicated to bringing your kitchen vision to life."
        
    },
    {
        id: "varied_spaces",
        image: o__intro,
        alt: "varied spaces example",
        text: "We enhance any space, inside or out, making it both stylish and comfortable. At Damarco, we specialize in transforming various spaces, delivering customized, top-quality solutions to fit all your needs. From major renovations to small tweaks, we're here to assist you every step of the way."
    }
    
];

const services_bath =[
        {
            image: I1,
            title: nombreNegocio,
            service:"< Custom Design >",
            text: "We create unique designs that fit your style and needs. From modern to classic bathrooms, we work with you to bring your vision to life.",
            
        },
        {
            image: I2,
            title: nombreNegocio,
            service:"< Complete Remodeling >",
            text: "We transform old bathrooms into modern, functional spaces. We handle everything from demolition to the final finishes.",
            
        },
        {
            image: I3,
            title: nombreNegocio,
            service:"< Repairs and Maintenance >",
            text: "We fix any problem in your bathroom, from leaks and cracks to installing new fixtures. We keep your bathroom in perfect condition.",
            
        },
        {
            image: I4,
            title: nombreNegocio,
            service:"< Furniture and Accessories Installation >",
            text: "We install bathroom furniture, mirrors, shelves, and all necessary accessories to enhance the functionality and aesthetics of your bathroom.",
            
        },
        {
            image: I5,
            title: nombreNegocio,
            service:"< Plumbing Solutions >",
            text: "We offer plumbing services to ensure that all water and drainage systems work correctly.",
            
        },
        {
            image: I6,
            title: nombreNegocio,
            service:"<  Tiles and Flooring >",
            text: "We install and repair tiles and flooring with precision and attention to detail, using high-quality materials to ensure durability and beauty.",
            
        },

]

const services_kitchen = [
    {
        image: K_service1,
        title: nombreNegocio,
        service: "< Custom Kitchen Design >",
        text: "We design unique kitchens tailored to your preferences and lifestyle. From contemporary to traditional kitchens, we bring your culinary vision to life."
    },
    {
        image: K_service2,
        title: nombreNegocio,
        service: "< Complete Kitchen Remodeling >",
        text: "We transform outdated kitchens into modern, functional spaces. From demolition to final touches, we handle every aspect of the renovation."
    },
    {
        image: K_service3,
        title: nombreNegocio,
        service: "< Kitchen Repairs and Maintenance >",
        text: "We address any issues in your kitchen, from fixing leaks to installing new appliances. We ensure your kitchen remains in excellent condition."
    },
    {
        image: K_service4,
        title: nombreNegocio,
        service: "< Cabinet and Countertop Installation >",
        text: "We install high-quality cabinets and countertops, enhancing the functionality and aesthetics of your kitchen."
    },
    {
        image: K_service5,
        title: nombreNegocio,
        service: "< Plumbing and Electrical Solutions >",
        text: "We provide plumbing and electrical services to ensure all systems in your kitchen work perfectly."
    },
    {
        image: K_service6,
        title: nombreNegocio,
        service: "< Kitchen Flooring and Tiling >",
        text: "We install and repair kitchen flooring and tiles with precision, using top-quality materials for durability and style."
    }
];

const services_varied_spaces = [
    {
        image: O_service1,
        title: nombreNegocio,
        service: "< Interior Design >",
        text: "We create beautiful and functional interior spaces that reflect your style and meet your needs. From living rooms to home offices, we bring your vision to life."
    },
    {
        image: O_service2,
        title: nombreNegocio,
        service: "< Exterior Renovations >",
        text: "We transform outdoor spaces, creating inviting areas for relaxation and entertainment. From patios to gardens, we handle it all."
    },
    {
        image: O_service3,
        title: nombreNegocio,
        service: "< Home Additions >",
        text: "We design and build home additions to increase your living space and enhance your home's value. From planning to construction, we manage the entire process."
    },
    {
        image: O_service4,
        title: nombreNegocio,
        service: "< Flooring and Carpeting >",
        text: "We install and repair various types of flooring and carpeting, ensuring a perfect fit and finish for any room."
    },
    {
        image: O_service5,
        title: nombreNegocio,
        service: "< Painting and Wall Treatments >",
        text: "We offer professional painting and wall treatment services to give your spaces a fresh, new look."
    },
    {
        image: O_service6,
        title: nombreNegocio,
        service: "< Custom Furniture and Built-ins >",
        text: "We design and install custom furniture and built-ins to maximize space and functionality, tailored to your style and needs."
    }
];


const service =[
    {
        id:"bathroom",
        services: services_bath
    },
    {
        id: "kitchen",
        services: services_kitchen
    },
    {
        id: "varied_spaces",
        services: services_varied_spaces
    }
]


export default function Services__Projects(){
    const { id } = useParams();
    
const serviceItem = service.find(item => item.id === id);
const serviceData = serviceItem ? serviceItem.services : [];
    return(
        <div className={styles.main__conteiner}>
              
            <Header_Bath_Project item={headers.find(header => header.id === id)}/>

          
            <Introductions item={introductions.find(introductions => introductions.id === id)}/>

            <Carrousel__Details  item={serviceData} />

        </div>
    )
}