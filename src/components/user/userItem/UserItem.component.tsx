import React, {FC} from 'react'
import {IUser} from '../../../types/types'
import {UserConteiner, UserLine} from './UserItem.styles'

interface PostProps {
  user: IUser
  onClick: (user: IUser) => void
}

const UserItem: FC<PostProps> = ({user, onClick}) => (
  <UserConteiner>
    <UserLine onClick={() => onClick(user)}>
      {user.id}. {user.name}
    </UserLine>
  </UserConteiner>
)

export default UserItem
