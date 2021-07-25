import { BoxProps } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'

import { animDuration } from '../../pages-main/Home/Home.util'
import { MotionBox } from '../Motion/Motion.main'

const CardContainer = styled(MotionBox)<{
  ref?: RefObject<HTMLElement>
}>(`
  background-color: white;
  padding: 2rem;
  cursor: pointer;
  border: 1px dotted rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: 0 0.75rem 3rem 0em rgba(0, 0, 0, 0.05),
    0 0.75rem 0rem 0rem rgba(0, 0, 0, 0.05);
`)

type Props = BoxProps & {
  inView?: boolean
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Card: React.FC<Props> = ({ isOpen, setIsOpen, children }) => {
  const [height, setHeight] = useState(0)
  const posRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && window) {
      document.body.style.height = '100%'
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.height = 'initial'
      document.body.style.overflowY = 'initial'
    }
  }, [isOpen])

  useEffect(() => {
    if (cardRef?.current) {
      setHeight(cardRef.current.getBoundingClientRect().height)
    }
  }, [])

  const handleOpen = () => setIsOpen(!isOpen)

  const posY = (posRef?.current?.getBoundingClientRect().y ?? 0) - 32
  const transform = `translate(-128px, calc(${posY * -1}px))`

  return (
    <div ref={posRef}>
      <MotionBox
        height={height}
        whileHover={{
          transform: `translateY(${isOpen ? '0' : '-0.5'}rem)`
        }}
      >
        <CardContainer
          ref={cardRef}
          variants={{
            close: {},
            open: {
              transform,
              width: 1024,
              height: 'calc(100vh - 64px)'
            }
          }}
          animate={isOpen ? 'open' : 'close'}
          onClick={handleOpen}
        >
          {children}
        </CardContainer>
      </MotionBox>
    </div>
  )
}

const inViewVariants = {
  out: {
    opacity: 0,
    transform: 'translateY(-3rem)',
    transition: { duration: animDuration, ease: 'easeOut' }
  },
  in: {
    opacity: 1,
    transform: 'translateY(0rem)',
    transition: { duration: animDuration, ease: 'easeOut' }
  }
}

export const CardInView: React.FC<Props> = (props) => (
  <motion.div
    variants={inViewVariants}
    initial="out"
    animate={props.inView ? 'in' : 'out'}
  >
    <Card {...props} />
  </motion.div>
)

export default Card
