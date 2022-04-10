import styled from 'styled-components'

export const LoodingWrap = styled.div`
  display: flex;
  margin: 40vh auto;
  height: 100vh;
`
export const Louder = styled.div`
  width: 56px;
  height: 56px;
  border: 11px #fff7e6 double;
  border-left-style: solid;
  border-radius: 50%;
  animation: spinner-aib1d7 0.75s infinite linear;
  @keyframes spinner-aib1d7 {
    to {
      transform: rotate(360deg);
    }
  }
`
export const Div = styled.div`
  display: flex;
  margin: 10px;
  color: #fff7e6;
  font-size: 30px;
`
