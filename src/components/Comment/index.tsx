import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import Avatar from '../Avatar/Avatar'
import styles from './Comment.module.css'

type CommentTypes = {
  comment: string;
  id: number;
}

interface CommentProps {
  comment: CommentTypes;
  deleteComment: (index: number) => void
  commentIndex: number
}

export function Comment({ comment, deleteComment, commentIndex }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/diebraga.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>

              <strong>Diego Braga</strong>
              <time title="11 de maio às 08h00" dateTime='2022-06-22 12:00:00'>
                Published 2hrs ago.
              </time>

            </div>

            <button title='Delete comment' onClick={() => deleteComment(commentIndex)}>
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.comment}</p>
        </div>

        <footer>
          <button onClick={() => setLikeCount(prev => prev + 1)}>
            <ThumbsUp size={20} />
            Likes <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
