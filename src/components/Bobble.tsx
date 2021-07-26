import { BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

import { MotionFlex } from './Motion'

const minVary = 0.85
const maxVary = 1.15

const Bobble: React.FC<BoxProps> = (props) => {
  const { children } = props
  const passedProps = { ...props }
  const dirX = Math.random() < 0.5
  const dirY = Math.random() < 0.5

  const x = [
    `translateX(${dirX ? '-' : ''}0.12rem)`,
    `translateX(${dirX ? '' : '-'}0.12rem)`,
    `translateX(${dirX ? '-' : ''}0.12rem)`
  ]

  const y = [
    `translateY(${dirY ? '-' : ''}0.12rem)`,
    `translateY(${dirY ? '' : '-'}0.12rem)`,
    `translateY(${dirY ? '-' : ''}0.12rem)`
  ]

  delete passedProps.children

  return (
    <MotionFlex
      justifyContent="center"
      alignItems="center"
      animate={{ transform: x }}
      transition={{
        repeat: Infinity,
        duration: 3 / (Math.random() * (maxVary - minVary) + minVary)
      }}
      {...passedProps}
    >
      <motion.div
        animate={{ transform: y }}
        transition={{
          repeat: Infinity,
          duration: Math.SQRT2 / (Math.random() * (maxVary - minVary) + minVary)
        }}
      >
        {children}
      </motion.div>
    </MotionFlex>
  )
}

export default Bobble
