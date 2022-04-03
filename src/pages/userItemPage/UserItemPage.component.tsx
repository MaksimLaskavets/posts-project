import React, {FC, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router'

import {LoadingOutlined} from '@ant-design/icons'
import {IPost} from '../../types/types'
import List from '../../components/list/List.component'
import PostItem from '../../components/post/PostItem.component'
import {UserItemPageParams} from '../../types/users'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import UserInfo from '../../components/userInfo/UserInfo.component'
import {MyButton} from '../../components/button/Button.component'

const UserItemPage: FC = () => {
  const {user, loadingUser, errorUser} = useTypedSelector((state) => state.user)
  const {posts, loadingPosts, errorPosts} = useTypedSelector(
    (state) => state.posts,
  )
  const {fetchUsersPosts, fetchUser} = useActions()
  const {id} = useParams<UserItemPageParams>()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser(id)
    fetchUsersPosts(id)
  }, [])

  if (loadingUser || loadingPosts || !user) {
    return (
      <div>
        Loading
        <LoadingOutlined />
      </div>
    )
  }
  if (errorUser || errorPosts) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <MyButton />
      <UserInfo user={user} />
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

export default UserItemPage
