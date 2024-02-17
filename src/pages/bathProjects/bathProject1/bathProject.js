import styles from './../../../components/projects.module.css'
// import Styles from './kitchen.module.css'
import I1 from './../../../imagenes/bath1/IMG_7921.jpg'
import Carrusel from './carrousel'

export default function Bath1(){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.imagen__conteneder}>
                <img className={styles.imagen__cocina} src={I1}  href="/kitchen2"/>
                <div className={styles.right__conteneder}>
                
                    <div className={styles.imagenes__carrusel}>
                        <Carrusel/>
                    </div>
                </div>
            </div>
            
            <div className={styles.letras__conteneder}>
                    <p className={styles.texto}>
                        Revitalize your sanctuary with our exceptional bathroom 
                        remodeling services! From sleek designs to functional upgrades, 
                        we bring your dream bathroom to life. Immerse yourself in luxury
                        and quality craftsmanship. Elevate your daily routine with a space 
                        tailored to perfection
                    </p>
                </div>
            
        </div>
    )
}