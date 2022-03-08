import React, {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'

import List from '../../components/list/List.component'
import UserItem from '../../components/user/userItem/UserItem.component'
import {IUser} from '../../types/types'

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users',
      )
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
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
