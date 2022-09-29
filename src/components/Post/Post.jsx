import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from '../Comments/Comment'
import { Avatar } from '../Avatar/Avatar'

import styles from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    })
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const [comment, setComment] = useState([1,2])

    function newComment() {
        event.preventDefault()

        setComment([...comment, comment.length + 1])
    
    }
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar src={author.avatar}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                        
                    </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="">{line.content}</a></p>
                    }
                })}

           </div>

            <form onSubmit={newComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                  placeholder="Deixe um comentário..."
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comment.map(comment => {
                    return (
                        <Comment />
                    )
                })}
            </div>
        </article>
    )
}