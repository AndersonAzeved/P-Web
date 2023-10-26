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
                <Link className={styles.link} href='../searchmovies/busca'>Buscar</Link>
            </li>
        </ul>
    )
}