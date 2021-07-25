import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../../components/BobbleTitle'
import Card from '../../../components/Card'
import { animDelay, triggerOnce } from '../Home.util'
import { backEndTechnologies, frontEndTechnologies } from './Stack.util'

const Stack = (): JSX.Element => {
  const [isOpenBE, setIsOpenBE] = useState(false)
  const [isOpenFE, setIsOpenFE] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: animDelay,
    triggerOnce
  })

  return (
    <Box ref={ref} mt="2rem">
      <BobbleTitle inView={inView} isOpen={isOpenBE || isOpenFE}>
        Technology Stack
      </BobbleTitle>

      <Flex justifyContent="center">
        <Card
          isOpen={isOpenBE}
          setIsOpen={setIsOpenBE}
          w="50%"
          mr="2rem"
          alignSelf="stretch"
        >
          <Text as="h2" textAlign="center">
            Back-End
          </Text>

          <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
            {backEndTechnologies}
          </Flex>
        </Card>

        <Card
          isOpen={isOpenFE}
          setIsOpen={setIsOpenFE}
          w="50%"
          ml="2rem"
          alignSelf="stretch"
        >
          <Text as="h2" textAlign="center">
            Front-End
          </Text>

          <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
            {frontEndTechnologies}
          </Flex>
        </Card>
      </Flex>
    </Box>
  )
}

export default Stack
