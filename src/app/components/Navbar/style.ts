import styled from 'styled-components'
import Link from 'next/link'
import { colors } from './../../styles/theme'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 64px;

  z-index: 1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  background: black;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
  width: 100%;
  max-width: 75rem;
`

export const MenuList = styled.ul`
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
    display: flex;
    align-items: center;
    padding: 1rem;
    list-style: none;
    margin: 0;
  }

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

export const StyledLink = styled(Link)`
  color: white;
  font-size: 1rem;

  &:hover {
    color: ${colors.primary};
  }
`

export const MobileMenuButton = styled.div`
  display: block;
  padding: 6px;
  color: ${colors.white};

  &:hover {
    color: ${colors.primary};
  }

  /* hide on larger screens */
  @media screen and (min-width: 500px) {
    display: none;
  }
`

export const SideNav = styled.div<{ show: boolean }>`
  background: black;

  display: block;
  width: 12rem;
  transition: right 400ms ease-in-out;

  /* set it on the side */
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${(p) => (p.show ? `0` : `-100%`)};

  /* hide on larger screens */
  @media screen and (min-width: 600px) {
    display: none;
  }

  & > li {
    display: flex;
    justify-content: end;
    margin: 3rem;
  }

  & > div {
    display: flex;
    justify-content: end;
    margin: 2rem;
  }
`

export const MobileMenu = styled.div`
  display: block;

  @media (min-width: 640px) {
    display: none;
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
  top: 7%;
  right: 0;
  background-color: black;
  z-index: 1;
`

export const StyledListItem = styled.li`
  margin-bottom: 2rem;
`
