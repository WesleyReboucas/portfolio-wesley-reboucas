import styled, { css } from 'styled-components'
import { colors } from './../../styles/theme'

type ColorKey = keyof typeof colors
interface InputProps {
  type: string
  title?: string
  $borderColor?: ColorKey
}

export const Container = styled.div<{ borderColor?: string }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  & > * {
    margin-top: 0.5rem;
  }
`

export const Title = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`

export const InputElement1 = styled.input<InputProps>`
  ${(props) => {
    const chosenBorderColor = props.$borderColor
      ? colors[props.$borderColor]
      : colors.primary

    return css`
      text-align: start;
      border: 1px solid ${chosenBorderColor};
      background-color: ${colors.backgroundContainerDark};
      color: white;
      padding: 8px;
      border-radius: 4px;
      outline: none;

      &:focus {
        border-color: ${chosenBorderColor};
      }
    `
  }}
`

const baseInputStyles = css<InputProps>`
  text-align: start;
  border: 1px solid
    ${(props) =>
      props.$borderColor ? colors[props.$borderColor] : colors.primary};
  background-color: ${colors.backgroundContainerDark};
  color: white;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  font-family: 'Inter', sans-serif;

  &:focus {
    border-color: ${(props) =>
      props.$borderColor ? colors[props.$borderColor] : colors.primary};
  }
`

// Define o styled component para o input
export const InputElement = styled.input<InputProps>`
  ${baseInputStyles}
`

// Define o styled component para o textarea, herdando os estilos do input
export const InputTextarea = styled.textarea<InputProps>`
  ${baseInputStyles}
  height: 5rem;
  font-family: Arial, sans-serif; // Altera a fonte para Arial ou outra fonte sans-serif
  ::placeholder {
    color: gray; // Altera a cor do placeholder
  }
`
