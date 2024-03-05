'use client'

import React from 'react'
import { ContactContainer, Container, Info, LinkElement } from './style'
import Input from '../Input'
import { Subtitle, Text } from '@/app/styles/global-style'
import Button from '../Button'
import { FiGithub, FiMail } from 'react-icons/fi'
import { RiLinkedinLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'

export default function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Formulário enviado!')
  }

  return (
    <div>
      <Subtitle $upperCaseColor>Contact</Subtitle>
      <Container>
        <Info>
          <Text>
            Got a project idea or inquiries about my past work? I&apos;m all
            ears and eager to hear from you. Feel free to reach out via email or
            by filling out the form to get in touch.
          </Text>
          <LinkElement href='/'>
            <SlLocationPin />
            Salvador, Bahia, Brazil
          </LinkElement>
          <LinkElement href='/'>
            <FiMail />
            wesley.reboucas@gmail.com
          </LinkElement>
          <LinkElement href='https://github.com/WesleyReboucas'>
            <FiGithub />
            WesleyReboucas
          </LinkElement>
          <LinkElement href='https://www.linkedin.com/in/wesleyreboucas/'>
            <RiLinkedinLine />
            WesleyReboucas
          </LinkElement>
        </Info>
        <ContactContainer onSubmit={handleSubmit}>
          <Input type='text' title='Name' placeholder='name' />
          <Input type='email' title='E-mail' placeholder='email' />
          <Input type='textarea' title='Message' placeholder='message' />
          <Button description='Send message' />
        </ContactContainer>
      </Container>
    </div>
  )
}
