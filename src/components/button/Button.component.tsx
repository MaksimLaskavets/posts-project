import React from 'react'
import {useNavigate} from 'react-router'
import {Button, ButtonWrap} from './Button.styles'

export const MyButton = () => {
  const navigate = useNavigate()
  return (
    <ButtonWrap>
      <Button onClick={() => navigate('/users')} type="button">
        &#11013; Back
      </Button>
    </ButtonWrap>
  )
}
