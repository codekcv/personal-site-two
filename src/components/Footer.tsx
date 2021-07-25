import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const currentYear = new Date().getFullYear()

const Footer = (): JSX.Element => (
  <Flex
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="64px"
    mt="25vh"
  >
    <Text color="#666" textAlign="center">
      © {currentYear} Christian Villamin | Built with&nbsp;
      <a
        href="https://www.gatsbyjs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        gatsby
      </a>
      &nbsp;+&nbsp;
      <a
        href="https://chakra-ui.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        chakra
      </a>
      &nbsp;+&nbsp;
      <a
        href="https://www.framer.com/motion/"
        target="_blank"
        rel="noopener noreferrer"
      >
        motion
      </a>
    </Text>
  </Flex>
)

export default Footer
