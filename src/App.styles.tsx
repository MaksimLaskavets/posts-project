import styled, {createGlobalStyle} from 'styled-components'

export const NavbarWrap = styled.div`
  position: sticky;
  top: 0px;
`

export const Global = createGlobalStyle`
a {
	text-decoration: none;
	color: black;
}
a:hover{
	color:white;
}
*{
	padding:0;
	margin:0;
	box-sizing:border-box;
	font-family:sans-serif;
}`

export const IconeProfile = styled.p`
  .gg-profile,
  .gg-profile::after,
  .gg-profile::before {
    display: block;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 100px;
  }
  .gg-profile {
    overflow: hidden;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    position: relative;
  }
  .gg-profile::after,
  .gg-profile::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 5px;
    width: 8px;
    height: 8px;
  }
  .gg-profile::after {
    border-radius: 200px;
    top: 11px;
    left: 0px;
    width: 18px;
    height: 18px;
  }
`
export const Inline = styled.div`
  display: flex;
  margin: 5px 0px;
`

export const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px 0px;
  background-color: #d9d9d9;
`
