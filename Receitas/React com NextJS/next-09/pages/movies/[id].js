export default function TheMovie({movies}){
    console.log(`Pré-renderizando ${movies}`)

    return (
        <div>
            <div>{movies.Title} --- {movies.Year}</div>
            <div>{movies.Plot}</div>
            <div>
                <img src={movies.Poster} width="300" height="400"/>
            </div>
        </div>   
    ) 
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