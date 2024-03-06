import { colors } from '@/app/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  padding-left: 1rem;
  padding-bottom: 1rem;
  border-left: 1px solid ${colors.primary};
  margin: 0rem 1rem;
`

export const Duration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-left: -2rem;
  width: 7.7rem;
  height: 2.2rem;

  border-radius: 0.3rem;
  border: 1px solid ${colors.primary};
  background-color: black;
`

export const Description = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

export const Stacks = styled.div`
  display: flex;
  color: ${colors.white};
  padding-top: 1rem;

  & > * {
    margin-right: 0.5rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const StackTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 640px) {
    margin-bottom: 0.5rem;
  }

  & > svg {
    margin-right: 0.5rem;
  }
`
