import styles from '../styles/movies.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function MinhaPagina() {
    const router = useRouter()
    const busca = router.query.busca
    const ano = router.query.ano
    const exibir = router.query.exibir
    const [data, setData] = useState(null)
    const [arrayData, setArrayData] = useState([])

    useEffect(() => {
        async function fetchDataTrue(busca,ano,exibir) {
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=31c8f11c&s=${busca}`)
                const data = await response.json()
                setData(data)
            } catch (error) {
                alert('Não foi possível realizar a busca')
            }
        }

        async function fetchDataFalse(busca,ano,exibir){
            try {
                const response = await fetch(`https://www.omdbapi.com/?apikey=31c8f11c&t=${busca}&y=${ano}`)
                const data = await response.json()
                setArrayData([data])
            } catch (error) {
                alert('Não foi possível realizar a busca')
            }
        }         

        if (busca) {
            if(exibir == 'false'){
                fetchDataTrue(busca,ano,exibir)
            }else{
                fetchDataFalse(busca,ano,exibir)
            }
        }
    }, [busca,ano,exibir])
    
    if(exibir == 'false'){
        return(
            <div>
                <h1>Exibir: false</h1>
                <section class={styles.galeria}>
                    {arrayData.map( (m) => ( 
                        <div class={styles.poster}>
                            <img src={m.Poster} class={styles.imgPoster}/>
                            <p class={styles.textPoster}>{m.Title}, {m.Year}</p>
                        </div>
                    ))}            
                </section> 
            </div> 
        )
    }else{
        return(
            <div>
                <h1>Exibir: true</h1>
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
    }
    

}