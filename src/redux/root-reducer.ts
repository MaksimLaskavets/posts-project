import {combineReducers} from 'redux'
import {commentsReducer} from './reducers/commentsReducer'
import {postReducer} from './reducers/postReducer'
import {postsReducer} from './reducers/postsReducer'
import {userReducer} from './reducers/userReducer'
import {usersReducer} from './reducers/usersReducer'

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
