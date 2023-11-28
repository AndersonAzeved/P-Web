import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';


export default function TheMovie({movies}){
    console.log(`Pré-renderizando ${movies}`)
    
    return (
        <div>
            <Card sx={{ width: 300, height: 550, background: '#FADA5E'}}>
                <AspectRatio minHeight="400px">
                    <img style={{width: 250}} src={movies[0].image} alt={movies[0].character}/>
                </AspectRatio>
                <div>
                    <Typography level="title-lg">{movies[0].character}</Typography>
                    <Typography level="body-sm">{movies[0].quote}</Typography>
                    <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}/>
                </div>
            </Card>
        </div>
        /*<div>
            <div>{movies[0].character} --- {movies[0].quote}</div>
            <div>
                <img src={movies[0].image} wcharacterth="300" height="400"/>
            </div>
        </div>*/   
    ) 
}

export async function getStaticPaths(){
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5000000')
    const data = await res.json()    
    const paths = data.map((d) => ({
        params: { character: (d.character.toLowerCase()).split(" ")[0] },
      }));
    return {
        paths,
        /*paths:[
            {params: {character: "mil"}},
            {params: {character: "bart"}},
            {params: {character: "moe"}},
            {params: {character: "lisa"}},
            {params: {character: "marge"}}
        ],*/
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