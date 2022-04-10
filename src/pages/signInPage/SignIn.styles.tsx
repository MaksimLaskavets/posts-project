import styled from 'styled-components'

export const SignInWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SignInButton = styled.button`
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.4s;
  color: black;
  border: 2px solid white;
  border-radius: 5px;
  :hover {
    background-color: #ffd591;
    color: white;
  }
`

export const SignInTitle = styled.div`
  font-weight: 600;
  display: flex;
  margin: 5px auto;
`
