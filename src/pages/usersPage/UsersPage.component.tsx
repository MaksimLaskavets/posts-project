import React, {FC, useEffect} from 'react'
import {useNavigate} from 'react-router'

import List from '../../components/list/List.component'
import UserItem from '../../components/user/userItem/UserItem.component'
import {IUser} from '../../types/types'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'

const UsersPage: FC = () => {
  const {users, loading, error} = useTypedSelector((state) => state.users)
  const {fetchUsers} = useActions()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error</h1>
  }

  return (
    <div>
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
    </div>
  )
}

export default UsersPage
