import React, {FC} from 'react'
import {IComment} from '../../types/types'
import {CommentConteiner, CommentLine} from './Comment.styles'

interface PostProps {
  comment: IComment
}

const CommentItem: FC<PostProps> = ({comment}) => (
  <CommentConteiner>
    <CommentLine>
      {comment.name.toUpperCase()} from {comment.email}
    </CommentLine>
    <CommentLine>{comment.body}</CommentLine>
  </CommentConteiner>
)

export default CommentItem
