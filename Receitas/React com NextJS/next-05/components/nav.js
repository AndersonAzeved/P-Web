import React from 'react'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

export default function Nav(){
    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link className={styles.link} href='/'>Home</Link>
            </li>
            <li className={styles.li}>
                <Link className={styles.link} href='../busca'>Buscar (Cliente)</Link>
            </li>
            <li className={styles.li}>
                <Link className={styles.link} href='../buscaServer'>Buscar (Servidor)</Link>
            </li>
            <li className={styles.li}>
                <Link className={styles.link} href='../infoLocal'>Informação Cliente</Link>
            </li>
            <li className={styles.li}>
                <Link className={styles.link} href='../searchmovies/busca'>Receita 5</Link>
            </li>
        </ul>
    )
}