import React, { Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LazyWrapper from '../components/LazyWrapper';

// Lazy loading de secciones pesadas
const Hero = lazy(() => import('../components/sections/Hero'));
const About = lazy(() => import('../components/sections/About'));
const Services = lazy(() => import('../components/sections/Services'));

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
        <LazyWrapper>
          <Hero />
        </LazyWrapper>
        <LazyWrapper>
          <About />
        </LazyWrapper>
        <LazyWrapper>
          <Services />
        </LazyWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
