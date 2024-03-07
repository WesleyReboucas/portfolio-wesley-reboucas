import { Section } from '@/app/styles/global-style'
import { colors } from '@/app/styles/theme'
import styled from 'styled-components'

export const Container = styled(Section)`
  max-width: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1224px) {
    flex-direction: column-reverse;
  }
`

export const Info = styled.div`
  width: 70%;

  @media (max-width: 1224px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`

export const InfoTitle = styled.div`
  padding-bottom: 1rem;
`

export const InfoContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`

export const ImageContainer = styled.div`
  width: 30%;
  @media (max-width: 1224px) {
    display: none;
  }
`

export const ImageContent = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
  transition: filter 0.3s ease;
`
