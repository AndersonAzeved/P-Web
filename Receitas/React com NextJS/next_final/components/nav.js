import React from 'react'
import Link from 'next/link'
import styles from '../styles/nav.module.css'

export default function Nav(){
    return (
        <ul className={styles.ul}>
            <li className={styles.li}>
                <Link target="_blank" className={styles.link} href='https://receitas-next-anderson.vercel.app/'>Home</Link>
            </li>
            <li className={styles.li}>
                <Link target="_blank" className={styles.link} href='https://next-receita-1.vercel.app/'>Receita 1</Link>
            </li>
            <li className={styles.li}>
                <Link target="_blank" className={styles.link} href='https://next-receita-2.vercel.app/'>Receita 2</Link>
            </li>
            <li className={styles.li}>
                <Link target="_blank" className={styles.link} href='https://next-receita-3.vercel.app/'>Receita 3</Link>
            </li>
            <li className={styles.li}>
                <Link target="_blank" className={styles.link} href='https://next-receita-4.vercel.app/'>Receita 4</Link>
            </li>
            <li className={styles.li}>
                <Link target="_blank" className={styles.link} href='https://next-receita-5.vercel.app/'>Receita 5</Link>
            </li>
            <li className={styles.li}>
                <Link target="_blank" className={styles.link} href='https://next-receita-6.vercel.app/'>Receita 6</Link>
            </li>
            <li className={styles.li}>
                <Link target="_blank" className={styles.link} href='https://next-receita-9.vercel.app/'>Receita 9</Link>
            </li>
        </ul>
    )
}