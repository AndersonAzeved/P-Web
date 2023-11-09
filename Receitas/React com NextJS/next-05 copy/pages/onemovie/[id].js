import { useRouter } from 'next/router'
import useSWR from 'swr'
import styles from '../../styles/movies3.module.css'
import { Layout, Space, Spin } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


export default function Selecionado(){
    const router = useRouter()
    const id = router.query
    console.log(id.id)

    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=31c8f11c&i=${id.id}`, fetcher)
    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div className={styles.divSpinner}><Spin size='large'/></div>

    const header = {
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        height: 75,
        paddingInline: 50,
        lineHeight: '64px',
    }

    const slider = {
        textAlign: 'center',
        lineHeight: 30,
        marginLeft: 10,
        color: 'white',
        backgroundColor: 'black',
    }

    const layout = {
        backgroundColor: 'black',
        width: '85%',
        textAlign: 'center',
        marginLeft: '7%',
    }

    const footer = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'black',
        marginLeft: 70,
    }

    const content = {
        backgroundColor: '#1C1C1C',
        lineHeight: '50px',
        textAlign: 'center',
        minHeight: '80px',
        color: 'white',
        columns: 3,
        marginLeft: 20,
        marginRight: 20,
    }
    
//https://ant.design/components/layout

    if(data.Response == 'False' || data == undefined){
        return(<Erro/>)
    }else{
        return(
            <Space direction="vertical" style={{width: '100%'}} size={[0,48]}>
                
                <Layout style={layout}>
                    <Sider style={slider}>
                        {data.Poster === 'N/A' ? <img src='../../notImag.jpg' style={{width: 270, borderRadius: 15}}/>: <img src={data.Poster} style={{width: 250, borderRadius: 15}}/>}
                    </Sider>
                    <Layout style={layout}>
                        <Header style={header}>
                            <h3>{data.Title}</h3>
                        </Header>
                        <Content style={content}>
                            <div className={styles.divContent}>
                                <p>Ano: {data.Year}</p>
                                <p>Lançamento: {data.Released}</p>
                                <p>Duração: {data.Runtime}</p>
                                <p>Gênero: {data.Genre}</p>
                                <p>Diretor: {data.Director}</p>
                                <p>Atores: {data.Actors}</p>
                                <p>Linguagem: {data.Language}</p>
                                <p>País: {data.Country}</p>
                                <p>Tipo: {data.Type}</p>
                            </div>
                        </Content>
                        <Footer style={footer}>
                            <p>{data.Plot}</p>
                        </Footer>
                    </Layout>
                </Layout>
            </Space>
        )
    }
}

async function fetcher(url){
    const res = await fetch(url)
    const json = await res.json()
    return json
}

export function Erro(){
    return (
        <div className={styles.erro}>
            <h1>Não foi possível realizar a busca</h1>
            <p>Talvez os parâmetros de busca estejam errados, tente novamente</p>
        </div>
    )
}