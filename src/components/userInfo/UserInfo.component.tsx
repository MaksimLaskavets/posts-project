import {MailOutlined} from '@ant-design/icons'
import React, {FC} from 'react'
import {Inline} from '../../App.styles'
import {IUser} from '../../types/types'
import Location from '../icons/Location'
import Profile from '../icons/Profile'
import {Hover, UserInfoWrap} from './UserInfo.styles'

interface PostProps {
  user: IUser
}

const UserInfo: FC<PostProps> = ({user}) => (
  <UserInfoWrap>
    <Inline>
      <Hover>
        <Profile />
      </Hover>{' '}
      <div>{user?.name}</div>
    </Inline>
    <Inline>
      <Hover>
        <Location />
      </Hover>{' '}
      {user?.address.city} {user?.address.street}
    </Inline>
    <Inline>
      <Hover>
        <MailOutlined />
      </Hover>
      {user?.email}
    </Inline>
    <Inline>Posts of {user?.name}:</Inline>
  </UserInfoWrap>
)

export default UserInfo
