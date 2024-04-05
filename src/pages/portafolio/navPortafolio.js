import React from "react";
import styles from './portafolio.module.css'
// import Styles from './../../components/transiciones.module.css'
// import Carousel__Container from "../../components/corrousel/carrousel";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { Navbar } from "react-bootstrap";
// import stilos from './../../components/navBar/navBar.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectTabCard from "./../../components/project-tab-card/ProjectTabCard";
import "../../index.css"

import { GiSofa } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

// otro nav
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';


const ICON_CATEGORY = {
  'BATH': <FaBath className={styles.button__iconos}/>,
  'KITCHEN': <FaKitchenSet className={styles.button__iconos}/>,
  'OTHERS': <FaQuestion className={styles.button__iconos}/>, 
}



export default function NavPortafolio({categories}){
    return categories && categories.length?(
        <Tab.Container id="left-tabs-example" defaultActiveKey="KITCHEN" className={styles.nav}>
        <Row>
          <Row sm={9}>
            <Nav variant="pills" className={styles.flex__row}>
              

              {categories.map((cat, index) => {
                return (
                <Nav.Item>
                <Nav.Link key={index} className={styles.nav__item} eventKey={cat.name}><span className={styles.buton__nav}> {cat.name} </span>  {ICON_CATEGORY[cat.name]}</Nav.Link>
              </Nav.Item>
              );
              })}
            </Nav>
          </Row>
          {/* <hr/> */}
          <Row sm={9}>
            <Tab.Content className={styles.tab__item}>
            {categories.map((cat, index) => {
              return (
                <Tab.Pane key={index} className={styles.Item} eventKey={cat.name}><ProjectTabCard items={cat.items} /></Tab.Pane>
              )
            })}
            </Tab.Content>
          </Row>
        </Row>
      </Tab.Container>
      ): <div></div>
}


