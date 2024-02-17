import { Button } from 'react-bootstrap'
import styles from './latestProject.module.css'

import Styles from './../../components/transiciones.module.css'
import { getProjects } from '../../api/projects-api'
import React, { useEffect, useState } from "react";

export default function LatestProject(){

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getAllProjects() {
            await getProjects(setProjects);  
        }
  
      getAllProjects();
    }, [])

    return(
        <div className={styles.mainCont}>
            <h1 className={styles.titulo}>{'< Our Projects >'}</h1>
            <h2 className={styles.subTitulo}>Favorites Projects</h2>
            <div>
                {projects && projects.length ?
                    <div>
                       {projects.map((project, index) =>{
                            return(
                                <div>
                                    <div>{project.name  ?? ""}</div>
                                
                                    <img className={styles.imagen} src={project.imagen_principal ?? ""}/>
                                </div>
                            )
                       })}
                    </div>

                    :<div>En Proceso</div>
            
                }
            </div>
            <div className={styles.botonCont}>
                <Button data-animation="diagonal" className={Styles.Boton} href="/portfolio"> {'<Portafolio>'}
                    <span className={Styles.borderTop} id="border"></span>
                    <span className={Styles.borderRight} id="border"></span>
                    <span className={Styles.borderBottom} id="border"></span>
                    <span className={Styles.borderLeft} id="border"></span>
                </Button>
            </div> 
        </div>
    )
}