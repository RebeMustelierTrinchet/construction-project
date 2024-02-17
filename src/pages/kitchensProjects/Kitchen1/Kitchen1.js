import styles from './kitchen1.module.css'
import I1 from './../../../imagenes/kitchen1/20240105_174907.jpg'
import CarruselKitchen1 from './carrousel'

export default function Kitchen1(){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.imagen__conteneder}>
                <img className={styles.imagen__cocina} src={I1}  href="/kitchen1"/>
                <div className={styles.right__conteneder}>
                
                    <div className={styles.imagenes__carrusel}>
                        <CarruselKitchen1/>
                    </div>
                </div>
            </div>
            
            <div className={styles.letras__conteneder}>
                    <p className={styles.texto}>Sometimes we transform one space at a time and sometimes it's the entire
                        space! Check out our latest full downstairs home remodel project! Where 
                        the island stands was a wall separating the kitchen from a smaller living
                        area. We knocked down the wall to create an open concept kitchen/dining 
                        layout for the homeowners who love to cook and entertain. We take care of 
                        everything from new floors, cabinets, tiles, drywall, paint, etc. to new 
                        electrical, plumbing and lighting throughout the home. One of our favorite 
                        little features is the quaint, floating corner coffee bar we installed; 
                        complete with a new outlet, perfectly tucked between the kitchen and home office.
                        We provide ease, functionality, style and quality to our clients.
                    </p>
                </div>
            
        </div>
    )
}