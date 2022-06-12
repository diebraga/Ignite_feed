import Avatar from '../Avatar/Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'

type PostProps = {
  avatarUrl: string;
  authorName: string;
  publishedAt: Date;
  authorJobTitle: string;
}

export function Post({
  avatarUrl,
  authorName,
  publishedAt,
  authorJobTitle,
}: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author} style={{ display: 'flex' }}>
          <Avatar src={avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{authorName}</strong>
            <span>{authorJobTitle}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <time title={'timeTitle'} dateTime={'dateTime'}>
            {'publishedAt'}
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

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
