import React, {FC} from 'react'
import {IUser} from '../../../types/types'
import Profile from '../../icons/Profile'
import {Div, UserConteiner, UserLine} from './UserItem.styles'

interface PostProps {
  user: IUser
  onClick: (user: IUser) => void
}

const UserItem: FC<PostProps> = ({user, onClick}) => (
  <UserConteiner>
    <UserLine onClick={() => onClick(user)}>
      <Div>
        <Profile />
      </Div>
      <Div>
        {user.id}. {user.name}
      </Div>
    </UserLine>
  </UserConteiner>
)

export default UserItem
