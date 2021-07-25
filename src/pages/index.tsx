import React from 'react'

import Layout from '../components/Layout'
import About from '../pages-main/Home/About'
import Hero from '../pages-main/Home/Hero'
import Projects from '../pages-main/Home/Projects'
import Stack from '../pages-main/Home/Stack'

const Home = (): JSX.Element => (
  <Layout>
    <Hero />
    <About />
    <Stack />
    <Projects />
  </Layout>
)

export default Home
