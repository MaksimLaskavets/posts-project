import styled from 'styled-components'

export const SignUpWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const SignUpButton = styled.button`
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
