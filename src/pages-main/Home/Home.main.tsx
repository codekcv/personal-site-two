import React from 'react'

import Layout from '../../components/Layout'
import About from './About'
import Hero from './Hero'
import Projects from './Projects'
import Stack from './Stack'

const Home = (): JSX.Element => (
  <Layout>
    <Hero />
    <About />
    <Stack />
    <Projects />
  </Layout>
)

export default Home
