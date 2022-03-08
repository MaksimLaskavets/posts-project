import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PostsPage from './pages/postsPage/PostsPage.component'
import UsersPage from './pages/usersPage/UsersPage.component'
import UserItemPage from './pages/userItemPage/UserItemPage.component'
import Navbar from './components/navbar/Navbar.component'

const App = () => (
  <div>
    <div>
      <Navbar />
    </div>
    <Routes>
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserItemPage />} />
    </Routes>
  </div>
)

export default App
