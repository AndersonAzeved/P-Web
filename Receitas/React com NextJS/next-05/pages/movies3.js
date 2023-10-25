import useSWR from 'swr'
import {useState} from 'react'
import { Button, Card, Spin } from 'antd';
import styles from '../styles/movies3.module.css'
import Link from 'next/link'


export default function Movies3(){
    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)

    const onClickHandler = (e) => {
        e.preventDefault()
        if (url === '') setUrl('http://www.omdbapi.com/?apikey=31c8f11c&s=bagdad')
        else setUrl('')
    }

    return (
        <div>
            <TheLink url={url} handler={onClickHandler}/>
            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>
        </div>
    )

}

async function theFetcher(url) {
    if (url === null || url === '') return {Search:''}
    const res = await fetch(url);
    const json = await res.json();
    return json;
}


export function TheMovies({data,show}){
    if (!show) return (<div></div>)    
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '' ) return (<div className={styles.divSpinner}><Spin size='large'/></div>)

    const {Meta} = Card
    let id
    return (
            
        <div className={styles.divPoster}>
            { data.Search.map( (m) =>                
                <Link className={styles.Link} href='../onemovie/[id].js' as={`../onemovie/${m.imdbID}`}>
                    <Card className={styles.poster} hoverable style={{width: '90%', background: 'grey', textAlign:'center', position: 'relative'}}  
                            cover={<img src={m.Poster} style={{background:'grey'}}/> } 
                        >
                        <Meta title={m.Title} description={m.Year} />
                    </Card>      
                    <br></br>           
                </Link>
    
            )}            
        </div>
    )
}

export function TheLink({url, handler}){    
    return (
        <div className={styles.divBotoes}>
            <a href="/movies3.js" onClick={handler}> {url === '' ? <Button className={styles.Button}>Mostrar</Button> : <Button className={styles.Button}>Ocultar</Button>} </a>
        </div>
    )
}