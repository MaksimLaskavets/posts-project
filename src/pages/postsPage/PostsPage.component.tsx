import React, {useEffect, useState} from 'react'
import axios from 'axios'

import List from '../../components/list/List.component'
import {IPost} from '../../types/types'
import PostItem from '../../components/post/PostItem.component'

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const response = await axios.get<IPost[]>(
        'https://jsonplaceholder.typicode.com/posts',
      )
      setPosts(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <List
        items={posts}
        renderItem={(post: IPost) => <PostItem post={post} key={post.id} />}
      />
    </div>
  )
}

export default PostsPage