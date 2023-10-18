import { Nav, Erro } from "./movies"
import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../styles/selecionado.module.css'


export default function Selecionado(){
    const router = useRouter()
    const idFilme = router.query.idFilme
    const array = []

    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=31c8f11c&i=${idFilme}`, fetcher)
    console.log('Valor de id depois: ', idFilme)
    console.log('Data é: ', data)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    if(data.Response == 'False' || data == undefined){
        return(<Erro/>)
    }else{
        array.push(data)
        return(
            <>
                <Nav/>

                {array?.map((m) => (
                    <div className={styles.div}>
                        <div className={styles.imgPoster}>
                            <img src={m.Poster}/>
                        </div>
                                               
                        <div className={styles.divInfo}>
                            <div className={styles.h1}>
                                <h1>{m.Title}</h1>
                            </div>
                            <div className={styles.div1}>
                                <div className={styles.div2}>
                                    <p>Ano: {m.Year}</p>
                                    <p>Lançamento: {m.Released}</p>
                                    <p>Duração: {m.Runtime}</p>
                                    <p>Gênero: {m.Genre}</p>
                                    <p>Diretor: {m.Director}</p>
                                </div>
                                <br></br>
                                <div className={styles.div3}>
                                    <p>Atores: {m.Actors}</p>
                                    <p>Linguagem: {m.Language}</p>
                                    <p>País: {m.Country}</p>
                                    <p>Tipo: {m.Type}</p>
                                </div>
                            </div>
                            <div className={styles.sinopse}>
                                <p>Sinopse: {m.Plot}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </>
            
        )
    }
}

async function fetcher(url){
    const res = await fetch(url)
    const json = await res.json()
    return json
}