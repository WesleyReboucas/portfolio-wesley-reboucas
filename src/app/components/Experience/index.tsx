'use client'

import React from 'react'
import { Subtitle, Text } from '../../styles/global-style'
import {
  Container,
  Content,
  Description,
  Duration,
  StackTitle,
  Stacks,
} from './style'
import { experiences, ExperiencesProps } from '../../../utils/data'
import Link from 'next/link'
import { BsStars } from 'react-icons/bs'
import Highlights from '../Highlights'

export default function Experience() {
  return (
    <Container>
      <Subtitle $upperCaseColor>Experience</Subtitle>
      {experiences.map((item: ExperiencesProps, index: number) => (
        <Content key={index}>
          <Duration>
            <Text color='white'>
              {item.initialDate} - {item.finalDate}
            </Text>
          </Duration>
          <Subtitle size={1.3}>{item.title}</Subtitle>
          <Link href={item.companyLink}>
            <Text color='white' $lineHeight={1}>
              {item.company} · {item.employmentType}
            </Text>
          </Link>
          <Description>
            <Text>{item.responsibilities}</Text>
          </Description>

          <Highlights
            icon='skill'
            title='Stacks:'
            description={item.skills}
            lineBreak
          />
        </Content>
      ))}
    </Container>
  )
}
