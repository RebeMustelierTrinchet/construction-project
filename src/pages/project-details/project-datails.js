import styles from './../../components/projects.module.css'
// import Styles from './kitchen.module.css'
import I1 from './../../imagenes/bath2/IMG_2069.jpg'
import Carrusel from './carrousel'
import { useEffect, useState } from 'react';
import { getProjectsByID } from '../../api/projects-api';

import { useParams } from 'react-router-dom';

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
        <div className={styles.mainContainer}>
            <div className={styles.imagen__conteneder}>
                <img className={styles.imagen__cocina} src={projectInfo.imagen_principal}/>
                <div className={styles.right__conteneder}>
                
                    <div className={styles.imagenes__carrusel}>
                        <Carrusel images={projectInfo.images}/>
                    </div>
                </div>
            </div>
            
            <div className={styles.letras__conteneder}>
                    <p className={styles.texto}>
                    {projectInfo.description}
                    </p>
                </div>
            
        </div>
    ):<div>No project</div>
}