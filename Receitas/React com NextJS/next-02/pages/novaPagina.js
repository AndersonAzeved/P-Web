import { Frase } from "./pag/pag1"

export default function Principal(){
    return (
        <div>
            <h1>Nova Página</h1>
            <MariaPrea/>
            <Mensagem mensagem="Aqui nesse campo, dá pra por mensagem"/>
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
        <a href="pag/pag2">Frases Engraçadas</a>
    )
}