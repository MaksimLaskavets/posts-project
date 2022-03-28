import {UserAction, UserActionTypes, UserState} from '../../types/user'

const initialState: UserState = {
  user: undefined,
  loadingUser: false,
  errorUser: null,
}

export const userReducer = (
  state = initialState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return {
        loadingUser: true,
        errorUser: null,
        user: undefined,
      }
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        loadingUser: false,
        errorUser: null,
        user: action.payload,
      }
    case UserActionTypes.FETCH_USER_ERROR:
      return {
        loadingUser: false,
        errorUser: action.payload,
        user: undefined,
      }
    default:
      return state
  }
}
