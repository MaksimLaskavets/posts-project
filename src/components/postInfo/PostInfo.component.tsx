import React, {FC} from 'react'
import {useParams} from 'react-router'

import {Post, PostPageParams} from '../../types/post'
import {BodyDiv, TitleDiv, PostInfoWrap} from './PostInfo.styles'

interface PostProps {
  post: Post
}

const PostInfo: FC<PostProps> = ({post}) => {
  const {id} = useParams<PostPageParams>()
  return (
    <PostInfoWrap>
      <TitleDiv>
        {id}. {post.title}
      </TitleDiv>
      <BodyDiv>{post.body}</BodyDiv>
    </PostInfoWrap>
  )
}

export default PostInfo
