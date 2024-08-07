import React from 'react'
import LandingHeader from './LandingHeader'
import LandingHero from './LandingHero'

import LandingFooter from './LandingFooter'

import ServicesOffered from './ServicesOffered'

import Features from './Features'
const LandingHomeScreen = () => {
  return (
    <div>
              <div data-bs-spy="scroll" class="scrollspy-example">
     
      <LandingHero></LandingHero>
<Features></Features>
   
      <ServicesOffered></ServicesOffered>
     
      <LandingFooter></LandingFooter>
      </div>
    </div>
  )
}

export default LandingHomeScreen
