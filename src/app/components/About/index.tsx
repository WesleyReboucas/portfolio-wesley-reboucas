'use client'

import React from 'react'
import { Subtitle, Text } from '../../styles/global-style'
import {
  Container,
  Content,
  Grid,
  ImageContainer,
  ImageContent,
  Info,
  ListItem,
} from './style'
import Highlights from '../Highlights'
import Image from 'next/image'
// import helloAvatar from '/avatar/avatar-hello.png'

export default function About() {
  const currentAge = () => {
    const today = new Date()
    const birthDate = new Date('1998-05-17')

    const difference = today.getTime() - birthDate.getTime()
    const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25))

    return age
  }
  return (
    <Container id='about'>
      <Subtitle $upperCaseColor> About me </Subtitle>
      <Content>
        <Info>
          <Text>
            I&apos;m a software developer who&apos;s all about innovation and
            creativity. Born in Bahia&apos;s capital, I developed hardware
            projects like Arduino and Raspberry Pi during my college days,
            mixing my tech skills with creativity.
          </Text>
          <Text>
            When I&apos;m not coding, you&apos;ll find me enjoying some offline
            hobbies like drawing, diving into a good book, binging sci-fi
            series/movies, writing stories, and strumming my guitar or ukulele.
            I&apos;m always up for discovering new eateries and and traveling.
            And my ultimate job aspiration? Work while globe-trotting around the
            world.
          </Text>
          <Grid>
            <ListItem>
              <Highlights
                icon='nationality'
                title='Nationality:'
                description='Brazilian'
              />
            </ListItem>
            <ListItem>
              <Highlights
                icon='location'
                title='Location:'
                description='Salvador, Ba'
              />
            </ListItem>
            <ListItem>
              <Highlights
                icon='study'
                title='Study:'
                description='Computer Engineering'
              />
            </ListItem>
            <ListItem>
              <Highlights icon='age' title='Age:' description={currentAge()} />
            </ListItem>
            <ListItem>
              <Highlights
                icon='employment'
                title='Work:'
                description='Seeking opportunities '
              />
            </ListItem>
            <ListItem>
              <Highlights
                icon='skill'
                title='Interests:'
                description='Books, movies, guitar'
              />
            </ListItem>
          </Grid>
        </Info>

        <ImageContainer>
          <ImageContent src={'/avatar/avatar-hello.png'} alt='Dev Image' />
        </ImageContainer>
      </Content>
    </Container>
  )
}
