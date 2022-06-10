import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author} style={{ display: 'flex' }}>
          <img src="https://github.com/diebraga.png" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Diego Braga</strong>
            <span>Fullstack Developer</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <time title="11 de maio às 08h00" dateTime='2022-06-22 12:00:00'>
            Published 2hrs ago.
          </time>
        </div>
      </header>

      <div className={styles.content}>
        <p>jjhhhg</p>
        <p>jjuuy</p>
        <p><a href="">jjuyyt</a></p>
        <p>
          <a href="ooihgfs">llll</a>{' '}
          <a href="ooihgfs">llll</a>{' '}
          <a href="ooihgfs">llll</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>
          Leave your feedbacks
        </strong>

        <textarea
          placeholder='leave a comment'
        />

        <footer>
          <button type='submit'>
            Publish
          </button>
        </footer>
      </form>
    </article>
  )
}
