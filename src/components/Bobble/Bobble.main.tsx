import { BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

import { MotionFlex } from '../Motion/Motion.main'
import { bobbingRange, maxVary, minVary } from './Bobble.util'

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
