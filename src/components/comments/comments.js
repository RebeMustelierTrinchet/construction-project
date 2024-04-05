import React, { useRef, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './comments.module.css'
import {getComments} from "../../api/comments-api"

export default function Comments() {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getCommentsHelper(){
      await getComments(setComments)
    }
    getCommentsHelper();
  }, [])
  
  
  return comments && comments.length?(
    <div className={styles.main__Container}>
        <h1 className={styles.title}>{'< What do others think >'}</h1>
        <h2 className={styles.subtitle}> DAMARCO </h2>
      <Swiper
       
      >

        {comments.map((item, index) => {
          return(
            <SwiperSlide className={styles.swiper__slide} key ={index}> 
               <div className={styles.comments__container}>
                      <p className={styles.text}>{item.text}</p>
                      <h2 className={styles.author}>{item.client_name}</h2>
                </div>  
            </SwiperSlide>
          );
        })}
        
      </Swiper>
      
    </ div>
  ): <div></div>;
}
