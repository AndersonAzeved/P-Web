import styles from '../styles/movies.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function MinhaPagina() {
    const router = useRouter()
    const busca = router.query.busca
    const ano = router.query.ano
    const exibir = router.query.exibir
    const [data, setData] = useState()
    const [array, setArray] = useState([])
    const [fezBusca, setFezBusca] = useState()

    useEffect(() => {
        async function fetchData(busca,ano,exibir) {
            setFezBusca(0)
            if(exibir == 'true'){
                try {
                    const response = await fetch(`http://www.omdbapi.com/?apikey=31c8f11c&s=${busca}`)
                    const data = await response.json()
                    setData(data)
                    setFezBusca(1)
                } catch (error) {
                    alert('Não foi possível realizar a busca')
                }
            }else{
                try {
                    const response = await fetch(`http://www.omdbapi.com/?apikey=31c8f11c&t=${busca}&y=${ano}`)
                    const data = await response.json()
                    setArray([data])
                    setFezBusca(1)
                } catch (error) {
                    alert('Não foi possível realizar a busca')
                }
            }
            
        }        

        if (busca) {
            fetchData(busca,ano,exibir)
        }
    }, [busca,ano,exibir])


    if((data == undefined || array == undefined) && fezBusca == 0){
        return (
            <Erro/>
        )
    }else{
        if(exibir == 'true'){
            return (
                <div>
                    <section class={styles.galeria}>
                        {data?.Search?.map( (m) => ( 
                            <div class={styles.poster}>
                                <img src={m.Poster} class={styles.imgPoster}/>
                                <p class={styles.textPoster}>{m.Title}, {m.Year}</p>
                            </div>
                        ))}            
                    </section> 
                </div> 
            )
        }else{
            return (
                <div>
                    <section class={styles.galeria}>
                        {array?.map( (m) => ( 
                            <div class={styles.poster}>
                                <img src={m.Poster} class={styles.imgPoster}/>
                                <p class={styles.textPoster}>{m.Title}, {m.Year}</p>
                            </div>
                        ))}            
                    </section> 
                </div>  
            )
        }
    }
    
    
}


export function Erro(){
    return (
        <div class={styles.erro}>
            <h1>Não foi possível realizar a busca</h1>
            <p>Talvez os parâmetros de busca estejam errados, tente novamente</p>
        </div>
    )
}