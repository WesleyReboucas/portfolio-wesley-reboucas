import React from 'react'
import { ButtonElement, Container } from './style'

// Icons
import { FiGithub, FiMail } from 'react-icons/fi'
import { RiLinkedinLine } from 'react-icons/ri'
import { PiCodeLight } from 'react-icons/pi'
import Link from 'next/link'

interface ButtonProps {
  icon?: string
  description: string
  link?: string
}

export default function Button({ icon, description, link }: ButtonProps) {
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
      <Link href={link || '#'}>
        <ButtonElement>
          {IconComponent && <IconComponent />}
          {description}
        </ButtonElement>
      </Link>
    </Container>
  )
}
