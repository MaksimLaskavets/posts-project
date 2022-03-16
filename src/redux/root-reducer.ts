import {combineReducers} from 'redux'
import {postReducer} from './reducers/postReducer'
import {postsReducer} from './reducers/postsReducer'
import {userReducer} from './reducers/userReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  post: postReducer,
})

export type RootState = ReturnType<typeof rootReducer>
