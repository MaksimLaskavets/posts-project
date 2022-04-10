import {HeartOutlined} from '@ant-design/icons'
import React, {FC} from 'react'

import {IComment} from '../../types/types'
import Profile from '../icons/Profile'

import {
  CommentBody,
  CommentConteiner,
  CommentLine,
  Hover,
} from './Comment.styles'

interface PostProps {
  comment: IComment
}

const CommentItem: FC<PostProps> = ({comment}) => (
  <CommentConteiner>
    <CommentLine>
      <Hover>
        <Profile />
      </Hover>
      {comment.email}
    </CommentLine>
    <CommentLine>{comment.name.toUpperCase()}</CommentLine>
    <CommentBody>{comment.body}</CommentBody>
    <CommentLine>
      <Hover>
        <HeartOutlined />
      </Hover>
    </CommentLine>
  </CommentConteiner>
)

export default CommentItem
