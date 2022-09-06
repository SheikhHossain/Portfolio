import React from 'react'
import Header from './Components/header/header'
import Nav from './Components/Nav/Nav'
import About from './Components/about/About'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portfolio from './Components/portfolio/portfolio'
import Testimonial from './Components/testimonial/testimonial'
import Contact from './Components/contacts/contacts'
import Footer from './Components/footer/footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />

    </>
  )
}

export default App