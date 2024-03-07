import { colors } from '@/app/styles/theme'
import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  transition: width 0.3s ease;

  @media (max-width: 940px) {
    flex-direction: column;
  }
`

export const Info = styled.div`
  display: flex;
  padding-right: 5rem;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  margin-bottom: 3rem;
  transition: width 0.3s ease;

  @media (max-width: 940px) {
    padding-right: 0rem;
    margin-bottom: 0rem;

    width: 100%;
  }
`

export const ContactContainer = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  transition: width 0.3s ease;

  @media (max-width: 940px) {
    width: 100%;
    margin: 2rem 0rem;
  }
`

export const LinkElement = styled(Link)`
  display: flex;
  align-items: center;
  color: ${colors.text};
  padding-top: 1rem;

  & > * {
    margin-right: 0.5rem;
  }

  & > svg {
    font-size: 1.5rem;
    color: ${colors.primary};
  }
`
