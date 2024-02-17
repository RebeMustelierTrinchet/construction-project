import styles from './../../../components/projects.module.css'
// import Styles from './kitchen.module.css'
import I1 from './../../../imagenes/bath2/IMG_1934.jpg'
import Carrusel from './carrousel'

export default function Bath2(){
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
                    Discover how we transform spaces, one tile at a time! We invite you to 
                    take a look at this incredible bathroom remodel, where the art of 
                    craftsmanship and style merge in perfect harmony. Our team of experts 
                    has designed bathrooms that will elevate your daily routine to another 
                    level. Every detail has been carefully selected to create a unique and 
                    sophisticated atmosphere. From exquisitely placed tiles to high-end 
                    accessories, each element has been thoughtfully chosen to provide you 
                    with an exceptional bathroom experience. Don't miss the opportunity to 
                    enjoy a space that reflects your style and personality. Come and discover 
                    the magic of our expertly designed bathrooms!
                    </p>
                </div>
            
        </div>
    )
}