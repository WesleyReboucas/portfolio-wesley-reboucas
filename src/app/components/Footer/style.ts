import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 940px) {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`
