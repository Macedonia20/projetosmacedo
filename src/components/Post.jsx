import styles from './Post.module.css'
import imgProfile from '../assets/perfil.jpeg'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <img className={styles.avatar} src={imgProfile} />

                    <div className={styles.authorInfo}>

                        <strong>Matheus Macedo</strong>
                        <span>Developer fullStack</span>
                    </div>
                    <time title="" dateTime="">Publicado há 1h</time>
                </div>
            </header>

            <div className={styles.content}>
              <p> Fala galeraa 👋</p>

              <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

              <p><a href="">jane.design/doctorcare</a></p>

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
        </article>
    )
}