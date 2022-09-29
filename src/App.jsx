import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
  author: {
    avatar: 'https://github.com/macedonia20.png',
    name: 'Matheus Macedo',
    role: 'Developer fullStack'
  },
  

  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto. É um projeto que fiz para lista todos os outros projetos, cada publicação será um projeto meu!'},
    {type: 'link', content: '@macedoo_matheus'}
  ],
  publishedAt: new Date('2022-05-30 21:00:00')
  },

  {
    author: {
      avatar: 'https://avatars.githubusercontent.com/u/1562727?v=4',
      name: 'Rodrigo Barbosa',
      role: 'fullStack'
    },
    

    content: [
      {type: 'paragraph', content: 'Corrupti iusto illum at ut nostrum, suscipit sapiente explicabo fuga fugiat tempora!r mais um projeto. É um projeto que fiz para lista todos os outros projetos, cada publicação será um projeto meu!'},
      {type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam praesentium ad eligendi dolore maxime voluptates ab amet eum.'},
      {type: 'link', content: '@Rodrigo_2k'}
    ],
    publishedAt: new Date('2022-08-30 21:00:00')
  }

]

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
      <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post 
             author={post.author}
             content={post.content}
             publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </div>
    
  )
}

  

