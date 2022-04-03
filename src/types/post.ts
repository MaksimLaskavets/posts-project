export type Post = {
  title: string
  body: string
}
export interface PostState {
  post: undefined | Post
  loadingPost: boolean
  errorPost: null | string
}

export enum PostActionTypes {
  FETCH_POST = 'FETCH_POST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  FETCH_POST_ERROR = 'FETCH_POST_ERROR',
}

export type PostPageParams = {
  id: string
}
interface FetchPostAction {
  type: PostActionTypes.FETCH_POST
}

interface FetchPostSuccessAction {
  type: PostActionTypes.FETCH_POST_SUCCESS
  payload: Post
}

interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POST_ERROR
  payload: string
}

export type PostAction =
  | FetchPostAction
  | FetchPostSuccessAction
  | FetchPostErrorAction
