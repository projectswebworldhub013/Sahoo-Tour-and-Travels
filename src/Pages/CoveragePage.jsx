import React from 'react'
import CoverageHero from '../Components/CoverageHero'
import CoverageIntro from '../Components/CoverageIntro'
import CoverageGrid from '../Components/CoverageGrid'
import MapsSection from '../Components/MapsSection'
import CTASection from '../Components/CTASection'

const CoveragePage = () => {
  return (
    <div>
      <CoverageHero />
      <CoverageIntro/>
      <CoverageGrid/>
      <MapsSection/>
      <CTASection/>
    </div>
  )
}

export default CoveragePage
