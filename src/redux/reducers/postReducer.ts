import {PostAction, PostActionTypes, PostState} from '../../types/post'

const initialState: PostState = {
  post: {id: '', body: '', title: ''},
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
        post: {id: '', body: '', title: ''},
      }
    case PostActionTypes.FETCH_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        post: action.payload,
      }
    case PostActionTypes.FETCH_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        post: {id: '', body: '', title: ''},
      }
    default:
      return state
  }
}
