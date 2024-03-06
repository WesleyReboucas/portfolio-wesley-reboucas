'use client'

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {
  Bold,
  CodeText,
  Subtitle,
  Text,
  Title,
} from '../../styles/global-style'
import {
  Container,
  Content,
  ImageContainer,
  ImageContent,
  Info,
  InfoTitle,
} from './style'

export default function Header() {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <ImageContent src={'/avatar/avatar-dev.png'} alt='Dev Image' />
        </ImageContainer>
        <Info>
          <InfoTitle>
            <Title> Wesley Rebouças </Title>
            <CodeText color='text'>
              &lt;
              <CodeText color='primary'>code</CodeText>&gt; I&apos;m{' '}
              <Bold>
                <TypeAnimation
                  sequence={[
                    'Computer Engineer',
                    2500,
                    'Mobile Developer',
                    2500,
                    'Problem Solver',
                    2500,
                    'Web Developer',
                    2500,
                  ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                />
              </Bold>
              &lt;/<CodeText color='primary'>code</CodeText>&gt;
            </CodeText>
          </InfoTitle>
          <Text>
            I&apos;m Software Developer, living in Brazil, currently looking for
            opportunities to work with technologies such as
            <Bold> React</Bold>,<Bold> React Native</Bold>, and
            <Bold> Swift.</Bold>
          </Text>
          <Text>
            In my free time, you can find me watching or reading
            <Bold> sci-fi</Bold>, playing my
            <Bold> guitar</Bold>, or hanging out with my
            <Bold> friends</Bold>. May the
            <Bold> force</Bold> be with you and
            <Bold> live long</Bold> and
            <Bold> prosper</Bold>!
          </Text>
        </Info>
      </Content>
    </Container>
  )
}
