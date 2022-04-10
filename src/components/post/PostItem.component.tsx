import React, {FC} from 'react'

import {IPost} from '../../types/types'

import {PostConteiner, PostLine} from './Post.styles'

interface PostProps {
  post: IPost
  onClick: (post: IPost) => void
}

const PostItem: FC<PostProps> = ({post, onClick}) => (
  <PostConteiner onClick={() => onClick(post)}>
    <PostLine>
      {post.id}. {post.title.toUpperCase()}
    </PostLine>
    <PostLine>{post.body}</PostLine>
  </PostConteiner>
)

export default PostItem
