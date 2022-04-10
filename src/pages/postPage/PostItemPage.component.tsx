import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import List from '../../components/list/List.component'
import CommentItem from '../../components/comment/CommentItem.component'
import {IComment} from '../../types/types'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {PostPageParams} from '../../types/post'
import PostInfo from '../../components/postInfo/PostInfo.component'
import {MyButton} from '../../components/button/Button.component'

import {PostPageWrap} from './PostPage.styles'
import {MyLoading} from '../../components/loading/MyLoading.component'

const PostItemPage: FC = () => {
  const {post, loadingPost, errorPost} = useTypedSelector((state) => state.post)
  const {comments, loadingComments, errorComments} = useTypedSelector(
    (state) => state.comments,
  )
  const {fetchPost, fetchComments} = useActions()
  const {id} = useParams<PostPageParams>()

  useEffect(() => {
    fetchPost(id)
    fetchComments(id)
  }, [])

  if (loadingPost || loadingComments || !post) {
    return <MyLoading />
  }
  if (errorPost || errorComments) {
    return <h1>Error</h1>
  }

  return (
    <PostPageWrap>
      <MyButton />
      <PostInfo post={post} />
      <List
        items={comments}
        renderItem={(comment: IComment) => (
          <CommentItem comment={comment} key={comment.id} />
        )}
      />
    </PostPageWrap>
  )
}

export default PostItemPage
