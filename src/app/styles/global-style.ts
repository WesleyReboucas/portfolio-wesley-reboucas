'use client'

import styled, { createGlobalStyle, css } from 'styled-components'
import { colors } from './theme'

type ColorKey = keyof typeof colors
interface CodeTextProps {
  color?: ColorKey
  $upperCaseColor?: boolean
  lineHeightOff?: boolean
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: black;
  }
`

export const Title = styled.h1<CodeTextProps>`
  ${(props) => {
    const chosenColor = props.color ? colors[props.color] : colors.white
    const uppercaseColor = props.$upperCaseColor ? colors.primary : 'inherit'

    return css`
      color: ${chosenColor};
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: bold;

      &:not(:empty)::first-letter {
        color: ${uppercaseColor};
      }

      @media (max-width: 1040px) {
        font-size: 2.5rem;
      }

      @media (max-width: 840px) {
        font-size: 1.9rem;
      }
    `
  }}
`

export const Subtitle = styled.h3<CodeTextProps>`
  ${(props) => {
    const chosenColor = props.color ? colors[props.color] : colors.white
    const uppercaseColor = props.$upperCaseColor ? colors.primary : 'inherit'

    return css`
      color: ${chosenColor};
      padding-left: ${props.$upperCaseColor ? '0.5rem' : '0rem'};
      font-size: 1.5rem;
      margin: 1rem 0rem;
      font-weight: bold;

      &:not(:empty)::first-letter {
        color: ${uppercaseColor};
      }
    `
  }}
`

export const Text = styled.p<CodeTextProps>`
  ${(props) => {
    const chosenColor = props.color ? colors[props.color] : colors.text
    const uppercaseColor = props.$upperCaseColor ? colors.primary : 'inherit'

    return css`
      color: ${chosenColor};
      margin-top: 0.5rem;
      /* margin-bottom: 0.5rem; */
      font-size: 1.05rem;
      font-weight: 400;
      white-space: normal;
      line-height: ${props.lineHeightOff ? 0 : 1.7};

      &:not(:empty)::first-letter {
        color: ${uppercaseColor};
      }
    `
  }}
`

export const CodeText = styled.span<CodeTextProps>`
  ${(props) => {
    const chosenColor = props.color ? colors[props.color] : colors.white
    const uppercaseColor = props.$upperCaseColor ? colors.primary : 'inherit'

    return css`
      color: ${chosenColor};
      font-weight: 100;
      font-size: 1rem;
      font-family: monospace;

      &:not(:empty)::first-letter {
        color: ${uppercaseColor};
      }

      @media (max-width: 840px) {
        font-size: 0.75rem;
      }
    `
  }}
`

export const Bold = styled.span<CodeTextProps>`
  ${(props) => {
    const chosenColor = props.color ? colors[props.color] : colors.white
    return css`
      color: ${chosenColor};
      font-weight: bold;
      white-space: nowrap;
    `
  }}
`
