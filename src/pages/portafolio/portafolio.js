import React, { useEffect, useState } from "react";
import styles from './portafolio.module.css'
import Styles from './../../components/transiciones.module.css'
import Carrusel from "../../components/corrousel/carrousel";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import stilos from './../../components/navBar/navBar.module.css'
import NavPortafolio from "./navPortafolio";
import Comments from "../../components/comments/comments";
// import Styles from "../../components/transiciones.module.css"
import { getProjects } from '../../api/projects-api'
import { useSelector, useDispatch } from "react-redux"
import { getProjectsReducer } from "../../redux/slices/project-slices"

import Button from 'react-bootstrap/Button';

export default function Portafolio() {

    const projectFromRedux = useSelector((state) => state.projects.projectList)

    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState(new Map())

    const dispatch = useDispatch()

    const updateRedux = (newProjects) => {
        dispatch(getProjectsReducer({ projectList: newProjects }))
    }

    useEffect(() => {

        async function getAllProjects() {
            await getProjects(updateRedux);
        }
        if (projectFromRedux && projectFromRedux.length) {
            setProjects(projectFromRedux)
        }
        else {
            getAllProjects();
        }

    }, [projectFromRedux])

    useEffect(() => {
        if (projects && projects.length) {
            let categoryMap = new Map();
            for (let i = 0; i < projects.length; i++) {
                const currentProject = projects[i];
                const currentCategory = projects[i].categoria
                if (categoryMap.has(currentCategory)) {
                    const projectList = categoryMap.get(currentCategory).items
                    projectList.push(currentProject);
                    categoryMap.set(currentCategory, { name: currentCategory, items: projectList })
                }
                else {
                    const newList = Array();
                    newList.push(currentProject)
                    categoryMap.set(currentCategory, { name: currentCategory, items: newList })
                }
            }
            let categoriesList = Array.from(categoryMap, ([key, value]) => (value));
            setCategories(categoriesList)
        }
    }, [projects])

    return (
        <div className={styles.mainCont}>
            <Carrusel />
            <div className={Styles.letras}>
                <h1 className={Styles.titulo}>{'Click to view full Project'}</h1>
                <h2 className={Styles.subTitulo}>Home renovations Photos:</h2>
            </div>
            <div className={styles.contNav}>
                <NavPortafolio categories={categories} />
                <Button variant="outline-light" data-animation="diagonal" href="/services" className={Styles.Boton}>Go Services
                    <span className={Styles.borderTop} id="border"></span>
                    <span className={Styles.borderRight} id="border"></span>
                    <span className={Styles.borderBottom} id="border"></span>
                    <span className={Styles.borderLeft} id="border"></span>
                </Button>
            </div>
            <div className={styles.contPort}>
                <Comments />
            </div>


        </div>
    )
}