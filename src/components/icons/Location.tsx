import React from 'react'
import styled from 'styled-components'

const StyledLocation = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(45deg) scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border-radius: 100% 100% 0 100%;
    border: 2px solid;
    margin-top: -4px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid;
    top: 3px;
    left: 3px;
    border-radius: 40px;
  }
`
const Location = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => <StyledLocation {...props} ref={ref} icon-role="pin" />)

Location.displayName = 'Location'

export default Location
