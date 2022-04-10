import {MailOutlined} from '@ant-design/icons'
import React, {FC} from 'react'

import {IUser} from '../../types/types'
import Location from '../icons/Location'
import Profile from '../icons/Profile'

import {Div, Hover, UserInfoWrap} from './UserInfo.styles'
import {Inline} from '../../App.styles'

interface PostProps {
  user: IUser
}

const UserInfo: FC<PostProps> = ({user}) => (
  <UserInfoWrap>
    <Div>
      <Hover>
        <Profile />
      </Hover>
      <div>{user?.name}</div>
    </Div>
    <Div>
      <Hover>
        <Location />
      </Hover>
      {user?.address.city} {user?.address.street}
    </Div>
    <Div>
      <Hover>
        <MailOutlined />
      </Hover>
      {user?.email}
    </Div>
    <Div>Posts of {user?.name}:</Div>
  </UserInfoWrap>
)

export default UserInfo
