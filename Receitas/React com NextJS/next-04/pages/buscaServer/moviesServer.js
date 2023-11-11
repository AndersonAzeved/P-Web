import styles from '../../styles/movies.module.css'
import spin from '../../styles/spin.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { Spin } from 'antd';


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
            pathname: 'selecionadoServer',
            query
        })
    }

    
    
    if(exibir == 'true'){
        const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=31c8f11c&s=${busca}`, fetcher)
        if (error) return <div>falha na requisição...</div>
        if (!data) return (<div className={spin.divSpinner}><Spin size='large'/></div>)
        
        if(data.Response == 'False'){
            return(
                <Erro/>
            )
        }else{
            return (
                <div>
                    <section className={styles.galeria}>
                        {data?.Search?.map( (m) => ( 
                            <button onClick={() => cliclkButtonFilme(m.imdbID)}>
                                <div className={styles.poster}>
                                    <div>
                                        <img src={m.Poster} className={styles.imgPoster}/>
                                    </div>
                                    <p className={styles.textPoster}>{m.Title}, {m.Year}</p>
                                </div>
                            </button>
                        ))}            
                    </section> 
                </div> 
            )
        }



        
    }else{
        const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=31c8f11c&t=${busca}&y=${ano}`, fetcher)
        if (error) return <div>falha na requisição...</div>
        if (!data) return (<div className={spin.divSpinner}><Spin size='large'/></div>)
        array.push(data)

        
        if(data.Response == 'False'){
            return(
                <Erro/>
            )
        }else{
           
            return (
                <div>
                    <section className={styles.galeria}>
                        {array?.map( (m) => ( 
                            <button onClick={() => cliclkButtonFilme(m.imdbID)}>
                                <div className={styles.poster}>
                                    <div >
                                        <img className={styles.imgPoster} src={m.Poster}/>
                                    </div>
                                    <p className={styles.textPoster}>{m.Title}, {m.Year}</p>
                                </div>
                            </button>
                        ))}            
                    </section> 
                </div>  
            )
        }


        


    }
}

export function Erro(){
    return (
        <div className={styles.erro}>
            <h1>Não foi possível realizar a busca</h1>
            <p>Talvez os parâmetros de busca estejam errados, tente novamente</p>
        </div>
    )
}

async function fetcher(url){
    const res = await fetch(url)
    const json = await res.json()
    return json
}