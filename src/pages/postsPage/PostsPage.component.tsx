import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'

import List from '../../components/list/List.component'
import {IPost} from '../../types/types'
import PostItem from '../../components/post/PostItem.component'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'

const PostsPage = () => {
  const {posts, loading, error} = useTypedSelector((state) => state.posts)
  const {fetchPosts} = useActions()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <List
        items={posts}
        renderItem={(post: IPost) => (
          <PostItem
            onClick={() => navigate(`/posts/${post.id}`)}
            post={post}
            key={post.id}
          />
        )}
      />
    </div>
  )
}

export default PostsPage
