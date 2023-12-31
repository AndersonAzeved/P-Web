import styles from '../styles/hino.module.css'
import { Autor, Letra, Titulo } from "../lib/hino"


export default function Home(){
   return (
      <div className={styles.hino}>
         <h2 className={styles.viva}>
            Viva Santana!
         </h2>
         <hr/>
         <Titulo/>
         <hr/>
         <Autor/>
         <hr/>
         <Letra/>
      </div>
   )
}