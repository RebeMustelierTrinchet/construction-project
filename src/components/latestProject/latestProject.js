import { Button } from 'react-bootstrap'
import styles from './latestProject.module.css'

import Styles from './../transiciones.module.css'
import { getProjects } from './../../api/projects-api'

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { getProjectsReducer} from './../../redux/slices/project-slices'


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
        <div className={styles.main__container}>
            <h1 className={styles.title}>{'< Our Projects >'}</h1>
            <h2 className={styles.subtitle}>Favorites Projects</h2>
            <div>
                {projects && projects.length ?
                    <div className={styles.image__container}>
                        {projects.map((project, index) => {
                            return (
                                <div key={index} className={styles.sub__image__container}>
                                    
                                    <Link to={`/project-details/${project.id}`}><img className={styles.image} src={project. imagen_principal ?? ""} /></Link>
                                    <div className={styles.text__container}><h2 className={styles.image__text} > {'< Click to see full project >'}</h2></div>
                                </div>
                            );
                        })}
                    </div>

                    : <div>In Process</div>

                }
            </div>
            <div className={styles.btn__container}>
                <Button data-animation="diagonal" className={Styles.Boton} href="/portfolio"> {'<Portfolio>'}
                    <span className={Styles.borderTop} id="border"></span>
                    <span className={Styles.borderRight} id="border"></span>
                    <span className={Styles.borderBottom} id="border"></span>
                    <span className={Styles.borderLeft} id="border"></span>
                </Button>
            </div>
        </div>
    )
}