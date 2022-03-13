import React, {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router'

import {IUser, IPost} from '../../types/types'
import List from '../../components/list/List.component'
import PostItem from '../../components/post/PostItem.component'

interface UserItemPageParams {
  id: string
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const [posts, setPosts] = useState<IPost[]>([])
  const paramsUser = useParams<keyof UserItemPageParams>() as UserItemPageParams
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const response = await axios.get<IPost[]>(
        `https://jsonplaceholder.typicode.com/users/${paramsUser.id}/posts`,
      )
      setPosts(response.data)
    } catch (e) {
      alert(e)
    }
  }

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${paramsUser.id}`,
      )
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
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
