import { Nav } from "./movies"
import styles from '../styles/info.module.css'
import useSWR from 'swr'

export default function Info(){
    const {data, error} = useSWR('https://extreme-ip-lookup.com/json/?key=X7oGa4K1LQyZLpfxRVXc', fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <>
            <Nav/>
            <h1 className={styles.titulo}>Informações do Cliente</h1>
            <div className={styles.info}>
                <div>
                    <h1>Internet</h1>
                    <div>
                        <p>IP: {data.query}</p>
                        <p>Tipo de IP: {data.ipType}</p>
                        <p>Provedor: {data.isp}</p>
                        <p>Empresa: {data.businessName}</p>
                        <p>Website: {data.businessWebsite}</p>
                        <p>Nome IP: {data.ipName}</p>
                    </div>
                </div>

                <div>
                    <h1 className={styles.h1}>Localidade do Cliente</h1>
                    <div>
                        <p>Local: {data.org}</p>
                        <p>Cidade: {data.city}</p>
                        <p>Estado: {data.region}</p>
                        <p>Continente: {data.continent}</p>
                        <p>País: {data.country} ({data.countryCode})</p>
                        <p>Latitude: {data.lat}</p>
                        <p>Longitude: {data.lon}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

async function fetcher(url){
    const res = await fetch(url)
    const json = await res.json()
    return json
}