import type { Metadata } from 'next'

import StyledComponentsRegistry from './lib/registry'
import { GlobalStyle } from './styles/global-style'

export const metadata: Metadata = {
  title: 'Wesley Reboucas',
  description: 'Portfolio by Wesley Reboucas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
