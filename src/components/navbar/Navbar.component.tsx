import React, {FC} from 'react'
import {Link} from 'react-router-dom'

import {Conteiner} from './Navbar.styles'

const Navbar: FC = () => (
  <Conteiner>
    <Link to="/users">Users list</Link>
    <Link to="/">Posts list</Link>
  </Conteiner>
)

export default Navbar
