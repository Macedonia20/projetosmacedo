import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

import imgCracha from './assets/cracha.png'
import imgPerfil from './assets/perfil.jpeg'
import imgPlanilha from './assets/planilha.png'
import imgCurso from './assets/painelCurso.png'
import imgPainel from './assets/painelAdm.png'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Esse foi meu primeiro projeto, foi um projeto bem simples com o foco em dispositvo mobile, nele é possivel acessar as minhas redes apenas com um click. As tecnologias usadas foram, HTML, CSS E JS! '},
      {type: 'photo', content: imgCracha},
      {type: 'link', content:'https://macedonia20.github.io/Cracha-nlw/'}, 
    ],
    publishedAt: new Date('2021-11-22 21:00:00')
  },

  {
    id: 2,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'Esse foi meu segundo projeto, esse foi um pouco mais complexo. É uma planilha online com entrada e saida e tráz um resultado final negativo ou positivo. Usei a biblioteca do Mirage como api, as tecnologias usadas foram, HTML, CSS (styled-components), JS (React e TypeScript).'},
      {type: 'photo', content: imgPlanilha},
      {type: 'link', content:'http://planilhasonline.s3-website-sa-east-1.amazonaws.com/'}, 
    ],
    publishedAt: new Date('2021-12-12 21:00:00') 
  },

  {
    id: 3,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'Esse projeto foi desenvolvido com, Nextjs e Chakra UI. É um sistema de administrativo, com tela de login, usei a biblioteca do ApexCharts para fazer os graficos e uma lista de usuários.'},
      {type: 'photo', content:  imgPainel},
      {type: 'link', content:'https://d24wfkhx4iz0js.cloudfront.net'}, 
    ],
    publishedAt: new Date('2022-04-12 21:00:00') 
  },

  {
    id: 4,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'Esse foi um dos projetos que eu mais gostei, nesse projeto eu conheci a biblioteca do Tailwind e achei incrivel a maneira de estilazação dessa biblioteca, usei também essas duas bibliotecas, GraphQL e Apollo. Foi meu primeiro contato com elas, gostei muito da perfomace de ambas. Tecnologias usadas foram, Tailwind, (React e TypeScript), GraphQL e Apollo.'},
      {type: 'photo', content: imgCurso},
      {type: 'link', content:'http://paineldecurso.com.s3-website-sa-east-1.amazonaws.com/'}, 
    ],
    publishedAt: new Date('2022-06-12 21:00:00') 
  },

  {
    id: 5,
    author: {
      avatar: imgPerfil,
      name: 'Matheus Macedo',
      role: 'Developer fullStack'
    },
  

    content: [
      {type: 'paragraph', content: 'E aqui estão os links de projetos privados que tive o prazer de fazer parte, tendo a oportunidade de executar do zero alguns desses projetos sozinho!'},
      {type: 'link', content:'https://app.plataformaqgr.com.br/'}, 
      {type: 'link', content:'https://checkin.movimentoldr.com.br/'}, 
      {type: 'link', content:'https://projetosmarcal.com.br/'}, 
      {type: 'link', content:'https://app.movimentoldr.com.br/login'}, 
      {type: 'link', content:'https://kids.plataformaqgr.com.br/'}, 
      ],
    publishedAt: new Date('2022-06-12 21:00:00') 
  },
  
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

  

