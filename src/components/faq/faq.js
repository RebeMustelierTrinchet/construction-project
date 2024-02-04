import React from "react";
import styles from "./faq.module.css"

import Accordion from "react-bootstrap/Accordion";

const ITEMS = [
    {
      title: "WHAT QUALIFIES AS A LUXURY REMODEL?",
      body: "This answer is certainly up for debate but the short answer is that most namelocal remodels have every bell and whistle imaginable and thus the cost can certainly exceed the average kitchen remodel.",
    },
    {
      title: "DO YOU OFFER FREE REMODELING CONSULTATION?",
      body: "Yes! We offer Free Consults and Free Written Estimates. Just Call Us To Schedule.",
    },
    {
      title: "DO YOU HAVE MINIMUM BUDGET REQUIREMENT?",
      body: "Minimum Budget Requirement varies by many factors. We do not offer al la carte services- We only provide services from start to finish so it’s important that we set realistic budget expectations for you.",
    },
    {
      title: "DO YOU OFFER AL LA CARTE REMODELING?",
      body: "No, We take on total remodeling and renovation projects. In some instances if for example you have a few things you need done ie) Cabinets and Counter/ Island we may take it on just depending on our current work volume at that time. Please contact us and we will kindly let you know if we can be of assistance.",
    },
    {
      title: "WHERE DO YOU SERVICE?",
      body: "Name Home Remodeling is physically located in Downtown San Jose, CA. We service the entire San Francisco Bay Area.",
    },
    {
      title: "About Us",
      body: "",
    },
  ];
  

export default function Faq(){
    return(
        <div>
            <div className={styles.letras}>
                <p className={styles.titulo}>{'< F.A.Q >'} </p>
                <h2 className={styles.texto}>Frequently Asking Questions</h2>
            </div>
            <div className={styles.contPreguntas}>
                <div className={styles.preguntas}>
                    <Accordion defaultActiveKey="0" className={styles.contAccordion}>
                        {ITEMS.map((item, itemIndex) => {
                        return (
                            <Accordion.Item className={styles.accordionItem} eventKey={(itemIndex+1).toString()}>
                            <Accordion.Header className={styles.accordionItemHeader}>{item.title ?? ""}</Accordion.Header>
                            <Accordion.Body>
                                {item.body ?? ""}
                            </Accordion.Body>
                            </Accordion.Item>
                        );
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}