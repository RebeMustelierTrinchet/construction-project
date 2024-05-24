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
import { FaTiktok } from "react-icons/fa6";

export default function NavBar(){
   return(
       <div>
            <Navbar variant="dark" collapseOnSelect expand="lg"  className={styles.main__container}>
                <Container className={styles.container}>
                    <Navbar.Brand href="/" >
                            <div className={styles.image__icon__container}>
                                <img src={icono} className={styles.image__icon}/>
                            </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto" >
                        <Nav.Link className={styles.btn__nav} href="/">Home<hr className={styles.line} /></Nav.Link>
                        <Nav.Link className={styles.btn__nav} href="/portfolio" >Portfolio<hr className={styles.line} /></Nav.Link>
                        <Nav.Link className={styles.btn__nav} href="/services">Services<hr className={styles.line} /></Nav.Link>
                        <Nav.Link className={styles.btn__nav} href="/contact-us">Contact Us<hr className={styles.line} /></Nav.Link>
                        </Nav>
            
                        <Nav className={styles.btn__social__media__container}>
                        <Nav.Link className={styles.btn__social__media} href="https://www.facebook.com/Damarco.Tx?mibextid=LQQJ4d"><FaFacebookF className={styles.button__icons} /></Nav.Link>
                        <Nav.Link className={styles.btn__social__media} href="https://www.tiktok.com/@be.ayyash?lang=es"><FaTiktok className={styles.button__icons} /></Nav.Link>
                        <Nav.Link className={styles.btn__social__media} href="/"><FaTwitter className={styles.button__icons} /></Nav.Link>
                        <Nav.Link className={styles.btn__social__media} href="/"><CgMail className={styles.button__icons} /> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <hr className={styles.raya} ></hr> */}
       </div>
   );
}