import { AppleLogo } from 'phosphor-react'

import styles from './Header.module.css'

import logoIgnate from '../../assets/logoIgnate.svg'

export function Header() {
    return (
       
        <header className={styles.header}>
           <img src={logoIgnate} alt="Logo Ignate" />

           {/* <AppleLogo size={52}  style={{backgroundColor: 'green'}}/> */}
        </header>
    );
}