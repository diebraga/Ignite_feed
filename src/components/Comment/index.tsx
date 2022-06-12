import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diebraga.png" className={styles.avatar} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>

              <strong>Diego Braga</strong>
              <time title="11 de maio às 08h00" dateTime='2022-06-22 12:00:00'>
                Published 2hrs ago.
              </time>

            </div>

            <button title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>Congrats my friend</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Likes <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
