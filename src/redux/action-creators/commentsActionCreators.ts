import axios from 'axios'
import {Dispatch} from 'react'

import {CommentsAction, CommentsActionTypes} from '../../types/comments'

export function fetchComments(id: string | undefined) {
  return async (dispatch: Dispatch<CommentsAction>) => {
    try {
      dispatch({type: CommentsActionTypes.FETCH_COMMENTS})
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      )
      setTimeout(() => {
        dispatch({
          type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (error) {
      dispatch({
        type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
        payload: 'Error',
      })
    }
  }
}
