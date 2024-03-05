import React from 'react'
import { Container, InputElement, InputTextarea, Title } from './style'
import { CodeText, Text } from '@/app/styles/global-style'

interface InputProps {
  type: string
  title?: string
  placeholder?: string
}

export default function Input({ type, title, placeholder }: InputProps) {
  return (
    <Container>
      {title && (
        <Text color='white' $upperCaseColor>
          {title}
        </Text>
      )}
      {type == 'textarea' ? (
        <InputTextarea type={type} placeholder={placeholder} />
      ) : (
        <InputElement type={type} placeholder={placeholder} />
      )}
    </Container>
  )
}
