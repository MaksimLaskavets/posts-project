import React, {FC, useEffect} from 'react'
import {useNavigate} from 'react-router'

import {LoadingOutlined} from '@ant-design/icons'
import List from '../../components/list/List.component'
import UserItem from '../../components/user/userItem/UserItem.component'
import {IUser} from '../../types/types'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {Wrap} from './UsersPage.styles'

const UsersPage: FC = () => {
  const {users, loading, error} = useTypedSelector((state) => state.users)
  const {fetchUsers} = useActions()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return (
      <div>
        Loading
        <LoadingOutlined />
      </div>
    )
  }
  if (error) {
    return <h1>Error</h1>
  }

  return (
    <Wrap>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            onClick={() => navigate(`/users/${user.id}`)}
            user={user}
            key={user.id}
          />
        )}
      />
    </Wrap>
  )
}

export default UsersPage
