import styled from 'styled-components'
import Link from 'next/link'
import { colors } from './../../styles/theme'

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;

  max-width: 100%;
  min-width: 70%;
  padding: 1rem 0rem;

  background-color: black;

  @media (max-width: 940px) {
    min-width: 95%;
  }

  @media (max-width: 540px) {
    padding-right: 0.8rem;
  }
`

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
`

export const MobileMenu = styled.div`
  display: block;

  @media (min-width: 640px) {
    display: none;
  }
`
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`

export const Menu = styled.div`
  display: none;

  @media (min-width: 640px) {
    display: block;
    width: auto;
  }
`

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  padding: 1rem;
  list-style: none;
  margin: 0;

  & Button {
    margin-left: 2.5rem;
  }

  @media (min-width: 640px) {
    padding: 0;
  }
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  color: white;

  & > * {
    margin-left: 2rem;
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  align-items: flex-end;
  margin-right: 1rem;
  position: fixed;
  top: 5%;
  right: 0;
  background-color: black;
  z-index: 1;
`

export const StyledListItem = styled.li`
  margin-bottom: 2rem;
`

export const StyledLink = styled(Link)`
  color: white;
  font-size: 1rem;

  &:hover {
    color: ${colors.primary};
  }
`
