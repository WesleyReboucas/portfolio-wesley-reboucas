import { colors } from '@/app/styles/theme'
import styled, { css } from 'styled-components'

type ColorKey = keyof typeof colors
interface ButtonProps {
  $borderColor?: ColorKey
}

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const ButtonElement = styled.button<ButtonProps>`
  ${(props) => {
    const chosenBorderColor = props.$borderColor
      ? colors[props.$borderColor]
      : colors.primary

    return css`
      display: flex;
      align-items: center;

      border: 1px solid ${chosenBorderColor};
      background-color: ${colors.backgroundContainerDark};
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      outline: none;
      cursor: pointer;
      transition: background-color 0.3s, border-color 0.3s;

      &:hover {
        background-color: ${chosenBorderColor};
        border-color: ${chosenBorderColor};
      }

      & > * {
        margin-right: 0.5rem;
      }

      &:focus {
        /* box-shadow: 0 0 0 3px ${colors.yellow}; */
      }
    `
  }}
`
