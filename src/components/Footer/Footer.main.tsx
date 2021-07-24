import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width={1}
      height={64}
      mt="25vh"
    >
      <Text color="#666" textAlign="center">
        © {currentYear} Christian Villamin | Built with&nbsp;
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        &nbsp;+&nbsp;
        <a
          href="https://styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          styled-components
        </a>
        &nbsp;+&nbsp;
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          framer-motion
        </a>
      </Text>
    </Flex>
  )
}

export default Footer
