import axios from 'axios'
import {Dispatch} from 'react'
import {PostsAction, PostsActionTypes} from '../../types/posts'
import {UserAction, UserActionTypes} from '../../types/user'

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

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({type: UserActionTypes.FETCH_USERS})
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    )
    setTimeout(() => {
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    }, 1000)
  } catch (error) {
    dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error'})
  }
}
