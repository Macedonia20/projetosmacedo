import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
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
    id: 2,
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
  },

  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  {
    id: 7,
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
  },
  {
    id: 8,
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
  },
  {
    id: 9,
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
  },
  {
    id: 10,
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
  },
  {
    id: 11,
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
  },
  {
    id: 12,
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
  },
  {
    id: 13,
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
  },
  {
    id: 14,
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
  },
  {
    id: 15,
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
  },
  {
    id: 16,
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
  },
  {
    id: 17,
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
  },
  {
    id: 18,
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
  },
  {
    id: 19,
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
             key={post.id}
            />
          )
         })}
        </main>
      </div>
    </div>
    
  )
}

  

