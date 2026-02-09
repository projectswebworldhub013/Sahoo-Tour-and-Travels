import React from 'react'
import HeroSection from '../Components/HeroSection'
import OurStory from '../Components/OurStory'
import TravelExcellence from '../Components/TravelExcellence'
import ExploreVehicles from '../Components/ExploreVehicles'
import Testimonials from '../Components/Testimonials'
import CTASection from '../Components/CTASection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <OurStory/>
      <TravelExcellence/>
      <ExploreVehicles/>
      <Testimonials/>
      <CTASection/>
    </div>
  )
}

export default Home
