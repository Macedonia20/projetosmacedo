import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'


import './global.css'

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          <Post 
            author="Matheus Macedo"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora corrupti consequatur distinctio beatae, sequi totam laborum! Voluptatibus magnam esse vitae sit adipisci! Aperiam pariatur illo voluptates optio similique accusantium asperiores?"
          />
          <Post 
            author="Ingrid Beatriz"
            content="A mulher mais linda do mundo"  
          /> 
        </main>
      </div>
    </div>
    
  )
}

  