import styles from '../styles/movies.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'


export default function MinhaPagina() {
    const router = useRouter()
    const busca = router.query.busca
    const ano = router.query.ano
    const exibir = router.query.exibir
    const array = []
    const [idFilme, setId] = useState('')
    let valorId

    const cliclkButtonFilme = (valorId) => {
        setId(valorId)
        const query = {
            idFilme: valorId
        };

        router.push({
            pathname: '/selecionado',
            query
        })
    }

    
    
    if(exibir == 'true'){
        const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=31c8f11c&s=${busca}`, fetcher)
        if (error) return <div>falha na requisição...</div>
        if (!data) return <div>carregando...</div>
        
        if(data.Response == 'False'){
            return(
                <Erro/>
            )
        }else{
            return (
                <>
                    <Nav/>

                    <div>
                        <section className={styles.galeria}>
                            {data?.Search?.map( (m) => ( 
                                valorId = m.imdbID,
                                <button onClick={() => cliclkButtonFilme(m.imdbID)}>
                                    <div className={styles.poster}>
                                        <div><img src={m.Poster} className={styles.imgPoster}/></div>
                                        <p className={styles.textPoster}>{m.Title}, {m.Year}</p>
                                    </div>
                                </button>
                            ))}            
                        </section> 
                    </div> 
                </>
            )
        }



        
    }else{
        const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=31c8f11c&t=${busca}&y=${ano}`, fetcher)
        if (error) return <div>falha na requisição...</div>
        if (!data) return <div>carregando...</div>
        array.push(data)

        
        if(data.Response == 'False'){
            return(
                <Erro/>
            )
        }else{
           
            return (
                <>
                    <Nav/>
                    <div>
                        <section className={styles.galeria}>
                            {array?.map( (m) => ( 
                                <button onClick={() => cliclkButtonFilme(m.imdbID)}>
                                    <div className={styles.poster}>
                                        <div className={styles.imgPoster}>
                                            <img src={m.Poster}/>
                                        </div>
                                        <p className={styles.textPoster}>{m.Title}, {m.Year}</p>
                                    </div>
                                </button>
                            ))}            
                        </section> 
                    </div>  
                </>
            )
        }


        


    }
}

export function Nav(){
    return (
        <>
            <title>Movies</title>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link className={styles.link} href='/home'>Home</Link>
                </li>
                <li>
                    <Link className={styles.link} href='/busca'>Buscar</Link>
                </li>
            </ul>
        </>

    )
}

export function Erro(){
    return (
        <>
            <Nav/>

            <div className={styles.erro}>
                <h1>Não foi possível realizar a busca</h1>
                <p>Talvez os parâmetros de busca estejam errados, tente novamente</p>
            </div>
        </>
    )
}

async function fetcher(url){
    const res = await fetch(url)
    const json = await res.json()
    return json
}