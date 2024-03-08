'use client'

import React, { useEffect, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import {
  LogoContainer,
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
import { Text } from '../../styles/global-style'
import Button from '../Button'
import Logo from '../Logo'

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Experience',
    path: '#experience',
  },
  {
    title: 'Work',
    path: '#work',
  },
]

const resumePDF =
  'https://github.com/WesleyReboucas/portfolio-wesley-reboucas/blob/b0c3a58f5f613252421bbfdbd286c1969fbc2ab7/public/Wesley-Reboucas-Resume-en.pdf'
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        setNavbarOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
            <Button
              download='Wesley-Reboucas-Resume.pdf'
              link={resumePDF}
              description='Resume'
            />
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
          <Button
            download='Wesley-Reboucas-Resume.pdf'
            link={resumePDF}
            description='Resume'
          />
        </StyledList>
      ) : null}
    </main>
  )
}
