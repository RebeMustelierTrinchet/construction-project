// import React from 'react'; 
// import styles from "./headre_bath_project.module.css"
// import Button from 'react-bootstrap/Button';
// import text__styles from './../transiciones.module.css'
// import I1 from './../../imagenes/bath1/IMG_7916.jpg'


// export default function Header_Bath_Project(){
//     return(
//         <div className={styles.main__conteiner}>
//             <div className={styles.background }></div> 
//                 <div className={styles.letters}>
//                     <div className={text__styles.letters}>
//                         <h1 className={text__styles.title}>
//                          {'< Construction & Renovation of Bathrooms >'}
//                         </h1>
//                         <h2 className={text__styles.subtitle}>
//                          We transform your bathroom into a space of comfort and style
//                         </h2>
//                     </div>
//                 </div>
//             <div className={styles.image__conteiner}>    
//                 <img src={I1} alt={'image detail'}  className={styles.image} />
//             </div> 

            

//         </div>
//     )
// }

import React from 'react'; 
import styles from "./headre_bath_project.module.css"
import Button from 'react-bootstrap/Button';
import text__styles from './../transiciones.module.css'

export default function Header_Bath_Project({ item }) {
    return (
        <div className={styles.main__conteiner}>
           <div className={styles.background} style={{backgroundImage: `url(${item.background})`}}></div>
            <div className={styles.letters}>
                <div className={text__styles.letters}>
                    <h1 className={text__styles.title}>
                        {item.title}
                    </h1>
                    <h2 className={text__styles.subtitle}>
                        {item.subtitle}
                    </h2>
                </div>
            </div>
            {/* <div className={styles.image__conteiner}>    
                <img src={item.image} alt={item.alt} className={styles.image} />
            </div> */}

            <img src={item.image} alt={item.alt} className={styles.image} />
        </div>
    )
}
