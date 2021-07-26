import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  useEffect(() => {
    console.log('Mounted')
  }, [])

  return (
    <Flex
      as="main"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      maxWidth={768}
      mx="auto"
    >
      <Box w="100%" flex={1}>
        <Header />
        {children}
      </Box>

      <Footer />
    </Flex>
  )
}

export default Layout
