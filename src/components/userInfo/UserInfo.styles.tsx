import styled from 'styled-components'

export const UserInfoWrap = styled.div`
  width: 80vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  font-size: 18px;
  margin: 0 auto;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkUuR9VyJ7VA7--pi3uEixVwpmLKNX98no1w&usqp=CAU');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 80%;
`
export const Div = styled.div`
  display: flex;
  margin: 5px auto;
`

export const Hover = styled.p`
  transition-duration: 0.4s;
  :hover {
    color: white;
    cursor: pointer;
  }
`
