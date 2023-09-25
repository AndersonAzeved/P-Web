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

                <div className={styles.div}>
                    {array?.map((m) => (
                        <div>
                            <h1>{m.Title}</h1>
                            <img src={m.Poster} className={styles.imgPoster}/>
                            <div className={styles.divInfo}>
                                <p className={styles.ano}>Ano: {m.Year}</p>
                                <p className={styles.lancamento}>Lançamento: {m.Released}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
            
        )
    }
}

async function fetcher(url){
    const res = await fetch(url)
    const json = await res.json()
    return json
}