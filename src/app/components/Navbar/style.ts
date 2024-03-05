import styled from 'styled-components'
import Link from 'next/link'
import { colors } from './../../styles/theme'

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: 0rem 1rem;
`

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
`

export const LogoLink = styled(Link)`
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
  padding: 1rem;
  list-style: none;
  margin: 0;

  @media (min-width: 640px) {
    padding: 0;
  }
`

export const MenuItem = styled.li`
  margin-right: 1rem;
  color: white;

  &:last-child {
    margin-right: 0;
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-top: 1rem;
  align-items: flex-end;
  margin-right: 1rem;
`

export const StyledListItem = styled.li`
  margin-bottom: 1rem;
`

export const StyledLink = styled(Link)`
  color: white;
  font-size: 1rem;

  &:hover {
    color: ${colors.primary};
  }
`
