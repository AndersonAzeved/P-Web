import styles from '../styles/home.module.css'
import {Nav} from './movies'

export default function Home(){
    return (
        <>
            <Nav/>

            <div className={styles.div}>
                <h1 className={styles.h1}>Neste site, é possível realizar buscas de filmes e séries</h1>
                <p className={styles.p}>A partir da OMDb API, o site retorna busca relacionadas a filmes e séries, por meio do título e data.</p>
            </div>
        </>
    )
}