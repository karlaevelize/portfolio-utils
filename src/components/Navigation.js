import styled from "styled-components"
import { useState } from "react"

export default function Navigation(){ 

  const [ open, setOpen ] = useState(false)

  return(
    <Nav>
      <Logo href="/">
        Portfolio<span>utils</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span/>
        <span/>
        <span/>
      </Hamburger>
      <Menu open={open}>
        <MenuLink href="/cloudinary">Cloudinary</MenuLink>
        <MenuLink href="/leaflet">Leaflet</MenuLink>
        <MenuLink href="/styled">Styled Components</MenuLink>
      </Menu>
    </Nav>
  )
}

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #2F2FA2;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: whitesmoke;
  }
`

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #AFD275;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`

const Logo = styled.a`
  padding: 1rem 0;
  color: #2F2FA2;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #2F2FA2;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`


const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({open}) => open ? "300px" : "0"};
    transition: max-height 0.3s ease-in;
  }
`