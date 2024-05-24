// import React from 'react'; 
// import styles from "./introduction.module.css"
// import Button from 'react-bootstrap/Button';
// import text__styles from './../../components/transiciones.module.css'
// import Header_Bath_Project from '../../components/header-bath-project/headre_bath_project';
// import I1 from './../../imagenes/bath2/IMG_1934.jpg'
// import Carrousel__Details from '../../components/carrousel-detail/carrousel__detail';


// export default function Introductions(){

//     return(
//         <div className={styles.main__conteiner}>

//             <div className={styles.introduction__conteiner}>
//                 <div className={styles.image__conteiner}>
//                     <img src={I1} alt={'bath example'} className={styles.image} />
//                 </div>
//                 <div className={styles.letters}>
//                     <div className={text__styles.letters}>
//                         <h1 className={text__styles.title}>
//                             {'< Damarco  >'}
//                         </h1>
//                         <p className={text__styles.text}>
//                         Bathrooms are one of the most important and used spaces in any home. At Damarco,
//                         we specialize in building and repairing bathrooms, offering customized, high-quality 
//                         solutions to meet all your needs. Whether you need a complete remodel or small 
//                         repairs, we're here to help.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

import React from 'react'; 
import styles from "./introduction.module.css";
import text__styles from './../../components/transiciones.module.css';

export default function Introductions({ item }) {
    return (
        <div className={styles.main__conteiner}>
          
                <div  className={styles.introduction__container}>
                    <div className={styles.image__container}>
                        <img src={item.image} alt={item.alt} className={styles.image} />
                    </div>
                    <div className={styles.letters}>
                        <div className={text__styles.letters}>
                            <h1 className={text__styles.title}>
                                {'< Damarco  >'}
                            </h1>
                            <p className={text__styles.text}>
                                {item.text}
                            </p>
                        </div>
                    </div>
                </div>
        
        </div>
    );
}
