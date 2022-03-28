import {
  CommentsState,
  CommentsActionTypes,
  CommentsAction,
} from '../../types/comments'

const initialState: CommentsState = {
  comments: [],
  loadingComments: false,
  errorComments: null,
}

export const commentsReducer = (
  state = initialState,
  action: CommentsAction,
): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.FETCH_COMMENTS:
      return {loadingComments: true, errorComments: null, comments: []}
    case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        loadingComments: false,
        errorComments: null,
        comments: action.payload,
      }
    case CommentsActionTypes.FETCH_COMMENTS_ERROR:
      return {
        loadingComments: false,
        errorComments: action.payload,
        comments: [],
      }
    default:
      return state
  }
}
