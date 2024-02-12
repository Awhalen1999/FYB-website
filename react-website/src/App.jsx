import React from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ContentBanner from './components/ContentBanner/ContentBanner';
import Content from './components/Content/Content';
import Services from './components/Services/Services';
import CTA from './components/CTA/CTA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <div className='content-container'>
        <ContentBanner />
        <Content />
      </div>
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
