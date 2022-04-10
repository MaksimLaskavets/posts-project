import React from 'react'
import {InputConteiner, MyInputWrap} from './MyInput.styles'

export const MyInput = ({...props}) => (
  <MyInputWrap>
    <InputConteiner {...props} />
  </MyInputWrap>
)
