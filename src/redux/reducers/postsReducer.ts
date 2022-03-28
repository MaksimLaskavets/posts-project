import {PostsAction, PostsActionTypes, PostsState} from '../../types/posts'

const initialState: PostsState = {
  posts: [],
  loadingPosts: false,
  errorPosts: null,
}

export const postsReducer = (
  state = initialState,
  action: PostsAction,
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return {loadingPosts: true, errorPosts: null, posts: []}
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {loadingPosts: false, errorPosts: null, posts: action.payload}
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return {loadingPosts: false, errorPosts: action.payload, posts: []}
    default:
      return state
  }
}
