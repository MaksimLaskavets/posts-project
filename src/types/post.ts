export interface PostState {
  post: {
    id: string
    body: string
    title: string
  }
  loading: boolean
  error: null | string
}

export enum PostActionTypes {
  FETCH_POST = 'FETCH_POST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  FETCH_POST_ERROR = 'FETCH_POST_ERROR',
}

export interface PostPageParams {
  id: string
}

interface FetchPostAction {
  type: PostActionTypes.FETCH_POST
}

interface FetchPostSuccessAction {
  type: PostActionTypes.FETCH_POST_SUCCESS
  payload: {id: string; body: string; title: string}
}

interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POST_ERROR
  payload: string
}

export type PostAction =
  | FetchPostAction
  | FetchPostSuccessAction
  | FetchPostErrorAction
