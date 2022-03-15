import {combineReducers} from 'redux'
import {postsReducer} from './reducers/postsReducer'
import {userReducer} from './reducers/userReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
