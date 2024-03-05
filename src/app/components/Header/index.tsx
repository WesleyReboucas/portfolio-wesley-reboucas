'use client'

import React from 'react'
import {
  Container,
  Profile,
  Resume,
  SocialButtonContainer,
  TitleContainer,
} from './style'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

export default function Header() {
  return (
    <Container>
      <Resume>
        <TitleContainer>
          Wesley Rebouças
          <SocialButtonContainer>
            <FaLinkedin />
            <FaGithub />
          </SocialButtonContainer>
        </TitleContainer>
      </Resume>
      <Profile>Image</Profile>
    </Container>
  )
}
