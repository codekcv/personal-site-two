import { Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../../components/BobbleTitle'
import { CardInView } from '../../../components/Card/Card.main'
import { animDelay, triggerOnce } from '../Home.util'
import { facts } from './About.util'

const About = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: animDelay,
    triggerOnce
  })

  return (
    <Box ref={ref} mt="2rem" onClick={() => setIsOpen(!isOpen)}>
      <BobbleTitle inView={inView} isOpen={isOpen}>
        About
      </BobbleTitle>

      <CardInView inView={inView} isOpen={isOpen} setIsOpen={setIsOpen}>
        <Box as="ul">{facts}</Box>

        <Text mt="2rem">
          Outside of the technology world in my free time, I play classical
          piano, read light fantasy novels, do some stretching and exercises,
          and take care of my lovely cats.
        </Text>
      </CardInView>
    </Box>
  )
}

export default About
