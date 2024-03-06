import { colors } from '@/app/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  margin: 1rem 0;
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

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #ffffff;
  }

  & > .text {
    font-size: 0.75rem;
    font-weight: bold;
    color: #ffffff;

    @media (min-width: 640px) {
      font-size: 0.875rem;
    }
  }

  & > .info {
    font-size: 0.75rem;
    color: #d1d5db;

    @media (min-width: 640px) {
      font-size: 0.875rem;
    }
  }
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
