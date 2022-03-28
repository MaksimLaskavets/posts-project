import React, {FC, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router'

import {IPost} from '../../types/types'
import List from '../../components/list/List.component'
import PostItem from '../../components/post/PostItem.component'
import {UserItemPageParams} from '../../types/users'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'

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
    return <h1>Loading...</h1>
  }
  if (errorUser || errorPosts) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <button onClick={() => navigate('/users')} type="button">
        &#11013; Back
      </button>
      <div>
        <h1>User {user?.name}</h1>
        Living in {user?.address.city} {user?.address.street}
      </div>
      <div>Email address - {user?.email}</div>
      <h1>Posts of {user?.name}:</h1>
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
