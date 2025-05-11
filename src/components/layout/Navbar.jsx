import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

/**
 * Componente de navegación principal con animaciones y diseño responsive
 * 
 * @returns {React.ReactElement} Componente Navbar
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      // Scroll suave con animación mejorada
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px es la altura del navbar
      
      // Animación suave con efecto de desaceleración
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000; // duración en milisegundos
      let start = null;
      
      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Función de interpolación con efecto easeInOutQuad
        const easeInOutQuad = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      requestAnimationFrame(animation);
      
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
        width: '100%'
      }}
      className={`transition-all duration-300 ${
        isScrolled 
          ? 'py-2 md:py-3 bg-white/95 shadow-lg backdrop-blur-sm' 
          : 'py-3 md:py-5 bg-white/90 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavLinkClick(e, '#home')}
          className="flex items-center transition-all duration-300 hover:opacity-80"
        >
          <span className="text-xl md:text-2xl font-display font-bold text-primary-700 mr-1">Ángela</span>
          <span className="text-xl md:text-2xl font-display font-bold text-secondary-600">Sophia</span>
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <ul className="flex space-x-2 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="text-neutral-800 hover:text-primary-600 transition-colors font-medium relative group px-2 py-1 rounded-md hover:bg-primary-50/70"
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
            className="shadow-sm hover:shadow-md ml-3"
            onClick={(e) => handleNavLinkClick(e, '#services')}
          >
            <span className="hidden sm:inline">Agendar</span> cita
          </Button>
        </nav>

        {/* Botón de menú móvil */}
        <motion.button
          className="md:hidden text-neutral-800 focus:outline-none bg-primary-50/80 p-2 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary-700"
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
        </motion.button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed top-[53px] left-0 right-0 bottom-0 z-40 flex flex-col"
          >
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md -z-10"></div>
            <nav className="container mx-auto px-6 py-8 flex flex-col h-full">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navLinks.indexOf(link) * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-xl font-medium text-neutral-800 hover:text-primary-600 flex items-center py-2 border-b border-neutral-100"
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                    >
                      <span className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                        <span className="text-primary-600 font-bold">{link.name.charAt(0)}</span>
                      </span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="mt-auto mb-10 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="bg-primary-50/50 w-full p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">¿Necesitas ayuda?</h3>
                  <p className="text-neutral-700 mb-4">Agenda una cita y comienza tu camino hacia el bienestar emocional.</p>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full shadow-md"
                    onClick={(e) => handleNavLinkClick(e, '#services')}
                  >
                    Agendar cita ahora
                  </Button>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
