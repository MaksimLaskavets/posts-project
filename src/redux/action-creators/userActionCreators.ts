import axios from 'axios'
import {Dispatch} from 'react'

import {IUser} from '../../types/types'
import {UserAction, UserActionTypes} from '../../types/user'

export function fetchUser(id: string | undefined) {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USER})
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      )
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USER_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (error) {
      dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: 'Error'})
    }
  }
}
