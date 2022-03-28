import React, {FC, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import List from '../../components/list/List.component'
import CommentItem from '../../components/comment/CommentItem.component'
import {IComment} from '../../types/types'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {PostPageParams} from '../../types/post'

const PostItemPage: FC = () => {
  const {post, loadingPost, errorPost} = useTypedSelector((state) => state.post)
  const {comments, loadingComments, errorComments} = useTypedSelector(
    (state) => state.comments,
  )
  const {fetchPost, fetchComments} = useActions()
  const navigate = useNavigate()
  const {id} = useParams<PostPageParams>()

  useEffect(() => {
    fetchPost(id)
    fetchComments(id)
  }, [])

  if (loadingPost || loadingComments || !post) {
    return <h1>Loading...</h1>
  }
  if (errorPost || errorComments) {
    return <h1>Error</h1>
  }

  return (
    <div>
      <button onClick={() => navigate('/')} type="button">
        &#11013; Back
      </button>
      <div>
        <h1>
          Post № {id}. {post?.title}
        </h1>
        <h2>{}</h2>
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
