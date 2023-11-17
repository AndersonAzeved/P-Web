/*import useSWR from 'swr'
import {useState} from 'react'
import { useRouter } from 'next/router'
import { Button } from 'antd';


export default function Movies33(){
    const [exibir, setExibir] = useState(false)
    const [state, setState] = useState({url:'', titleSearchString:''})
    const {data, error} = useSWR(state.url, async (u) => {
        if (!state.url || !state.titleSearchString) return {Search:''}
        if (state.url === '' || state.titleSearchString ==='') return {Search:''}
        const res = await fetch(`${state.url}/?apiKey=31c8f11c&s=${state.titleSearchString}`)
        const json = await res.json();
        return json;
    })

    const onFocus = () => {
        if(state.url !== ''){
            document.getElementById('titleSearchString').value = ''
            setState({url: '', titleSearchString: ''})
        }
    }

    const onEnter = (e) => {

        document.getElementById('titleSearchString').addEventListener('keydown', (e) => {
            
            if(e.keyCode == 13){
                e.preventDefault()
                document.getElementById('titleSearchString').blur()
                let s = document.getElementById('titleSearchString').value
                if(s){
                    if (state.url === '') {
                        setState({url:'http://www.omdbapi.com',titleSearchString:s})
                    }
                    else setState({url:'',titleSearchString: state.titleSearchString})
                }
                else{
                    setState({url:'',titleSearchString: state.titleSearchString})
                }
            }
        })
    }

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
    
    const toggleConteudo = () => {
        setExibir(!exibir)
    }


    return (
        <div>       
            <div>
                {exibir == true ? <Button style={{background: 'black'}} onClick={toggleConteudo} ghost>Buscar pelo Título</Button> : <Button style={{background: 'black'}} onClick={toggleConteudo} ghost>Buscar pelo Título e Ano</Button>}
                {exibir == true ? <TheFormData f1={onFocus} f2={onEnter}/> : <TheForm f1={onFocus} f2={onEnter}/>}
            </div>    
            
            <div id='info'></div>
            <TheMovies data={data ? data: {Search:''} } show={state.url !== ''} />
        </div>
    )
}


export function TheForm({f1,f2}){
    return (
        <div>
            <form>
                <label htmlFor="titleSearchString">Título</label>
                <input id="titleSearchString" name="titleSearchString" type="text" autoComplete="true" onFocus={f1} onChange={f2}/>
            </form>
        </div>
    )

}

export function TheFormData({f1,f2}){
    return (
        <div>
            <form>
            <label htmlFor="titleSearchString">Título</label>
                <input id="titleSearchString" name="titleSearchString" type="text" autoComplete="true"/>

                <label htmlFor="dataSearchString">Ano</label>
                <input id="dataSearchString" name="dataSearchString" type="text" autoComplete="true" onFocus={f1} onChange={f2}/>
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
}*/




import useSWR from 'swr'
import {useState} from 'react'
import { useRouter } from 'next/router'
import { Button, Card, Image, Spin } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined, LoadingOutlined } from '@ant-design/icons'
const { Meta } = Card;


export default function Movies33(){
    const [ordenar, setOrdenar] = useState(false)
    const [exibir, setExibir] = useState(false)
    const [state, setState] = useState({url:'', titleSearchString:'', dataSearchString:''})
    const {data, error} = useSWR(state.url, async (u) => {
        if(exibir){
            if (!state.url || !state.titleSearchString || !state.dataSearchString) return {Search:''}
            if (state.url === '' || state.titleSearchString ==='' || state.dataSearchString == '') return {Search:''}
            const res = await fetch(`${state.url}/?apiKey=31c8f11c&s=${state.titleSearchString}&y=${state.dataSearchString}`)
            const json = await res.json();
            return json;
        }else{
            if (!state.url || !state.titleSearchString) return {Search:''}
            if (state.url === '' || state.titleSearchString ==='') return {Search:''}
            const res = await fetch(`${state.url}/?apiKey=31c8f11c&s=${state.titleSearchString}`)
            const json = await res.json();
            return json;
        }
        
    })

    const onFocus = () => {
        if(exibir){
            if(state.url !== ''){
                document.getElementById('dataSearchString').value = ''
                setState({url: '', titleSearchString: '', dataSearchString:''})}
        }else{
            if(state.url !== ''){
            document.getElementById('titleSearchString').value = ''
            setState({url: '', titleSearchString: '', dataSearchString:''})}
        }
    }

    const onEnter = (e) => {
        if(exibir == true && document.getElementById('dataSearchString').value){
            
            document.getElementById('dataSearchString').addEventListener('keydown', (e) => {
            
                if(e.keyCode == 13){
                    e.preventDefault()
                    document.getElementById('titleSearchString').blur()
                    let s = document.getElementById('titleSearchString').value
                    if(s){
                        document.getElementById('dataSearchString').blur()
                        let y = document.getElementById('dataSearchString').value
                        if (state.url === '') {
                            setState({url:'http://www.omdbapi.com',titleSearchString:s, dataSearchString:y})
                        }
                        else setState({url:'',titleSearchString: state.titleSearchString, dataSearchString:y})
                    }
                    else{
                        setState({url:'',titleSearchString: state.titleSearchString, dataSearchString:y})
                    }
                }
            })
        }else{
            document.getElementById('titleSearchString').addEventListener('keydown', (e) => {
            
                if(e.keyCode == 13){
                    e.preventDefault()
                    document.getElementById('titleSearchString').blur()
                    let s = document.getElementById('titleSearchString').value
                    if(s){
                        if (state.url === '') {
                            setState({url:'http://www.omdbapi.com',titleSearchString:s})
                        }
                        else setState({url:'',titleSearchString: state.titleSearchString})
                    }
                    else{
                        setState({url:'',titleSearchString: state.titleSearchString})
                    }
                }
            })
        }


    }
    
    const toggleConteudo = () => {
        setExibir(!exibir)
    }

    const toggleOrdenar = () =>{
        setOrdenar(!ordenar)
    }


    return (
        <div>       
            <div style={{
                background: 'black',
                padding: 20,
                color: 'white',
                textAlign: 'center',
                borderRadius: 15
                }}>  

                {exibir == true ? <Button style={{background: 'black'}} onClick={toggleConteudo} ghost>Buscar pelo Título</Button> : <Button style={{background: 'black'}} onClick={toggleConteudo} ghost>Buscar pelo Título e Ano</Button>}
                <br/><br/>
                {exibir == true ? <TheFormData f1={onFocus} f2={onEnter}/> : <TheForm f1={onFocus} f2={onEnter}/>}
            </div>    
            <br/>
            <div style={{background: 'black', color: 'white', borderRadius: 5}}>
                {ordenar === true ? (<div>
                        <label>Decrescente&nbsp;</label>
                        <ArrowDownOutlined onClick={toggleOrdenar} label='dfdf'/>
                    </div>) : <div>
                        <label>Crescente&nbsp;</label>
                        <ArrowUpOutlined onClick={toggleOrdenar}/>
                    </div>}
            </div><br/>
            <div id='info'></div>

            <TheMovies data={data ? data: {Search:''} } show={state.url !== ''} ordenar={ordenar} />
        </div>
    )
}


export function TheForm({f1,f2}){
    return (
        <div>
            <form>
                <input id="titleSearchString" name="titleSearchString" type="text" autoComplete="true" onFocus={f1} onChange={f2} placeholder='Título'/>
            </form>
        </div>
    )

}

export function TheFormData({f1,f2}){
    return (
        <div>
            <form>
                <input id="titleSearchString" name="titleSearchString" type="text" autoComplete="true" placeholder='Título'/>
                <br/><br/>
                <input id="dataSearchString" name="dataSearchString" type="text" autoComplete="true" onFocus={f1} onChange={f2} placeholder='Ano'/>
            </form>
        </div>
    )

}

export function TheMovies({data,show,ordenar}){
    if (!show) return (<div></div>)
    if (!data) return (<div></div>)
    if (data.error) return (<div>falha na pesquisa</div>)
    if (data.Search === '' ) return (
        <div style={{textAlign: 'center'}}>
            <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>
        </div>)

    let div = document.getElementById('info')

    let dataCrescente = data.Search?.map( (m) => m).sort(compareTitles)

    const card = {
        width: 250,
        marginTop: 10,
        background: 'gray',
    }

    if(data.Search == undefined){
        div.innerHTML = 'Busca não Encontrada'
    }else{
        div.innerHTML = ''
        return(
            <div style={{columns: 4}}>
                {ordenar === false ? dataCrescente.map((m) => 
                <Card key={m.imdbID} hoverable style={card} cover={<Image src={m.Poster} alt={m.imdbID}/>}>
                    <Meta title={m.Title} description={m.Year}></Meta>
                </Card>
                ): dataCrescente.map((m) => 
                <Card key={m.imdbID} hoverable style={card} cover={<Image src={m.Poster} alt={m.imdbID}/>}>
                    <Meta title={m.Title} description={m.Year}></Meta>
                </Card>).reverse()}
            </div>
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

function compareTitles(m1, m2) {
    if (m1.Title === undefined || m2.Title === undefined) {
      return 0;
    }
  
    return m1.Title.localeCompare(m2.Title);
}