import { Section } from '@/app/styles/global-style'
import styled from 'styled-components'

export const Container = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  @media (max-width: 940px) {
    margin: 1rem 0;
  }
`
