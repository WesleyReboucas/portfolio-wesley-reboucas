import { colors } from '@/app/styles/theme'
import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  width: 100%;
`

export const SlideElement = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const SlideItem = styled.div`
  flex: 0 0 auto;
  width: 18rem;
  height: 10rem;
  position: relative;
  border: 1px solid ${colors.primary};
  border-radius: 1rem;
  margin: 0 0.5rem;
  overflow: hidden;
  transition: width 0.3s ease;

  @media (max-width: 840px) {
    width: 16rem;
    height: 9rem;
  }
  @media (max-width: 640px) {
    width: 14rem;
    height: 7rem;
  }
`

export const SlideImage = styled.img<{ isHovered: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8rem;
  filter: ${({ isHovered }) => (isHovered ? 'blur(9px)' : 'none')};
  transition: filter 0.3s ease;

  &:hover {
    filter: ${({ isHovered }) => (isHovered ? 'blur(3px)' : 'none')};
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

export const Ribbon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0.1rem 4rem;
  transform: translate(50%, -50%) rotate(45deg);
`
