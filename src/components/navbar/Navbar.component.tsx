import React, {FC} from 'react'
import {Link} from 'react-router-dom'

import {Conteiner} from './Navbar.styles'

const Navbar: FC = () => (
  <Conteiner>
    <Link to="/posts">Список постов</Link>
    <Link to="/users">Список пользователей</Link>
  </Conteiner>
)

export default Navbar
