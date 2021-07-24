import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import Card from '../../../components/Card'

export const projects = [
  {
    title: 'Headless Commerce',
    description:
      'An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL.',
    img: '../../../images/headless_2.png'
  }
].map((item) => (
  <Card key={item.title}>
    <StaticImage src={item.img} placeholder="blurred" alt={item.description} />
  </Card>
))
