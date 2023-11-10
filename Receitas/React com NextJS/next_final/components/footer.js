import Image from 'next/image';
import styles from '../styles/footer.module.css'


export default function Footer(){
    return (
        <footer className={styles.footer}>
            <a href='https://www.instagram.com/anderson.azvd/' target="_blank"><Image width={25} height={25} src='/instagram.png'/></a>
            <a href='https://github.com/AndersonAzeved' target="_blank"><Image width={25} height={25} src='/github.png'/></a>
            <a href='https://www.linkedin.com/in/anderson-azevedo-da-silva-24b2b8239/' target="_blank"><Image width={25} height={25} src='/linkedin.png'/></a>
            <a href='mailto:contatoandersonazeved@gmail.com' target="_blank"><Image width={25} height={25} src='/gmail.png'/></a>
        </footer>
    )
}