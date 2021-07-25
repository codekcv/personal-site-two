import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

import { animDuration } from '../../pages-main/Home/Home.util'
import Bobble from '../Bobble/Bobble.main'
import { MotionHeading } from '../Motion/Motion.main'

type Props = {
  inView: boolean
  isOpen: boolean
}

const inOutVariants = {
  out: {
    opacity: 0,
    transform: 'scale(1.5) translateY(6rem)'
  },
  in: { opacity: 1, transform: 'scale(1) translateY(0rem)' }
}

const BobbleTitle: React.FC<Props> = ({ inView, isOpen, children }) => {
  const [zIndex, setZIndex] = useState(1)
  const [titleY, setTitleY] = useState(0)
  const titleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (isOpen) {
      const titlePosY = titleRef?.current?.getBoundingClientRect().y ?? 0
      setTitleY(titlePosY - (window.innerHeight / 2 - 64))
      setZIndex(101)
    } else {
      setTimeout(() => {
        setZIndex(1)
      }, 400)
    }
  }, [isOpen])

  return (
    <Bobble position="relative" zIndex={zIndex}>
      <motion.div
        variants={{
          close: {},
          open: {
            transform: `translate(-560px, ${titleY * -1}px) rotate(-90deg)`
          }
        }}
        transition={{ duration: 0.4 }}
        animate={isOpen ? 'open' : 'close'}
      >
        <MotionHeading
          as="h1"
          fontSize="4rem"
          textAlign="center"
          textShadow="0 0.35rem 0px rgba(0,0,0,0.1)"
          variants={inOutVariants}
          initial="out"
          animate={inView ? 'in' : 'out'}
          transition={{ duration: animDuration, ease: 'easeOut' }}
          ref={titleRef}
        >
          {children}
        </MotionHeading>
      </motion.div>
    </Bobble>
  )
}
export default BobbleTitle
