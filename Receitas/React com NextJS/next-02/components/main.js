import Footer from './footer'
import Nav from './nav'
import styles from '../styles/main.module.css'

export default function Main({children}){
    return (
        <>  
            <title>Receita 2</title>
            <Nav/>
            <div className={styles.main}><div>{children}</div></div>
            <Footer/>
        </>
    )
}