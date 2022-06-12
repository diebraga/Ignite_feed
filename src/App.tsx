import { Header } from "./components/Header"
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

const posts = [
  {
    id: 1,
    avatarUrl: 'https://github.com/hudsontteixeira.png',
    authorName: 'Hudson Teixeira',
    publishedAt: new Date('2022-06-03 20:00:00'),
    authorJobTitle: 'Frontend Developer',
    content: [
      { type: 'paragraph', content: 'Hello guys!' },
      { type: 'paragraph', content: "I just aploaded my newest project on github, let's star it" },
      { type: 'link', content: '<a href="">hudsontexeira/newestproject.com</a>' },
    ]
  },
  {
    id: 2,
    avatarUrl: 'https://github.com/diebraga.png',
    authorName: 'Hudson Teixeira',
    publishedAt: new Date('2022-06-04 22:00:00'),
    authorJobTitle: 'Fullstack Developer',
    content: [
      { type: 'paragraph', content: 'Hello guys!' },
      { type: 'paragraph', content: "I just aploaded my newest project on github, let's star it" },
      { type: 'link', content: '<a href="">diebraga/die.com</a>' },
    ]
  }
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                authorJobTitle={post.authorJobTitle}
                authorName={post.authorName}
                avatarUrl={post.avatarUrl}
                publishedAt={post.publishedAt}
              />
            )
          })}
          
        </main>
      </div>
    </div>
  )
}

export default App
