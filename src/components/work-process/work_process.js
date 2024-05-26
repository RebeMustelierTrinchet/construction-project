import styles from './work__process.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import text__styles from './../transiciones.module.css';
import { Pagination } from 'swiper/modules';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Styles from './../../components/transiciones.module.css'


const item = [
    {
        title: "Initial Consultation",
        process_first_title: "Needs Assessment: ",
        process_first: "We meet with the client to understand their needs, desires, and budget.",
        process_second_title: "Advisory: ",
        process_second: "We provide advice on feasibility, materials, and preliminary designs."
    },
    {
        title: "Planning and Design",
        process_first_title: "Customized Design: ",
        process_first: "Our team of architects and designers creates customized plans and designs according to the client's specifications.",
        process_second_title: "Review and Approval: ",
        process_second: "We present the designs to the client for review and adjust any details based on their feedback."
    },
    {
        title: "Budget and Contract",
        process_first_title: "Detailed Budget: ",
        process_first: "We prepare a detailed budget that includes all costs associated with the project.",
        process_second_title: "Contract Signing: ",
        process_second: "We formalize the agreement with a clear contract that outlines the terms and conditions of the project."
    },
    {
        title: "Site Preparation",
        process_first_title: "Permits: ",
        process_first: "We manage all necessary permits and authorizations to begin construction.",
        process_second_title: "Site Preparation: ",
        process_second: "We clean and prepare the site to ensure a solid foundation for construction."
    },
    {
        title: "Construction",
        process_first_title: "Foundations and Structure: ",
        process_first: "We lay the foundations and build the main structure following the approved plans.",
        process_second_title: "Installations: ",
        process_second: "We install electrical, plumbing, and HVAC (heating, ventilation, and air conditioning) systems.",
        process_third_title: "Finishes: ",
        process_third: "We complete the interior and exterior finishes, including painting, flooring, and decorative details."
    },
    {
        title: "Supervision and Quality Control",
        process_first_title: "Continuous Supervision: ",
        process_first: "Our site supervisors conduct regular visits to ensure everything is done as planned.",
        process_second_title: "Quality Control: ",
        process_second: "We implement rigorous quality controls at each stage to ensure high construction standards."
    },
    {
        title: "Final Review and Delivery",
        process_first_title: "Final Inspection: ",
        process_first: "We conduct a final inspection with the client to ensure all aspects of the project meet their expectations.",
        process_second_title: "Key Handover: ",
        process_second: "We hand over the completed project, ensuring the client is fully satisfied with the final result."
    }
];



export default function Work__Process(){

    
    return(
        <div className={styles.main__conteiner}>
             <h2 className={`${text__styles.title} ${styles.title}`}>{'< How We Work >'}</h2>
            <h3 className={`${text__styles.subtitle} ${styles.subtitle}`}>Our Commitment: Transparency and Satisfaction in Every Step of the Process</h3>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className={styles.mySwiper}
            >
                {item.map((item, index) => (
                    <SwiperSlide className={styles.swiper__slide} key={index}>
                      <div className={styles.backgrond__container}></div>
                        <div className={styles.card__container}>
                            <div className={styles.header}>
                                <Card.Text className={`${text__styles.title} ${styles.title}`}>{'<Damarco>'}</Card.Text>
                                <Card.Title className={`${text__styles.subtitle} ${styles.subtitle}`}>{item.title}</Card.Title>
                            </div>
                            <Card className={styles.sub__card__container}>
                                <Card.Body>
                                    <Card.Title className={`${text__styles.text} ${styles.important_text}`}>{item.process_first_title}<p className={styles.text}>{item.process_first}</p></Card.Title>
                                    <Card.Title className={`${text__styles.text} ${styles.important_text}`}>{item.process_second_title}<p className={styles.text}>{item.process_second}</p></Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.why__us__conteiner}>
                <h2 className={`${text__styles.title} ${styles.title}`}>{'< Transform Your Home with Us >'}</h2>
                <p className={`${text__styles.text} ${styles.text}`}>At Damrco, we combine years of construction experience with a personalized 
                approach for each project. Our professional team ensures unique and high-quality designs, using top-notch materials and rigorous standards. 
                We are committed to customer satisfaction with clear and transparent communication at all times. Contact us to turn your vision into a lasting 
                and beautiful reality for your home.</p>
                <div className={styles.btn__container}>
                        <Button data-animation="diagonal" className={`${Styles.Boton} ${ styles.btn}`} href="/contact-us" > {'<Contac Us>'}
                        <span className={Styles.borderTop} id="border"></span>
                        <span className={Styles.borderRight} id="border"></span>
                        <span className={Styles.borderBottom} id="border"></span>
                        <span className={Styles.borderLeft} id="border"></span>
                        </Button>
                    </div>
            </div>


        </div>
    )
}