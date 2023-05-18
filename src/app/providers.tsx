'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme'
import ToasterProvider from './components/ToasterProvider'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ToasterProvider />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}

// Este componente envuelve toda la aplicación y provee el contexto de Chakra UI.