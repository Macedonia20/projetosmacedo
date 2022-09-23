import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from './Avatar'

import styles from './Comment.module.css'
import imgProfile from '../assets/ingrid.jpeg'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar EuEscolhoaPropiedade={false} src={imgProfile} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ingrid Beatriz</strong>
                            {/* <time title="" dateTime="">Publicado cerca de 2h</time> */}
                        </div>
                        <button title="Deletar comentário">
                            <Trash  size={20} />
                        </button>
                    </header>

                    <p>Muito bom amor, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>24</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}