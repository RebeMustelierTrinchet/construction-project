import styles from './../../../components/projects.module.css'
// import Styles from './kitchen.module.css'
import I1 from './../../../imagenes/kitchen2/IMG_8833.jpg'
import CarruselKitchen1 from './carrousel'

export default function Kitchen2(){
    return(
        <div className={styles.mainContainer}>
            <div className={styles.imagen__conteneder}>
                <img className={styles.imagen__cocina} src={I1}  href="/kitchen2"/>
                <div className={styles.right__conteneder}>
                
                    <div className={styles.imagenes__carrusel}>
                        <CarruselKitchen1/>
                    </div>
                </div>
            </div>
            
            <div className={styles.letras__conteneder}>
                    <p className={styles.texto}>
                        Discover the art of transforming your kitchen into a unique experience. 
                        This project is a fusion of style and innovation, turning a common kitchen into an extraordinary space.
                        Enhance your culinary sanctuary with our expert experience. Are you ready to have a kitchen that reflects
                        your unique taste? Let's come together and create something extraordinary!
                    </p>
                </div>
            
        </div>
    )
}