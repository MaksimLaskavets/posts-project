import * as UserActionCreators from './userActionCreators'
import * as PostActionCreators from './postActionCreators'
import * as CommentsActionCreators from './commentsActionCreators'

export default {
  ...CommentsActionCreators,
  ...PostActionCreators,
  ...UserActionCreators,
}
