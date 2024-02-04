import styles from "./kitchenItem.module.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import I1 from "./../../imagenes/I1.jpg"


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function KitchenItems(){

    const [swiperRef, setSwiperRef] = useState(null);
    return(
        <div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles.mySwiper}
            >
                <SwiperSlide className={styles.SwiperSlide}>
                    <img className={styles.imagen} src={I1}></img> 
                </SwiperSlide>
                <SwiperSlide className={styles.SwiperSlide}>Slide 2</SwiperSlide>
                <SwiperSlide className={styles.SwiperSlide}>Slide 3</SwiperSlide>
                <SwiperSlide className={styles.SwiperSlide}>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}