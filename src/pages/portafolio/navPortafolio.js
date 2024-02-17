import React from "react";
import styles from './portafolio.module.css'
// import Styles from './../../components/transiciones.module.css'
// import Carrusel from "../../components/corrousel/carrousel";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import { Navbar } from "react-bootstrap";
// import stilos from './../../components/navBar/navBar.module.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Kitchen from "../kitchen/kitchen";
import "../../index.css"
import Bathroom from "../../components/bathroom/bathroom";

import { GiSofa } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";

// otro nav
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Others from "../../components/others/others";


export default function NavPortafolio(){
    return (
        // <Tabs
        //   defaultActiveKey="kitchen"
        //   transition={true}
        //   id="noanim-tab-example"
        //   className={styles.nav}
        // >
        //   <Tab className={styles.navItem} eventKey="kitchen" title="Kitchen "><FaKitchenSet className={styles.button__iconos}/>
        //     <Kitchen />
        //   </Tab>
        //   <Tab eventKey="livingRoom" className={styles.navItem} title="Living Room">
        //     <LivingRoom />
        //   </Tab>
        //   <Tab eventKey="bedroom"  className={styles.navItem} title="Bedroom">
        //     <Bedroom />
        //   </Tab>
        //   <Tab eventKey="bathroom" className={styles.navItem} title="Bathroom">
        //     <Bathroom />
        //   </Tab>
          
        // </Tabs>

        <Tab.Container id="left-tabs-example" defaultActiveKey="kitchen" className={styles.nav}>
        <Row>
          <Row sm={9}>
            <Nav variant="pills" className={styles.flexRow}>
              <Nav.Item>
                <Nav.Link className={styles.navItem} eventKey="kitchen"><span className={styles.buton__nav}> Kitchen </span>  <FaKitchenSet className={styles.button__iconos}/></Nav.Link>
              </Nav.Item>
        
              <Nav.Item>
                <Nav.Link className={styles.navItem} eventKey="bathroom"><span className={styles.buton__nav}>Bathroom </span><FaBath className={styles.button__iconos}/></Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className={styles.navItem} eventKey="other"><span className={styles.buton__nav}> Others </span>  <span className={styles.button__iconos}>{'?'}</span></Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          {/* <hr/> */}
          <Row sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="kitchen"><Kitchen /></Tab.Pane>
              <Tab.Pane eventKey="other"><Others/></Tab.Pane>
              <Tab.Pane eventKey="bathroom"><Bathroom /></Tab.Pane>
            </Tab.Content>
          </Row>
        </Row>
      </Tab.Container>
      );
}


