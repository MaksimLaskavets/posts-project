import React, {useState, FC} from 'react'
import {MyInput} from '../../../components/input/MyInput'

import {ButtonsContainer, SignUpButton, SignUpWrap} from './SignUp.styles'

const SignUp: FC = () => {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event: any) => {
    event.preventDefault()
    console.log(name, userName, email, password)
  }
  return (
    <SignUpWrap>
      <form onSubmit={submitHandler}>
        <MyInput
          name="name"
          type="name"
          label="name"
          placeholder="Name"
          value={name}
          onChange={(event: any) => setName(event.target.value)}
          required
        />
        <MyInput
          name="userName"
          type="userName"
          label="userName"
          placeholder="UserName"
          value={userName}
          onChange={(event: any) => setUserName(event.target.value)}
          required
        />
        <MyInput
          name="email"
          type="email"
          label="email"
          placeholder="Email"
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
          required
        />
        <MyInput
          name="password"
          type="password"
          label="password"
          placeholder="Password"
          value={password}
          onChange={(event: any) => setPassword(event.target.value)}
          required
        />
        <ButtonsContainer>
          <SignUpButton type="submit"> Sign Up </SignUpButton>
        </ButtonsContainer>
      </form>
    </SignUpWrap>
  )
}

export default SignUp
