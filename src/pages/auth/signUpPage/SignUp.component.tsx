import React, {FC} from 'react'
import {MyInput} from '../../../components/input/MyInput'

import {ButtonsContainer, SignUpButton, SignUpWrap} from './SignUp.styles'

const SignUp: FC = () => (
  <SignUpWrap>
    <form>
      <MyInput
        name="name"
        type="name"
        label="name"
        placeholder="Name"
        required
      />
      <MyInput
        name="userName"
        type="userName"
        label="userName"
        placeholder="UserName"
        required
      />
      <MyInput
        name="email"
        type="email"
        label="email"
        placeholder="Email"
        required
      />
      <MyInput
        name="password"
        type="password"
        label="password"
        placeholder="Password"
        required
      />
      <ButtonsContainer>
        <SignUpButton type="submit"> Sign Up </SignUpButton>
      </ButtonsContainer>
    </form>
  </SignUpWrap>
)

export default SignUp
