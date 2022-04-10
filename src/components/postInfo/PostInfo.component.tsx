import React, {FC} from 'react'

import {Post} from '../../types/post'

import {BodyDiv, TitleDiv, PostInfoWrap} from './PostInfo.styles'

interface PostProps {
  post: Post
}

const PostInfo: FC<PostProps> = ({post}) => (
  <PostInfoWrap>
    <TitleDiv>{post.title}</TitleDiv>
    <BodyDiv>{post.body}</BodyDiv>
  </PostInfoWrap>
)

export default PostInfo
