import Avatar from '../Avatar/Avatar'
import { Comment } from '../Comment'
import { format, formatDistanceToNow } from "date-fns";
import styles from './Post.module.css'

type ContentType = {
  content: string;
  type: string;
}

type PostProps = {
  avatarUrl: string;
  authorName: string;
  publishedAt: Date;
  authorJobTitle: string;
  content: ContentType[]
}

export function Post({
  avatarUrl,
  authorName,
  publishedAt,
  authorJobTitle,
  content
}: PostProps) {
  const formateDate = format(publishedAt, "d 'of' LLLL HH:mm'h'")

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  })

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
          <time title={formateDate} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </div>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') return <p>{line.content}</p>
          else if (line.type === 'link') return <p><a href="#">{line.content}</a></p>
        })}
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
