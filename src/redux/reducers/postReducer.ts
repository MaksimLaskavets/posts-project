import {PostAction, PostActionTypes, PostState} from '../../types/post'

const initialState: PostState = {
  post: undefined,
  loadingPost: false,
  errorPost: null,
}

export const postReducer = (
  state = initialState,
  action: PostAction,
): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POST:
      return {
        loadingPost: true,
        errorPost: null,
        post: undefined,
      }
    case PostActionTypes.FETCH_POST_SUCCESS:
      return {
        loadingPost: false,
        errorPost: null,
        post: action.payload,
      }
    case PostActionTypes.FETCH_POST_ERROR:
      return {
        loadingPost: false,
        errorPost: action.payload,
        post: undefined,
      }
    default:
      return state
  }
}
