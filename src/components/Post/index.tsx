import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/diebraga.png" />

          <div className={styles.authorInfo}>
            <strong>Diego Braga</strong>
            <span>Fullstack Developer</span>

          </div>
        </div>

        <time title='12 jun 2022' dateTime='2022-06-12 10:33'>
          Published 2hrs ago.
        </time>
      </header>

      <div className={styles.content}>
        <p>aaaaaa</p>
        <p>hhggfftyuujvjjjjjjjgggggggggggggggjjjjjjjgggggggggggggggjjjjjjjggggggggggggggg</p>
        <p><a href=""></a>jjjjjjjggggggggggggggg</p>
        <p><a href="">jkkkkokgggfffyyyuuiooooooo</a></p>
      </div>
    </article>
  )
}
