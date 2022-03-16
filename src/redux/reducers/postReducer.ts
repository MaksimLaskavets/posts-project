import {PostAction, PostActionTypes, PostState} from '../../types/post'

const initialState: PostState = {
  post: {id: null, body: null, title: null},
  loading: false,
  error: null,
}

export const postReducer = (
  state = initialState,
  action: PostAction,
): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POST:
      return {
        loading: true,
        error: null,
        post: {id: null, body: null, title: null},
      }
    case PostActionTypes.FETCH_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        post: {id: action.payload, body: action.payload, title: action.payload},
      }
    case PostActionTypes.FETCH_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        post: {id: null, body: null, title: null},
      }
    default:
      return state
  }
}
