import type { Metadata } from 'next'

import StyledComponentsRegistry from './lib/registry'
import { GlobalStyle } from './styles/global-style'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

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
      <head>
        <link rel='icon' href='/logo/favicon.ico' />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <SpeedInsights />
          <Analytics />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
