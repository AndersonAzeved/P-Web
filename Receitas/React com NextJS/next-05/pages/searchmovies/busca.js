import {Input, Space, } from 'antd';
import { useRouter } from 'next/router'

export default function Buscar(){
    const { Search } = Input;
    const router = useRouter()
    const pegaValor = (valor) => {
        if(valor == ''){
            alert('Informe a busca')
        }else{
            router.push({
                pathname: `../onemovie/${valor}`
            })
        }
    }
    return(
        <div>
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