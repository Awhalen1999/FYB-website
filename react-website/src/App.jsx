import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import About from './components/About/About';
import Content from './components/Content/Content';
import Steps from './components/Steps/Steps';
import Services from './components/Services/Services';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Hero />
      <Benefits />
      <About />
      <Content />
      <Steps />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
