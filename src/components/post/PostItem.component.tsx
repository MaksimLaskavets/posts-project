import React, {FC} from 'react'
import {IPost} from '../../types/types'
import {PostConteiner, PostLine} from './Post.styles'

interface PostProps {
  post: IPost
}

const PostItem: FC<PostProps> = ({post}) => (
  <PostConteiner>
    <PostLine>
      {post.id}. {post.title.toUpperCase()}
    </PostLine>
    <PostLine>{post.body}</PostLine>
  </PostConteiner>
)

export default PostItem
