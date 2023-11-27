export default function TheMovie({movies}){
    console.log(`Pré-renderizando ${movies}`)
    
    return (
        <div>
            <div>{movies[0].character} --- {movies[0].quote}</div>
            <div>
                <img src={movies[0].image} wcharacterth="300" height="400"/>
            </div>
        </div>   
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