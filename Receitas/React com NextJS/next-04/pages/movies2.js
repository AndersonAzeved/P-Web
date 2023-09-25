import useSWR from 'swr'

export default function Movies2(){
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=31c8f11c&s=bagdad`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return(
        <div>
            {data.Search.map((m) => <div>{m.Title} ----- {m.Year}</div>)}
        </div>
    )
}

async function fetcher(url){
    const res = await fetch(url)
    const json = await res.json()
    return json
}


// Condicional para quando o data for undefined
/*
if(data.Response == 'False'){
        return(
            <div>-------------------------Deu merdaaaaaaaaaa</div>
        )
}else{
    return(
        <div>
            {data.Search.map((m) => <div>{m.Title} ----- {m.Year}</div>)}
        </div>
    )
}
*/