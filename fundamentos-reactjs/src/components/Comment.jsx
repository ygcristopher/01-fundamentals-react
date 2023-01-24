import { ThumbsUp } from 'phosphor-react'
import { Trash } from 'phosphor-react' 
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/ygcristopher.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Juliana Silva</strong>
                            <time title="24 de Janeiro ás 00:12:23" dateTime="2023-01-24 00:12:23">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deleter comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Maria, parabéns !!! 😁😁</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}