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
                <Link className={styles.link} href='/'>Receita 1</Link>
            </li>
            <li className={styles.li}>
                <Link className={styles.link} href='https://next-receita-2.vercel.app/'>Receita 2</Link>
            </li>
        </ul>
    )
}