import styles from './../../components/projects.module.css'

import { useEffect, useState } from 'react';
import { getProjectsByID } from '../../api/projects-api';

import { useParams } from 'react-router-dom';
import Carousel__Container from './mySwiper';

export default function ProjectDetails(){

    const [projectInfo, setProjectInfo] = useState(null)

    let { id } = useParams();


    useEffect(() => {
        async function getProjectInfo(){
            await getProjectsByID(id, setProjectInfo);
        }
        
        if(id){
            getProjectInfo();
        }
    }, [id])

    return projectInfo? (
        <div className={styles.main__container}>
            <div className={styles.image__container}>
                <img className={styles.room__image} src={projectInfo.imagen_principal}/>
                <div className={styles.right__container}>
                
                    <div className={styles.image__swiper}>
                        <Carousel__Container images={projectInfo.images}/>
                    </div>
                </div>
            </div>
            
            <div className={styles.letters__container}>
                    <p className={styles.text}>
                    {projectInfo.description}
                    </p>
                </div>
            
        </div>
    ):<div>No project</div>
}