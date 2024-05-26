
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './carrousel__details.module.css';
import text__styles from './../transiciones.module.css';
import { Pagination } from 'swiper/modules';
import Card from 'react-bootstrap/Card';
import logo from './../../imagenes/icono dorado.png';

export default function Carrousel__Details({ item }) {

  if (!Array.isArray(item)) {
    return null;
}
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
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
                {item.map((service, index) => (
                    <SwiperSlide className={styles.swiper__slide} key={index}>
                      <div className={styles.backgrond__container}></div>
                        <div className={styles.card__container}>
                            <div className={styles.header}>
                                <img src={service.image} className={styles.image} alt={service.alt} />
                                <img src={logo} className={styles.icon} alt={'Damarco_icono'} />
                            </div>
                            <Card className={styles.sub__card__container}>
                                <Card.Body>
                                    <Card.Title className={`${text__styles.title} ${styles.title}`}>{service.service}</Card.Title>
                                    <Card.Text className={`${text__styles.subtitle} ${styles.title}`}>Damarco</Card.Text>
                                    <Card.Text className={text__styles.text}>{service.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
