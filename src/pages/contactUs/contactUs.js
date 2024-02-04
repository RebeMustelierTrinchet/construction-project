import React from "react";
import styles from "./contactUs.module.css"
import { Form, Alert, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import Styles from '../../components/transiciones.module.css'



export default function ContacUs() {
    const [customer, setCustomer] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")


   
    // hi



    return (
        <div className={styles.bookOnlineDiv}>
            <div className={styles.bookOnlineDivWrapper}>

                {/* {showAlert ?
                    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className={styles.alerta}>
                        <h1 className={styles.alertText}> Your appointment has been sent for approval </h1>
                    </Alert> : <></>
                } */}

                <h1 className={styles.title}>{'< Contact Us >'}</h1>

                <Form.Label htmlFor="inputCustumer" className={styles.formsLabel}>Name</Form.Label>
                <Form.Control className={styles.forms}
                    type="text"
                    id="inputCustumer"
                    aria-describedby="inputCustumer"
                    value={customer}
                    onChange={(e) => { setCustomer(e.target.value) }}
                />

                <Form.Label htmlFor="inputPhone" className={styles.formsLabel}>Phone</Form.Label>
                <Form.Control
                    className={styles.forms}
                    type="text"
                    id="inputPhone"
                    aria-describedby="inputPhone"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value) }}
                />

                
                <Form.Label htmlFor="inputEmail" className={styles.formsLabel}>Email</Form.Label>
                <Form.Control className={styles.forms}
                    type="text"
                    id="inputEmail"
                    aria-describedby="inputEmail"
                    value={email}
                    onChange={(e) => { setemail(e.target.value) }}
                />
                <Form.Label htmlFor="inputMessage" className={styles.formsLabel}>Message</Form.Label>
                <Form.Control className={styles.formsM}
                    type="text"
                    id="inputMessage"
                    aria-describedby="inputMessage"
                    value={message}
                    onChange={(e) => { setmessage(e.target.value) }}
                />
                
                <div className={styles.contButton}>
                    <Button variant="outline-light" data-animation="diagonal" className={Styles.Boton}>{ '< Submit >'}
                        <span className={Styles.borderTop} id="border"></span>
                        <span className={Styles.borderRight} id="border"></span>
                        <span className={Styles.borderBottom} id="border"></span>
                        <span className={Styles.borderLeft} id="border"></span>
                    </Button> 
                </div>

            </div>

        </div>
    )
}