import { motion } from 'framer-motion'
import React from 'react'
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineCodepen,
  AiOutlineGithub,
  AiOutlineTwitter
} from 'react-icons/ai'
import { FaDev, FaFreeCodeCamp } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

import { MotionBox } from '../../../components/Motion/Motion.main'

export const contacts = [
  {
    name: 'GitHub',
    icon: <AiOutlineGithub size={48} />,
    link: 'http://github.com/codekcv'
  },
  {
    name: 'Twitter',
    icon: <AiOutlineTwitter size={48} />,
    link: 'https://twitter.com/codekcv'
  },
  {
    name: 'DEV',
    icon: <FaDev size={48} />,
    link: 'https://dev.to/codekcv'
  },
  {
    name: 'CodePen',
    icon: <AiOutlineCodepen size={48} />,
    link: 'https://codepen.io/codekcv'
  },
  {
    name: 'freeCodeCamp',
    icon: <FaFreeCodeCamp size={48} />,
    link: 'https://www.freecodecamp.org/codekcv'
  },
  {
    name: 'YouTube',
    icon: <AiFillYoutube size={48} />,
    link: 'https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg'
  },
  {
    name: 'LinkedIn',
    icon: <AiFillLinkedin size={48} />,
    link: 'https://www.linkedin.com/in/codekcv/'
  },
  {
    name: 'Email',
    icon: <IoIosMail size={48} />,
    link: 'mailto:ChristianVillamin31@gmail.com'
  }
].map((item) => (
  <MotionBox
    as={motion.div}
    key={item.name}
    mx="1rem"
    mt="1.5rem"
    whileHover={{ scale: 1.2 }}
  >
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      {item.icon}
    </a>
  </MotionBox>
))
