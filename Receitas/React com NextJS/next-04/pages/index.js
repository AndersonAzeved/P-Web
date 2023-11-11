import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/busca.module.css'

const Pagina1 = () =>{
    const router = useRouter()

    const [busca, setBusca] = useState('')
    const [ano, setAno] = useState('')
    const [exibir, setExibir] = useState(false)

    const handleClick = () => {
        const query = {
            busca,
            ano,
            exibir,  
        };
    
        router.push({
            pathname: '../buscaCliente/movies',
            query,
        });
    }

    const handleChange = (e) => {
        setBusca(e.target.value)
    }
    
    const anoChange = (e) => {
        setAno(e.target.value)
    }

    
    const toggleConteudo = () => {
        setExibir(!exibir)
    }

    return (
        <div className={styles.forms}>
            <h2>Busca pelo Cliente</h2>
            <hr></hr>
            <h2>Realize busca de filmes e séries</h2>

            <hr></hr>
                {exibir ? 
                <h3>Realizando busca por Titulo e Data</h3> :
                <h3>Realizando busca por Titulo</h3>
                }
            <hr></hr>

            <button className={styles.button} onClick={toggleConteudo}>
                {exibir ? 'Titulo' : 'Titulo e Data'}
            </button>

            <hr></hr>

            {exibir && (
                <div>
                    <p></p>
                    <input className={styles.input} type='text' id='busca' value={busca} onChange={handleChange} placeholder='Titulo' required/>
                    <button className={styles.button} onClick={handleClick}>Buscar</button>
                    <p></p>
                </div>
            )}
            {!exibir&&(
                <div>
                    <p></p>
                    <input className={styles.input} type='text' id='busca' value={busca} onChange={handleChange} placeholder='Titulo' required/>
                    <input className={styles.input} type='text' id='ano' value={ano} onChange={anoChange} placeholder='Ano' required/>
                    <button className={styles.button} onClick={handleClick}>Buscar</button>
                    <p></p>
                </div>
            )}
        </div>
       
    )
}

export default Pagina1