import { GithubLogo } from 'phosphor-react'

import styles from './Sidebar.module.css'

import imguser from '../../assets/perfil.jpeg'

import { Avatar } from '../Avatar/Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar} >
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1553390774-b4822481c894?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50%22" 
            />

            <div className={styles.profile}>
                <Avatar src={imguser}/>
                
                <strong>Matheus Macedo</strong>
                    
                <span>Web developer</span>
            </div>
            <br />
            <div className={styles.descrition}>
                <h4>Sobre mim:</h4>

                <p>
                    Tenho 22 anos, moro na cidade de Santo andré, comecei a programar em 2021 e 
                    desde então tenho tido a certeza que me encaixo  nesse área e que quero 
                    continuar me desenvolvendo nesse universo da programação. <br/>
                    Esse é o meu portifolio com alguns projetos que criei do zero e alguns que fiz parte,
                    espero que goste! 
                
                </p>
            </div>
            <footer >
                <a href='https://github.com/Macedonia20' target="blank">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" size={32} />
                    Ver perfil
                </a>
                <br />
                <a href='https://www.linkedin.com/in/matheus-macedo-15b60821b/' target="blank">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" size={32} />
                    Ver perfil
                </a>
            </footer>
            
        </aside>
    )
}