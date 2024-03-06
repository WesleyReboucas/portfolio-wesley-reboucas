import { colors } from '@/app/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Content = styled.div<{ $lineBreak?: boolean }>`
  display: flex;
  color: ${colors.white};

  & > * {
    margin-right: 0.5rem;
  }

  @media (max-width: 640px) {
    flex-direction: ${(props) => (props.$lineBreak ? 'column' : 'row')};
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  & > svg {
    margin-right: 0.5rem;
  }
`
