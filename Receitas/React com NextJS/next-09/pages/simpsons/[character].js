import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import styles from './style.module.css'


export default function TheMovie({movies}){
    console.log(`Pré-renderizando ${movies}`)


    if(movies == undefined || movies[0] == undefined){
        if(movies == undefined){
            return(
                <div style={{textAlign: 'center'}}>
                <CircularProgress/>
                </div>
            )
        }
        return(
            <div className={styles.erro}>
                <h1>Não foi possivel encontrar</h1>
            </div>
        )
    }
    
    if(movies != undefined){
        return (  
            <div className={styles.card}>
                <div>
                    <img src={movies[0].image} width="300" height="400"/>
                </div>
                <div>
                    <h4>{movies[0].character}</h4>
                    <p>{movies[0].quote}</p>
                </div>
            </div>  
        ) 
    }
}

export async function getStaticPaths(){
    /*const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5000000')
    const data = await res.json()    
    const paths = data.map((d) => ({
        params: { character: (d.character.toLowerCase()).split(" ")[0] },
      }));
    return {
        paths,
        fallback: true 
    }*/
    return {
        paths:[
            {params: {character: "homer"}},
            {params: {character: "lisa"}},
            {params: {character: "bart"}},
            {params: {character: "moe"}}
        ],
        fallback: true 
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${params.character}`)
    const movies = await res.json();
    return {
      props: {
        movies
      }
    }
}