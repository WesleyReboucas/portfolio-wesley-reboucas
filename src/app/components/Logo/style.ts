import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  & > * {
    margin: 0rem -0.25rem;
  }
`
