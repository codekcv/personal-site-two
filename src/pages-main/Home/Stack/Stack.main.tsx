import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import Bobble from '../../../components/Bobble'
import Card from '../../../components/Card'
import { MotionHeading } from '../../../components/Motion/Motion.main'
import { animDelay, animDuration, triggerOnce } from '../Home.util'
import { backEndTechnologies, frontEndTechnologies } from './Stack.util'

const Stack = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: animDelay,
    triggerOnce
  })

  return (
    <Box mt="2rem">
      <Box position="relative" zIndex={1}>
        <Bobble>
          <MotionHeading
            as="h1"
            fontSize="4rem"
            textAlign="center"
            textShadow="0 0.35rem 0px rgba(0,0,0,0.1)"
            variants={{
              out: {
                opacity: 0,
                transform: 'scale(1.5)  translateY(6rem)'
              },
              in: { opacity: 1, transform: 'scale(1)  translateY(0rem)' }
            }}
            initial="out"
            animate={inView ? 'in' : 'out'}
            transition={{ duration: animDuration, ease: 'easeOut' }}
          >
            Technology Stack
          </MotionHeading>
        </Bobble>
      </Box>

      <Box position="relative" mt="-1.5rem" zIndex={0} ref={ref}>
        <Flex justifyContent="center">
          <Card
            width="50%"
            mr="2rem"
            variants={{
              out: { opacity: 0, transform: 'translateX(-6rem)' },
              in: { opacity: 1, transform: 'translateX(0rem)' }
            }}
            initial="out"
            animate={inView ? 'in' : 'out'}
            transition={{ duration: animDuration, ease: 'easeOut' }}
          >
            <Text as="h2" textAlign="center">
              Back-End
            </Text>

            <Flex mt="1.5rem" flexWrap="wrap" justifyContent="center">
              {backEndTechnologies}
            </Flex>
          </Card>

          <Card
            width="50%"
            ml="2rem"
            variants={{
              out: { opacity: 0, transform: 'translateX(6rem)' },
              in: { opacity: 1, transform: 'translateX(0rem)' }
            }}
            initial="out"
            animate={inView ? 'in' : 'out'}
            transition={{ duration: animDuration, ease: 'easeOut' }}
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
    </Box>
  )
}

export default Stack
