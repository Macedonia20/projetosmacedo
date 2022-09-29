import { PencilLine } from 'phosphor-react'

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
            <footer >
                <a href='#'>
                    <PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}