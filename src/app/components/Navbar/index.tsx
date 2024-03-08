import React, { useEffect, useState, useRef } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import {
  Container,
  Content,
  MenuItem,
  MenuList,
  MobileMenuButton,
  SideNav,
  StyledLink,
  StyledList,
  StyledListItem,
} from './style'
import Button from '../Button'
import Logo from '../Logo'
import { Text } from '@/app/styles/global-style'

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

export default function NavbarCopy() {
  const [showSideNav, setShowSideNav] = useState(false)
  const sideNavRef = useRef<HTMLDivElement>(null)

  const toggleSideNav = () => setShowSideNav((prevState) => !prevState)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) {
        setShowSideNav(false)
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        setShowSideNav(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Container>
      <Content>
        <Logo />
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
        <MobileMenuButton onClick={toggleSideNav}>
          <FaBars size='1.25rem' />
        </MobileMenuButton>
      </Content>

      <SideNav show={showSideNav} ref={sideNavRef}>
        <MobileMenuButton onClick={toggleSideNav}>
          <FaXmark size='1.25rem' />
        </MobileMenuButton>
        {navLinks.map((link, index) => (
          <StyledListItem key={index} onClick={toggleSideNav}>
            <StyledLink href={link.path}>
              <Text color='white' $lineHeight={0.5}>
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
      </SideNav>
    </Container>
  )
}
