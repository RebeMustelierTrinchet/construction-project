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
import LivingRoom from "../../components/livingRoom/livingRoom";
import Bedroom from "../../components/bedroom/bedroom";
import Bathroom from "../../components/bathroom/bathroom";

export default function NavPortafolio(){
    return (
        <Tabs
          defaultActiveKey="kitchen"
          transition={true}
          id="noanim-tab-example"
          className={styles.nav}
        >
          <Tab className={styles.navItem} eventKey="kitchen" title="Kitchen">
            <Kitchen />
          </Tab>
          <Tab eventKey="livingRoom" className={styles.navItem} title="Living Room">
            <LivingRoom />
          </Tab>
          <Tab eventKey="bedroom"  className={styles.navItem} title="Bedroom">
            <Bedroom />
          </Tab>
          <Tab eventKey="bathroom" className={styles.navItem} title="Bathroom">
            <Bathroom />
          </Tab>
          
        </Tabs>
      );
}


