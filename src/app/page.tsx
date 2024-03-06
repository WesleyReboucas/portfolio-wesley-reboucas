'use client'

import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Experience from './components/Experience'
import { colors } from './styles/theme'
import About from './components/About'
import Header from './components/Header'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`

const Content = styled.div`
  margin: 1rem;
  width: 70%;
  max-width: 1200px;
  transition: width 0.3s ease;

  /* border: 1px solid ${colors.primary};
  border-radius: 1rem;
  padding: 1rem; */

  @media (max-width: 940px) {
    margin: 0rem;
    width: 100%;
  }
`

export default function Home() {
  return (
    <Container>
      <Content>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Content>
    </Container>
  )
}
