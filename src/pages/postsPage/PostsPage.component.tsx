import React, {useEffect} from 'react'
import {useNavigate} from 'react-router'

import {LoadingOutlined} from '@ant-design/icons'
import List from '../../components/list/List.component'
import {IPost} from '../../types/types'
import PostItem from '../../components/post/PostItem.component'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {MyInput} from '../../components/input/MyInput'

import {Input} from './PostsPage.styles'

const PostsPage = () => {
  const {posts, loadingPosts, errorPosts} = useTypedSelector(
    (state) => state.posts,
  )
  const {fetchPosts} = useActions()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPosts()
  }, [])

  if (loadingPosts) {
    return (
      <div>
        Loading
        <LoadingOutlined />
      </div>
    )
  }
  if (errorPosts) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <Input>
        Search <MyInput />
      </Input>
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
