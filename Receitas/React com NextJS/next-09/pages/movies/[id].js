import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './id.module.css'


export default function TheMovie({movies}){
    console.log(`Pré-renderizando ${movies}`)

    if(movies == undefined || movies.Title == undefined){
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
                    <img src={movies.Poster} width="300" height="400"/>
                </div>
                <div>
                    <h4>{movies.Title}, {movies.Year}</h4>
                    <p>{movies.Plot}</p>
                </div>
            </div>
        ) 
    }
}

export async function getStaticPaths(){
    return {
        paths:[
            {params: {id: "tt0095801"}},
            {params: {id: "tt0033152"}},
            {params: {id: "tt0015400"}},
            {params: {id: "tt0041149"}},
            {params: {id: "tt0044388"}},
            {params: {id: "tt0098746"}},
            {params: {id: "tt0046322"}},
            {params: {id: "tt0046497"}},
            {params: {id: "tt0044389"}}
        ],
        fallback: true 
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=31c8f11c&i=${params.id}`)
    const movies = await res.json();
    return {
        props: {
            movies
        }
    }
}