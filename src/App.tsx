import React from 'react'
import {Routes, Route} from 'react-router-dom'

import PostsPage from './pages/postsPage/PostsPage.component'
import UsersPage from './pages/usersPage/UsersPage.component'
import UserItemPage from './pages/userItemPage/UserItemPage.component'
import PostItemPage from './pages/postPage/PostItemPage.component'
import SignIn from './pages/signInPage/SignIn.component'
import Navbar from './components/navbar/Navbar.component'

import {AppWrap, NavbarWrap} from './App.styles'

const App = () => (
  <AppWrap>
    <NavbarWrap>
      <Navbar />
    </NavbarWrap>
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserItemPage />} />
      <Route path="/posts/:id" element={<PostItemPage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </AppWrap>
)

export default App
