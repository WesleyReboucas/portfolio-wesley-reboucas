'use client'

import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import {
  LogoContainer,
  LogoLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MobileMenu,
  NavbarContent,
  StyledLink,
  StyledList,
  StyledListItem,
} from './style'
import { Subtitle, Text } from '../../styles/global-style'
import Button from '../Button'
import Image from 'next/image'
import Logo from '../Logo'

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Experiences',
    path: '#experiences',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
]

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleLinkClick = () => {
    setNavbarOpen(false)
  }

  return (
    <main>
      <NavbarContent>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <MobileMenu>
          <MenuButton onClick={() => setNavbarOpen(!navbarOpen)}>
            {navbarOpen ? (
              <FaXmark size='1.25rem' />
            ) : (
              <FaBars size='1.25rem' />
            )}
          </MenuButton>
        </MobileMenu>
        <Menu>
          <MenuList>
            {navLinks.map((link, index) => (
              <MenuItem key={index}>
                <StyledLink href={link.path}>{link.title}</StyledLink>
              </MenuItem>
            ))}
            <Button description='Resume' />
          </MenuList>
        </Menu>
      </NavbarContent>
      {navbarOpen ? (
        <StyledList>
          {navLinks.map((link, index) => (
            <StyledListItem key={index}>
              <StyledLink href={link.path} onClick={handleLinkClick}>
                <Text color='white' lineHeight={0.5}>
                  {link.title}
                </Text>
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      ) : null}
    </main>
  )
}
