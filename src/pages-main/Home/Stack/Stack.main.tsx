import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { InView } from 'react-intersection-observer'

import Bobble from '../../../components/Bobble'
import Card from '../../../components/Card'
import { MotionText } from '../../../components/Motion/Motion.main'
import { animDelay, animDuration, triggerOnce } from '../Home.util'
import { backEndTechnologies, frontEndTechnologies } from './Stack.util'

const Stack = (): JSX.Element => {
  return (
    <Box width="100%" mt="10vh">
      <InView threshold={0.5} delay={animDelay} triggerOnce={triggerOnce}>
        {({ inView, ref }) => (
          <>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Bobble>
                <MotionText
                  as="h1"
                  fontSize="4rem"
                  textAlign="center"
                  mt="6rem"
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
                  ref={ref}
                >
                  Technology Stack
                </MotionText>
              </Bobble>
            </div>

            <div style={{ position: 'relative', zIndex: 0 }}>
              <Flex justifyContent="center" mt="-1.5rem" ref={ref}>
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
            </div>
          </>
        )}
      </InView>
    </Box>
  )
}

export default Stack
