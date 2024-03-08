import { Section } from '@/app/styles/global-style'
import { colors } from '@/app/styles/theme'
import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Section)`
  max-width: 100%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
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
  margin-bottom: 1rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin: 1rem 0rem;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 1rem;

  & > * {
    padding: 1rem 1rem;
  }
`

export const SocialMediaLink = styled(Link)`
  display: flex;
  font-size: 2rem;
  color: ${colors.primary};
`

export const ImageContainer = styled.div`
  width: 100%;
  min-width: 16rem;
  max-width: 20rem;
  @media (max-width: 880px) {
    display: none;
  }
`

export const ImageContent = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
  transition: filter 0.3s ease;
`
