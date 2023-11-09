import styles from '../styles/footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <a href='https://www.instagram.com/anderson.azvd/' target="_blank"><img src='./instagram.png'></img></a>
            <a href='https://github.com/AndersonAzeved' target="_blank"><img src='./github.png'></img></a>
            <a href='https://www.linkedin.com/in/anderson-azevedo-da-silva-24b2b8239/' target="_blank"><img src='./linkedin.png'></img></a>
            <a href='mailto:contatoandersonazeved@gmail.com' target="_blank"><img src='./gmail.png'></img></a>
        </footer>
    )
}