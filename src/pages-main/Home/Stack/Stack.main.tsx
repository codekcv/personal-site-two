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

      <Flex justifyContent="center" mt="-1.5rem">
        <Card
          inView={inView}
          isOpen={isOpenBE}
          setIsOpen={setIsOpenBE}
          w="100%"
          mr="2rem"
        >
          <Text textAlign="center">Back-End</Text>

          <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
            {backEndTechnologies}
          </Flex>
        </Card>

        <Card
          inView={inView}
          isOpen={isOpenFE}
          setIsOpen={setIsOpenFE}
          w="100%"
          ml="2rem"
        >
          <Text textAlign="center">Front-End</Text>

          <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
            {frontEndTechnologies}
          </Flex>
        </Card>
      </Flex>
    </Box>
  )
}

export default Stack
