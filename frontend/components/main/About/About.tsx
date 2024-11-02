import React from 'react'
import Banner from './components/Banner/Banner'

import "./About.scss"
import Essentials from './components/Essentials/Essentials'


const About = () => {
  return (
    <section className='itp-c-section--about'>
        <Banner/>
        <Essentials/>
    </section>
  )
}

export default About