'use client'

import React from 'react'
import { Container } from './style'
import Image from 'next/image'

export default function Logo() {
  return (
    <Container href='/'>
      <Image src={'/logo/logo-primary.svg'} alt='Logo' width={40} height={45} />
    </Container>
  )
}
