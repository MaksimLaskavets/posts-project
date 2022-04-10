import React, {FC} from 'react'
import {MyInput} from '../../components/input/MyInput'
import {
  ButtonsContainer,
  SignInButton,
  SignInTitle,
  SignInWrap,
} from './SignIn.styles'

const SignIn: FC = () => (
  <SignInWrap>
    <SignInTitle>SIGN IN</SignInTitle>
    <form>
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
        <SignInButton type="submit"> Sign in </SignInButton>
        <SignInButton type="button">Sign in with Google</SignInButton>
      </ButtonsContainer>
    </form>
  </SignInWrap>
)

export default SignIn
