import React, {FC} from 'react'
import {IPost} from '../../types/types'
import PostItem from '../post/PostItem.component'
import {PostsListConteiner} from './PostsLists.styles'

interface PostsListProps {
  posts: IPost[]
}

const PostsList: FC<PostsListProps> = ({posts}) => (
  <PostsListConteiner>
    {posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))}
  </PostsListConteiner>
)

export default PostsList
