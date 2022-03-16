// export interface PostInPostState {
//   id: string
//   title: string
//   body: string
// }

export interface PostState {
  post: {
    id: null | string
    body: null | string
    title: null | string
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
  payload: string
}

interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POST_ERROR
  payload: string
}

export type PostAction =
  | FetchPostAction
  | FetchPostSuccessAction
  | FetchPostErrorAction
