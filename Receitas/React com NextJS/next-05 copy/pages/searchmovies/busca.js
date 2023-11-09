import {Input, Space, Divider } from 'antd';
import { useRouter } from 'next/router'
import styles from '../../styles/search.module.css'


export default function Buscar(){
    const { Search } = Input;
    const router = useRouter()
    const pegaValor = (valor) => {
        if(valor == ''){
            alert('Informe a busca')
        }else{
            router.push({
                pathname: `/searchmovies/${valor}`
            })
        }
    }
    return(
        <div className={styles.search}>
            
            <h1>Realizar busca</h1>
            <h3>Filmes e Séries</h3>
            <Divider></Divider>

            <hr></hr>
            <Divider></Divider>
            
            <Space direction="vertical">
                <Search
                    placeholder="Buscar título"
                    onSearch={pegaValor}
                    allowClear
                    style={{
                        width: 400,
                    }}
                    size="large"
                />
            </Space>
        </div>
    )
}