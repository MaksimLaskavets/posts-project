import axios from 'axios'
import {Dispatch} from 'react'

import {UsersAction, UsersActionTypes} from '../../types/users'

export const fetchUsers = () => async (dispatch: Dispatch<UsersAction>) => {
  try {
    dispatch({type: UsersActionTypes.FETCH_USERS})
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    )
    setTimeout(() => {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    }, 500)
  } catch (error) {
    dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Error'})
  }
}
