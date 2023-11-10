import React from 'react'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

export default function Nav(){
    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link className={styles.link} href='https://receitas-next-anderson.vercel.app/'>Home</Link>
            </li>
            <li className={styles.li}>
                <Link className={styles.link} href='https://next-receita-1.vercel.app/'>Receita 1</Link>
            </li>
        </ul>
    )
}