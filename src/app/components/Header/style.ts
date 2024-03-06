import { colors } from '@/app/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  margin: 1rem 0;
  margin: 3rem 0;
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
