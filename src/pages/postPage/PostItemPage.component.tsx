import React, {FC, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router'
import axios from 'axios'

import List from '../../components/list/List.component'
import {IPost} from '../../types/types'

interface PostPageParams {
  id: string
}

const PostItemPage: FC = () => {
  const [post, setPost] = useState<IPost | null>(null)
  const paramsPost = useParams<keyof PostPageParams>() as PostPageParams
  const navigate = useNavigate()

  useEffect(() => {
    fetchPost()
  }, [])

  async function fetchPost() {
    try {
      const response = await axios.get<IPost>(
        `https://jsonplaceholder.typicode.com/posts/${paramsPost.id}`,
      )
      setPost(response.data)
      console.log(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/posts')} type="button">
        Назад
      </button>
      <div>
        <h1>
          Post № {post?.id}. {post?.title}
        </h1>
        <h2>{post?.body}</h2>
      </div>
    </div>
  )
}

export default PostItemPage
