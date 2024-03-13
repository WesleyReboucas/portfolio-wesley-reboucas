'use client'
import { SpeedInsights } from '@vercel/speed-insights/next'

import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Work from './components/Work'
import Experience from './components/Experience'
import About from './components/About'
import Header from './components/Header'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`

const Content = styled.div`
  margin: 1rem;
  width: 100%;
  max-width: 75rem;
  transition: width 0.3s ease;

  @media (max-width: 940px) {
    margin: 0rem;
    width: 100%;
  }
`

export default function Home() {
  return (
    <Container>
      <Content>
        <SpeedInsights />
        <Navbar />
        <Header />
        <About />
        <Work />
        <Experience />
        <Footer />
      </Content>
    </Container>
  )
}
