import styles from "../styles/index.module.css"
import { Frase } from "../lib/pag1"

export default function Principal(){
    return (
        <div className={styles.div}>
            <h1 className={styles.tituloNova}>Nova Página</h1><br/>
            <MariaPrea/>
            <Mensagem mensagem="Aqui nesse campo, dá pra por mensagem"/><br/>
            <Frase/>
            <Botao/>
        </div>
    )
}

export function MariaPrea(){
    return (
        <h2>Morreu Maria Preá...</h2>
    )
}

export function Mensagem(prop){
    return (
        <h2>{prop.mensagem}</h2>
    )
}

export function Botao(){
    return (
        <p>Para mais frases engraçadas, clique em <a href="pag/pag2">frases engraçadas</a>.</p>
    )
}