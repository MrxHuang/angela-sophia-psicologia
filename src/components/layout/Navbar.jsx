import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import useSmoothScroll from '../../hooks/useSmoothScroll';

/**
 * Componente de navegación principal con animaciones y diseño responsive
 * 
 * @returns {React.ReactElement} Componente Navbar
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejar clic en enlaces de navegación
  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      scrollTo(targetElement, {
        offset: -80,
        duration: 1500,
        easing: [0.25, 0.0, 0.35, 1.0]
      });
      
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  // Enlaces de navegación
  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' }
  ];

  // Variantes para animaciones
  const navbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={navbarVariants}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
      }}
      className={`transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavLinkClick(e, '#home')}
          className="flex items-center"
        >
          <span className="text-2xl font-display font-bold text-primary-700 mr-1">Ángela</span>
          <span className="text-2xl font-display font-bold text-secondary-600">Sophia</span>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="text-neutral-800 hover:text-primary-600 transition-colors font-medium relative group px-2 py-1 rounded-md hover:bg-primary-50"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <Button 
            variant="primary" 
            size="md" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-full transition-all duration-300"
          >
            Agendar cita
          </Button>
        </nav>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-neutral-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed top-16 left-0 right-0 bottom-0 glass z-40 flex flex-col"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col h-full">
              <ul className="flex flex-col space-y-6 text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xl font-medium text-neutral-800 hover:text-primary-600"
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto mb-10 flex justify-center">
                <Button variant="primary" size="lg" className="w-full max-w-xs">
                  Agendar cita
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
