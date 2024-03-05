import { colors } from '@/app/styles/theme'
import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 1rem;

  @media (max-width: 940px) {
    flex-direction: column;
  }
`

export const SlideElement = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Microsoft Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari e Opera */
  }
`

export const SlideItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0rem 1rem;
  position: relative;
`

export const SlideImage = styled(Image)<{ isHovered: boolean }>`
  filter: ${({ isHovered }) => (isHovered ? 'blur(9px)' : 'none')};
  overflow: hidden;
  transition: filter 0.3s ease;
  transition: background-color 0.3s ease;
  object-fit: cover;
  border-radius: 1rem;

  &:hover {
    filter: blur(3px);
  }
`

export const ButtonPanel = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;

  & > * {
    margin: 1rem;
  }
`
