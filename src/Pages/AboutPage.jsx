import React from 'react'
import AboutHero from '../Components/AboutHero'
import AboutSection from '../Components/AboutSection'
import VisionMissionSection from '../Components/VisionMission'
import CTASection from '../Components/CTASection'
import Testimonials from '../Components/Testimonials'

const AboutPage = () => {
  return (
    <div>
      <AboutHero/>
      <AboutSection/>
      <VisionMissionSection/>
      <Testimonials/>
      <CTASection/>
    </div>
  )
}

export default AboutPage
