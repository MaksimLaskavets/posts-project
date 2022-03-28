import * as UsersActionCreators from './usersActionCreators'
import * as PostActionCreators from './postActionCreators'
import * as CommentsActionCreators from './commentsActionCreators'
import * as UserPostsActionCreators from './userPostsActionCreators'
import * as UserActionCreators from './userActionCreators'

export default {
  ...CommentsActionCreators,
  ...PostActionCreators,
  ...UsersActionCreators,
  ...UserPostsActionCreators,
  ...UserActionCreators,
}
