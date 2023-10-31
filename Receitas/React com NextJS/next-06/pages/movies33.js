import useSWR from 'swr'
import {useState} from 'react'


export default function Movies33(){
    const [state, setState] = useState({url:'', titleSearchString:''})
    const {data, error} = useSWR(state.url, async (u) => {
        if (!state.url || !state.titleSearchString) return {Search:''}
        if (state.url === '' || state.titleSearchString ==='') return {Search:''}
        const res = await fetch(`${state.url}/?apiKey=31c8f11c&s=${state.titleSearchString}`)
        const json = await res.json();
        return json;
    })

    const onClickHandler = e => {
        e.preventDefault()
        let s = document.getElementById('titleSearchString').value
        if(s == ''){
            let div = document.getElementById('info')
            div.innerHTML = '*Campo obrigatório'
        }else{
            let div = document.getElementById('info')
            div.innerHTML = ''
            if (state.url === '') {
                setState({url:'http://www.omdbapi.com',titleSearchString:s})
            }else setState({url:'',titleSearchString: state.titleSearchString})
        }
    }

    return (
        <div>
            <title>Movies</title>
            <TheForm/>
            <TheLink url={state.url} handler={onClickHandler} />
            <div id='info'></div>
            <TheMovies data={data ? data: {Search:''} } show={state.url !== ''} />
        </div>
    )
}


export function TheForm(){
    return (
        <div>
            <form>
                <label htmlFor="titleSearchString">Filtro de Título</label>
                <input id="titleSearchString" name="titleSearchString" type="text" autoComplete="true"/>
            </form>
        </div>
    )

}

export function TheMovies({data,show}){
    if (!show) return (<div></div>)
    if (!data) return (<div></div>)
    if (data.error) return (<div>falha na pesquisa</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)

    let div = document.getElementById('info')
    
    if(data.Search == undefined){
        div.innerHTML = 'Busca não Encontrada'
    }else{
        div.innerHTML = ''
        return(
            data.Search?.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  )
        )
    }
}


export function TheLink({url, handler}){
    return (
        <div>
            <a href="/movies3.js" onClick={handler} > {url === '' ? 'Mostrar' : 'Ocultar'} </a>
        </div>
    )
}