'use client'

import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './components/Contact'

const Container = styled.div`
  margin: 1rem;
`

export default function Home() {
  return (
    <Container>
      <Navbar />
      {/* <Header /> */}
      <Contact />
      <Footer />
    </Container>
  )
}
