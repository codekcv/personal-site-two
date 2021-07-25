import React from 'react'

import Layout from '../components/Layout'
import About from '../pages-main/index/About'
import Hero from '../pages-main/index/Hero'
import Projects from '../pages-main/index/Projects'
import Stack from '../pages-main/index/Stack'

const Index = (): JSX.Element => (
  <Layout>
    <Hero />
    <About />
    <Stack />
    <Projects />
  </Layout>
)

export default Index
