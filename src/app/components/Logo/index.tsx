'use client'

import React from 'react'
import { Container } from './style'
import Image from 'next/image'

export default function Logo() {
  return (
    <Container href='/'>
      <Image src={'/logo/w-sliced.svg'} alt='Logo' width={20} height={25} />
      <Image
        src={'/logo/sliced-primary.svg'}
        alt='Logo'
        width={20}
        height={25}
      />
      <Image src={'/logo/r-sliced.svg'} alt='Logo' width={20} height={25} />
    </Container>
  )
}
