import axios from 'axios'
import {Dispatch} from 'react'
import {useParams} from 'react-router'
import {PostsAction, PostsActionTypes} from '../../types/posts'
import {UserAction, UserActionTypes} from '../../types/user'
import {PostPageParams, PostAction, PostActionTypes} from '../../types/post'

const paramsPost = useParams<keyof PostPageParams>() as PostPageParams

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

export const fetchPost = () => async (dispatch: Dispatch<PostAction>) => {
  try {
    dispatch({type: PostActionTypes.FETCH_POST})
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${paramsPost.id}`,
    )
    setTimeout(() => {
      dispatch({
        type: PostActionTypes.FETCH_POST_SUCCESS,
        payload: response.data,
      })
    }, 1000)
  } catch (error) {
    dispatch({type: PostActionTypes.FETCH_POST_ERROR, payload: 'Error'})
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
