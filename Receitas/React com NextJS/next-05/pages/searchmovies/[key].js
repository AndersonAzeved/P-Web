import useSWR from 'swr'
import {useState} from 'react'
import { Button, Card, Spin, Image, Divider } from 'antd';
import styles from '../../styles/search.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Erro from  '../onemovie/[id]'

export default function Movies3(){
    const router = useRouter()
    const busca = router.query
    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)

    const onClickHandler = (e) => {
        e.preventDefault()
        if (url === '') setUrl('https://www.omdbapi.com/?apikey=31c8f11c&s='+busca.key)
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
    if (data.error) return (<Erro/>)
    if (data.Search === '' ) return (<div className={styles.divSpinner}><Spin size='large'/></div>)

    const {Meta} = Card

    

    return (
        <div className={styles.divPoster}>
            {data.Search === undefined ? <Erro/> :  data.Search?.map( (m) =>       
                <Link className={styles.Link} href='../onemovie/[id].js' as={`../onemovie/${m.imdbID}`}>
                    {m.Poster == 'N/A' ? <Image className={styles.poster} src='/notImag.jpg' preview={false} style={{borderRadius: 15, width: 270}}/> : <Image className={styles.poster} src={m.Poster} preview={false} style={{borderRadius: 15, width:250}}/>   } 
                    <br/> <br/>          
                </Link>
    
            )}            
        </div>
    )
}

export function TheLink({url, handler}){    
    return (
        <a href="/movies3.js" onClick={handler}> {url === '' ? 
        <div className={styles.divBotoes1}><Button className={styles.Button}>Mostrar</Button></div> : 
        <div className={styles.divBotoes2}><Button className={styles.Button}>Ocultar</Button></div>} </a>
    )
}

/*
<div className={styles.divPoster}>
            { data.Search.map( (m) =>                
                <Link className={styles.Link} href='../onemovie/[id].js' as={`../onemovie/${m.imdbID}`}>
                    <Card className={styles.poster} hoverable style={{width: '70%', background: 'grey', textAlign:'center', position: 'relative'}}  
                            cover={<img src={m.Poster} /> } 
                        >
                        <Meta title={m.Title} description={m.Year} />
                    </Card>      
                    <br></br>           
                </Link>
    
            )}            
        </div>
*/