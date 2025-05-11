import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Timeline from '../components/sections/Timeline';
import Services from '../components/sections/Services';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

/**
 * Componente principal que integra todas las secciones de la landing page
 * 
 * @returns {React.ReactElement} Componente Home
 */
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Timeline />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
