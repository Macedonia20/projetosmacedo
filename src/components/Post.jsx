import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import imgProfile from '../assets/perfil.jpeg'


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                   <Avatar src={imgProfile}/>

                    <div className={styles.authorInfo}>

                        <strong>Matheus Macedo</strong>
                        <span>Developer fullStack</span>
                    </div>
                    {/* <time title="" dateTime="">Publicado há 1h</time> */}
                </div>
            </header>

            <div className={styles.content}>
              <p> Fala galeraa 👋</p>

              <p>Acabei de subir mais um projeto. É um projeto que fiz para lista todos os outros projetos, cada publicação será um projeto meu!</p>

              <p><a href="">@macedoo_matheus</a></p>

              <p> <a href="">#novoprojeto</a> <a href="">#react</a> <a href="">#developer</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                  placeholder="Deixe um comentário..."
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}