import React from 'react'
import { ButtonElement, Container } from './style'

// Icons
import { FiGithub, FiMail } from 'react-icons/fi'
import { RiLinkedinLine } from 'react-icons/ri'
import { PiCodeLight } from 'react-icons/pi'
import Link from 'next/link'
import { Text } from '@/app/styles/global-style'

interface ButtonProps {
  icon?: string
  description: string
  link?: string
  download?: string
}

export default function Button({
  icon,
  description,
  link,
  download,
}: ButtonProps) {
  let IconComponent = null

  switch (icon) {
    case 'github':
      IconComponent = FiGithub
      break
    case 'linkedin':
      IconComponent = RiLinkedinLine
      break
    case 'mail':
      IconComponent = FiMail
      break
    case 'code':
      IconComponent = PiCodeLight
      break
    default:
      IconComponent = null
  }

  return (
    <Container>
      <Link download={download} href={link || '#'}>
        <ButtonElement>
          {IconComponent && <IconComponent />}
          <Text color='white'>{description}</Text>
        </ButtonElement>
      </Link>
    </Container>
  )
}
