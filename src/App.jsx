import { useState } from 'react'
import PortfolioHero from './components/PortfolioHero'
import WhatIDoSection from './components/WhatIDoSection'
import TechnologiesSection from './components/TechnologiesSection'
import PortfolioProjects from './components/PortfolioProjects'
import WorkingProcess from './components/WorkingProcess'
import ContactForm from './components/ContactForm'
import Footer from './components/footer'

function App() {

  return (
    <>
     <PortfolioHero/>
     <WhatIDoSection/>
  <TechnologiesSection />
  <PortfolioProjects/>
  <WorkingProcess/>
  <ContactForm/>
  <Footer/>


    </>
  )
}

export default App

