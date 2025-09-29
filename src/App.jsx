import { useEffect, useState } from 'react'
import PortfolioHero from './components/PortfolioHero'
import WhatIDoSection from './components/WhatIDoSection'
import TechnologiesSection from './components/TechnologiesSection'
import PortfolioProjects from './components/PortfolioProjects'
import WorkingProcess from './components/WorkingProcess'
import ContactForm from './components/ContactForm'
import Footer from './components/footer'
import Layout from './Layout'

function App() {
    const [loading, setLoading] = useState(true)
  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
    if (loading) return <div>Loading the page...</div>;

  return (
    <>
    <Layout> 
     <PortfolioHero/>
     <WhatIDoSection/>
      <TechnologiesSection />
      <PortfolioProjects/>
      <WorkingProcess/>
      <ContactForm/>
      <Footer/>
</Layout>

    </>
  )
}

export default App

