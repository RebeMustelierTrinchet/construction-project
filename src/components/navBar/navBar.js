import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "./navBar.module.css";
import { FaFacebookF, FaTwitter, FaInstagram,FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import icono from './../../imagenes/icono.png'
import Dropdown from 'react-bootstrap/Dropdown';

export default function NavBar(){
   return(
       <div>
            <Navbar variant="dark" collapseOnSelect expand="lg"  className={styles.contenedorPrincipal}>
                <Container className={styles.conteiner}>
                    <Navbar.Brand href="/" >
                            <div className={styles.contenedor__imagen__icono}>
                                <img src={icono} className={styles.imagen__icono}/>
                            </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                        <Nav.Link className={styles.botonNav} href="/">Home<hr className={styles.raya} /></Nav.Link>
                        <Nav.Link className={styles.botonNav} href="/portfolio" >Portfolio<hr className={styles.raya} />
                            {/* <div className={styles.menu}>
                                <Button className={styles.BotonB} variant="link">Bathroom</Button>
                                <Button className={styles.Boton} variant="link">Bedroom</Button>
                                <Button className={styles.Boton} variant="link">Living Room</Button>
                                <Button className={styles.Boton} variant="link">Kitchen</Button>
                            </div> */}
                        </Nav.Link>

                        <Nav.Link className={styles.botonNav} href="/services">Services<hr className={styles.raya} />
                            {/* <div className={styles.menu}>
                                <Button className={styles.Boton} variant="link">Bathroom</Button>
                                <Button className={styles.Boton} variant="link">Bedroom</Button>
                                <Button className={styles.Boton} variant="link">Living Room</Button>
                                <Button className={styles.Boton} variant="link">Kitchen</Button>
                            </div> */}
                        </Nav.Link>

                        <Nav.Link className={styles.botonNav} href="/contact-us">Contact Us<hr className={styles.raya} /></Nav.Link>
                
                        </Nav>
                        <Nav className={styles.contBoton}>
                        <Nav.Link className={styles.boton} href="https://www.facebook.com/Damarco.Tx?mibextid=LQQJ4d"><FaFacebookF className={styles.button__iconos} /></Nav.Link>
                        <Nav.Link className={styles.boton} href="/"><FaInstagram className={styles.button__iconos} /></Nav.Link>
                        <Nav.Link className={styles.boton} href="/"><FaTwitter className={styles.button__iconos} /></Nav.Link>
                        <Nav.Link className={styles.boton} href="/"><CgMail className={styles.button__iconos} /> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <hr className={styles.raya} ></hr> */}
       </div>
   );
}