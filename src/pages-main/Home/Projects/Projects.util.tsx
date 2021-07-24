/* eslint-disable react/display-name */
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Card from '../../../components/Card'

export const projects = [
  {
    title: 'Headless Commerce',
    description:
      'An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL.',
    img: (
      <StaticImage
        src="../../../images/headless_2.png"
        width={700}
        height={340}
        placeholder="blurred"
        alt="An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL."
      />
    )
  }
].map((item) => <Card key={item.title}>{item.img}</Card>)
