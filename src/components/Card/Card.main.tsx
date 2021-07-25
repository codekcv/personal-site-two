import { Box, BoxProps, Text } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'

import { animDuration } from '../../pages-main/Home/Home.util'
import { MotionBox, MotionFlex } from '../Motion/Motion.main'

type Props = BoxProps & {
  inView?: boolean
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  log?: string
}

type SizeProps = null | { width: number; height: number }

const Card: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen, children } = props
  const posRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<SizeProps>(null)
  const [move, setMove] = useState({ x: 0, y: 0 })
  const [zIndex, setZIndex] = useState(0)
  const [isHover, setIsHover] = useState(false)

  const styleProps: Partial<Props> = { ...props }
  delete styleProps.inView
  delete styleProps.isOpen
  delete styleProps.setIsOpen

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = '100%'
      document.body.style.overflow = 'hidden'

      const currX = posRef?.current?.getBoundingClientRect().x ?? 0
      const targX = window.innerWidth / 2 - 384 - 128
      const diffX = targX - currX
      const posY = (posRef?.current?.getBoundingClientRect().y ?? 0) - 32

      setMove({ x: diffX, y: posY * -1 })
      setZIndex(100)
    } else {
      console.log('What the fuck')
      document.body.style.height = 'initial'
      document.body.style.overflow = 'initial'

      setTimeout(() => {
        setZIndex(0)
      }, 500)
    }
  }, [isOpen])

  useEffect(() => {
    if (posRef?.current) {
      setSize({
        width: posRef.current.getBoundingClientRect().width,
        height: posRef.current.getBoundingClientRect().height
      })
    }
  }, [])

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            position="fixed"
            left={0}
            top={0}
            height="100vh"
            width="100%"
            backgroundColor="#ADD8E6"
            zIndex={4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <MotionBox
        ref={posRef}
        position="relative"
        zIndex={zIndex}
        variants={{
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
        }}
        initial="out"
        animate={props.inView ? 'in' : 'out'}
        {...styleProps}
        {...(size && { ...size })}
      >
        <MotionBox
          whileHover={{
            transform: isOpen
              ? 'initial'
              : `translateY(${isOpen ? '0' : '-0.5'}rem)`
          }}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        >
          <MotionBox
            onClick={handleOpen}
            backgroundColor="white"
            padding="2rem"
            cursor="pointer"
            border="1px dotted rgba(0, 0, 0, 0.1)"
            borderRadius={12}
            boxShadow="0 0.75rem 3rem 0em rgba(0, 0, 0, 0.05), 0 0.75rem 0rem 0rem rgba(0, 0, 0, 0.05)"
            variants={{
              close: {},
              open: {
                transform: `translate(${move.x}px, ${move.y}px)`,
                width: 1024,
                height: 'calc(100vh - 64px)'
              }
            }}
            animate={isOpen ? 'open' : 'close'}
            {...(size && { ...size })}
          >
            {children}

            <AnimatePresence>
              {isHover && !isOpen && (
                <MotionFlex
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  top={0}
                  left={0}
                  w="100%"
                  h="100%"
                  margin="auto"
                  pointerEvents="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="inherit"
                    h="inherit"
                    backgroundColor="#ADD8E6"
                    opacity={0.4}
                    borderRadius={12}
                  />

                  <Text
                    as="h1"
                    fontSize="6rem"
                    transform="translateY(-2.35rem)"
                  >
                    ...
                  </Text>
                </MotionFlex>
              )}
            </AnimatePresence>
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </>
  )
}

export default Card
