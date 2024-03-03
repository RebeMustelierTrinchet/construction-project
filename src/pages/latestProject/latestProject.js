import { Button } from 'react-bootstrap'
import styles from './latestProject.module.css'

import Styles from './../../components/transiciones.module.css'
import { getProjects } from '../../api/projects-api'
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { getProjectsReducer } from "../../redux/slices/project-slices"

export default function LatestProject() {

    const projectFromRedux = useSelector((state) => state.projects.projectList)

    const [projects, setProjects] = useState([]);

    const dispatch = useDispatch()

    const updateRedux = (newProjects) => {
        dispatch(getProjectsReducer({ projectList: newProjects }))
    }

    useEffect(() => {

        async function getAllProjects() {
            await getProjects(updateRedux);
        }
        if (projectFromRedux && projectFromRedux.length) {
            setProjects(projectFromRedux.filter((newProject) => newProject.is_favorite == true))
        }
        else {
            getAllProjects();
        }

    }, [projectFromRedux])

    return (
        <div className={styles.mainCont}>
            <h1 className={styles.titulo}>{'< Our Projects >'}</h1>
            <h2 className={styles.subTitulo}>Favorites Projects</h2>
            <div>
                {projects && projects.length ?
                    <div className={styles.cont__imagen}>
                        {projects.map((project, index) => {
                            return (
                                <div key={index} className={styles.sub__cont__imagen}>
                                    
                                    <Link to={`/project-details/${project.id}`}><img className={styles.imagen} src={project.imagen_principal ?? ""} /></Link>
                                    <div className={styles.cont__text}><h2 className={styles.imagen__text} > {'< Click to see full project >'}</h2></div>
                                </div>
                            );
                        })}
                    </div>

                    : <div>En Proceso</div>

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