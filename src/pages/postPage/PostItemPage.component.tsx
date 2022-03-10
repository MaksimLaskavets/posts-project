import React, {FC, useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router'
import axios from 'axios'

import List from '../../components/list/List.component'
import CommentItem from '../../components/comment/CommentItem.component'
import {IPost, IComment} from '../../types/types'

interface PostPageParams {
  id: string
}

const PostItemPage: FC = () => {
  const [post, setPost] = useState<IPost | null>(null)
  const [comments, setComments] = useState<IComment[]>([])
  const paramsPost = useParams<keyof PostPageParams>() as PostPageParams
  const navigate = useNavigate()

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [])

  async function fetchPost() {
    try {
      const response = await axios.get<IPost>(
        `https://jsonplaceholder.typicode.com/posts/${paramsPost.id}`,
      )
      setPost(response.data)
    } catch (e) {
      alert(e)
    }
  }

  async function fetchComments() {
    try {
      const response = await axios.get<IComment[]>(
        `https://jsonplaceholder.typicode.com/posts/${paramsPost.id}/comments`,
      )
      setComments(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/')} type="button">
        Назад
      </button>
      <div>
        <h1>
          Post № {post?.id}. {post?.title}
        </h1>
        <h2>{post?.body}</h2>
      </div>
      <List
        items={comments}
        renderItem={(comment: IComment) => (
          <CommentItem comment={comment} key={comment.id} />
        )}
      />
    </div>
  )
}

export default PostItemPage
