import axios from 'axios'
import {Dispatch} from 'react'

import {PostsAction, PostsActionTypes} from '../../types/posts'
import {PostAction, PostActionTypes} from '../../types/post'

export const fetchPosts = () => async (dispatch: Dispatch<PostsAction>) => {
  try {
    dispatch({type: PostsActionTypes.FETCH_POSTS})
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
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

export function fetchPost(id: string | undefined) {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({type: PostActionTypes.FETCH_POST})
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      )
      setTimeout(() => {
        dispatch({
          type: PostActionTypes.FETCH_POST_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (error) {
      dispatch({type: PostActionTypes.FETCH_POST_ERROR, payload: 'Error'})
    }
  }
}
