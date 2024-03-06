'use client'

import React from 'react'
import { Text } from '../../styles/global-style'
import { Container, Content, Title } from './style'
import { BsStars } from 'react-icons/bs'

// Icons
import { FiGithub, FiMapPin } from 'react-icons/fi'
import { RiLinkedinLine } from 'react-icons/ri'
import { PiCodeLight } from 'react-icons/pi'
import { GiBrazilFlag } from 'react-icons/gi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaRegBuilding } from 'react-icons/fa6'
import { IoSchoolOutline } from 'react-icons/io5'

interface HighlightsProps {
  icon?: string
  title: string
  description?: string | number
  lineBreak?: boolean
}

export default function Highlights({
  icon,
  title,
  description,
  lineBreak,
}: HighlightsProps) {
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
    case 'location':
      IconComponent = FiMapPin
      break
    case 'nationality':
      IconComponent = GiBrazilFlag
      break
    case 'age':
      IconComponent = FaRegCalendarAlt
      break
    case 'study':
      IconComponent = IoSchoolOutline
      break
    case 'employment':
      IconComponent = FaRegBuilding
      break
    case 'skill':
      IconComponent = BsStars
      break
    default:
      IconComponent = null
  }
  return (
    <Container>
      <Content $lineBreak={lineBreak}>
        <Title>
          {IconComponent && <IconComponent />}
          <Text color='white'>{title}</Text>
        </Title>
        <Text>{description}</Text>
      </Content>
    </Container>
  )
}
