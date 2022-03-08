import React, {FC, useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router'

import {IUser} from '../../types/types'

interface UserItemPageParams {
  id: string
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<keyof UserItemPageParams>() as UserItemPageParams
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`,
      )
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/users')} type="button">
        Назад
      </button>
      <div>
        <h1>User {user?.name}</h1>
        Living in {user?.address.city} {user?.address.street}
      </div>
      <div>Email address - {user?.email}</div>
    </div>
  )
}

export default UserItemPage
