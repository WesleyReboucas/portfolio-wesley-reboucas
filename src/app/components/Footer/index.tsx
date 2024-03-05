'use client'

import React from 'react'
import { CodeText } from '../../styles/global-style'
import { Container } from './style'

export default function Footer() {
  const currentYear: number = new Date().getFullYear()

  return (
    <Container>
      <CodeText>
        &copy; {currentYear} Wesley Rebouças | All rights reserved.
      </CodeText>
    </Container>
  )
}
