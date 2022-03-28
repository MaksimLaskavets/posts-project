import axios from 'axios'
import {Dispatch} from 'react'

import {PostsAction, PostsActionTypes} from '../../types/posts'
import {IPost} from '../../types/types'

export function fetchUsersPosts(id: string | undefined) {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({type: PostsActionTypes.FETCH_POSTS})
      const response = await axios.get<IPost[]>(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`,
      )
      setTimeout(() => {
        dispatch({
          type: PostsActionTypes.FETCH_POSTS_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (error) {
      dispatch({type: PostsActionTypes.FETCH_POSTS_ERROR, payload: 'Error'})
    }
  }
}
