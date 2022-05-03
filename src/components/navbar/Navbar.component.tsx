import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {MyLogo} from '../Logo/MyLogo.component'

import {Conteiner, LinksWrap, LogoWrap} from './Navbar.styles'

const Navbar: FC = () => (
  <Conteiner>
    <LinksWrap>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </LinksWrap>
    {/* <LogoWrap>
      <MyLogo />
    </LogoWrap> */}
    <LinksWrap>
      <Link to="/users">Users list</Link>
      <Link to="/">Posts list</Link>
    </LinksWrap>
  </Conteiner>
)

export default Navbar
