import { BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

import { MotionFlex } from './Motion'

const bobbingRange = {
  x: {
    transform: [
      'translateX(0.25rem)',
      'translateX(0rem)',
      'translateX(0.25rem)'
    ],
    duration: 3
  },
  y: {
    transform: [
      'translateY(0.25rem)',
      'translateY(0rem)',
      'translateY(0.25rem)'
    ],
    duration: Math.PI / Math.E
  }
}

const minVary = 0.85
const maxVary = 1.15

const Bobble: React.FC<BoxProps> = (props) => {
  const { children } = props
  const passedProps = { ...props }

  delete passedProps.children

  return (
    <MotionFlex
      justifyContent="center"
      alignItems="center"
      animate={{ transform: bobbingRange.x.transform }}
      transition={{
        repeat: Infinity,
        duration:
          bobbingRange.x.duration /
          (Math.random() * (maxVary - minVary) + minVary)
      }}
      {...passedProps}
    >
      <motion.div
        animate={{ transform: bobbingRange.y.transform }}
        transition={{
          repeat: Infinity,
          duration:
            bobbingRange.y.duration /
            (Math.random() * (maxVary - minVary) + minVary)
        }}
      >
        {children}
      </motion.div>
    </MotionFlex>
  )
}

export default Bobble
