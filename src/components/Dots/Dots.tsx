import { Text } from '@chakra-ui/react'
import React from 'react'

import Bobble from '../Bobble'
import { MotionBox, MotionFlex, MotionText } from '../Motion/Motion.main'

const parentVariants = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      repeat: Infinity
    }
  },
  hidden: {
    // transition: {
    //   when: 'beforeChildren'
    // }
  }
}

const childVariants = {
  visible: {
    opacity: 1,
    transform: ['translateY(0rem)', 'translateY(-0.5rem)', 'translateY(0rem)']
  },
  hidden: {
    opacity: 0
  }
}

const dots = ['.', '.', '.'].map((dot, idx) => (
  <MotionBox
    key={idx}
    as="h1"
    fontSize="6rem"
    pointerEvents="none"
    variants={childVariants}
  >
    <Bobble>
      <Text transform="translateY(-2.25rem)">{dot}</Text>
    </Bobble>
  </MotionBox>
))

const Dots = (): JSX.Element => {
  return (
    <MotionFlex variants={parentVariants} initial="hidden" animate="visible">
      {dots}
    </MotionFlex>
  )
}

export default Dots
