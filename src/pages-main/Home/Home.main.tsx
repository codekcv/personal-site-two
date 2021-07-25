import React from 'react'

import Layout from '../../components/Layout'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stack from './components/Stack'

const Home = (): JSX.Element => (
  <Layout>
    <Hero />
    <About />
    <Stack />
    <Projects />
  </Layout>
)

export default Home
