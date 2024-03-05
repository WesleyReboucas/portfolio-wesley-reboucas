import React from 'react'
import { ButtonElement, Container } from './style'

// Icons
import { FiGithub } from 'react-icons/fi'
import { RiLinkedinLine, RiSendPlaneLine } from 'react-icons/ri'
import { PiCodeLight } from 'react-icons/pi'

interface ButtonProps {
  icon?: string
  description: string
}

export default function Button({ icon, description }: ButtonProps) {
  let IconComponent = null

  switch (icon) {
    case 'github':
      IconComponent = FiGithub
      break
    case 'linkedin':
      IconComponent = RiLinkedinLine
      break
    case 'code':
      IconComponent = PiCodeLight
      break
    default:
      IconComponent = null
  }

  return (
    <Container>
      <ButtonElement>
        {IconComponent && <IconComponent />}
        {description}
      </ButtonElement>
    </Container>
  )
}
