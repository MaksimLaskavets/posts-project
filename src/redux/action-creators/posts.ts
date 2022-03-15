import axios from 'axios'
import {Dispatch} from 'react'
import {PostsAction, PostsActionTypes} from '../../types/posts'

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
    }, 1000)
  } catch (error) {
    dispatch({type: PostsActionTypes.FETCH_POSTS_ERROR, payload: 'Error'})
  }
}
