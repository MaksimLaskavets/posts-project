import React, {FC, useEffect} from 'react'
import {useNavigate} from 'react-router'

import {useDispatch} from 'react-redux'
import List from '../../components/list/List.component'
import UserItem from '../../components/user/userItem/UserItem.component'
import {IUser} from '../../types/types'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {fetchUsers} from '../../redux/action-creators/user'

const UsersPage: FC = () => {
  const {users, loading, error} = useTypedSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUsers())
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
