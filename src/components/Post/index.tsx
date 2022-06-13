import Avatar from '../Avatar/Avatar'
import { FormEvent } from "react";
import { Comment } from '../Comment'
import { format, formatDistanceToNow } from "date-fns";
import styles from './Post.module.css'
import { useState } from 'react';

const commentsArray = [
  { id: 1, comment: 'Hey this is so cool' },
  { id: 2, comment: "Congrats for your repo!" }
]

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

type CommentTypes = {
  comment: string;
  id: number;
}

export function Post({
  avatarUrl,
  authorName,
  publishedAt,
  authorJobTitle,
  content
}: PostProps) {
  const [comments, setComments] = useState<CommentTypes[]>(commentsArray)

  const [newCommentText, setNewCommentText] = useState('')

  const formateDate = format(publishedAt, "d 'of' LLLL HH:mm'h'")

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  })

  function handleAddComment(e: FormEvent): void {
    e.preventDefault()
    if (newCommentText === '') null;
    else setComments(prev => [...prev, { id: prev.length + 1, comment: newCommentText }])
  }

  function deleteComment(index: number): void {
    setComments([
      ...comments.slice(0, index),
      ...comments.slice(index + 1, comments.length)
    ]);
  }

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
          if (line.type === 'paragraph') return <p key={line.content}>{line.content}</p>
          else if (line.type === 'link') return <p key={line.content}><a href="#">{line.content}</a></p>
        })}
      </div>

      <form onSubmit={handleAddComment} className={styles.commentForm}>
        <strong>
          Leave your feedbacks
        </strong>

        <textarea
          placeholder='leave a comment'
          onChange={e => setNewCommentText(e.target.value)}
        />

        <footer>
          <button type='submit'>
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              deleteComment={deleteComment}
              commentIndex={index}
            />
          )
        })}
      </div>
    </article>
  )
}
