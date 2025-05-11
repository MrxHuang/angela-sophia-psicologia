import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { socialMedia } from '../../utils/config';
import Button from '../ui/Button';

/**
 * Componente de pie de página con animaciones y diseño moderno
 * 
 * @returns {React.ReactElement} Componente Footer
 */
const Footer = () => {
  const [ref, controls] = useScrollAnimation();
  
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Manejar clic en enlaces de navegación
  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-2/3 h-96 rounded-full bg-primary-50/40 blur-3xl -z-10 translate-x-1/4 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-80 rounded-full bg-secondary-50/30 blur-3xl -z-10 -translate-x-1/4 translate-y-1/3"></div>
      
      <motion.footer 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={footerVariants}
        className="bg-white/80 backdrop-blur-sm py-16 relative z-0"
      >
        {/* Newsletter / CTA superior */}
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-10 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-200/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left max-w-xl">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-primary-800">¿Listo para comenzar tu camino?</h3>
                <p className="text-lg text-neutral-700">Agenda tu primera consulta y empieza a descubrir un mejor bienestar emocional.</p>
              </div>
              <Button 
                variant="primary" 
                size="lg"
                className="min-w-[180px] shadow-md"
                onClick={(e) => handleNavLinkClick(e, '#contact')}
              >
                Contactar ahora
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Logo y descripción */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-5">
                <h3 className="text-2xl font-display font-bold">
                  <span className="text-primary-700">Ángela</span>
                  <span className="text-secondary-600 ml-1">Sophia</span>
                </h3>
              </div>
              <p className="text-neutral-600 mb-6">
                Psicóloga especializada en terapia cognitivo-conductual, ofreciendo un espacio seguro para tu bienestar emocional.
              </p>
              <div className="flex space-x-4">
                {/* Iconos de redes sociales */}
                {Object.keys(socialMedia).map((platform) => (
                  <a 
                    key={platform}
                    href={socialMedia[platform]} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-100 hover:text-primary-700 transition-colors" 
                    aria-label={platform}
                  >
                    {platform === 'instagram' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    )}
                    {platform === 'tiktok' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                      </svg>
                    )}
                    {platform === 'x' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Enlaces rápidos */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold mb-5 text-primary-800">Enlaces rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#home" 
                    onClick={(e) => handleNavLinkClick(e, '#home')}
                    className="text-neutral-600 hover:text-primary-600 transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Inicio
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => handleNavLinkClick(e, '#about')}
                    className="text-neutral-600 hover:text-primary-600 transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => handleNavLinkClick(e, '#services')}
                    className="text-neutral-600 hover:text-primary-600 transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Servicios
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavLinkClick(e, '#contact')}
                    className="text-neutral-600 hover:text-primary-600 transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Contacto
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-neutral-600 hover:text-primary-600 transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Política de privacidad
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contacto */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-5 text-primary-800">Contacto</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-primary-50/50 p-4 rounded-lg flex items-start">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary-700 mb-1">Dirección</h5>
                    <span className="text-neutral-600">{locationConfig.address}	</span>
                  </div>
                </li>
                <li className="bg-primary-50/50 p-4 rounded-lg flex items-start">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary-700 mb-1">Email</h5>
                    <span className="text-neutral-600">{contactInfo.email}</span>
                  </div>
                </li>
                <li className="bg-primary-50/50 p-4 rounded-lg flex items-start">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary-700 mb-1">Teléfono</h5>
                    <span className="text-neutral-600">{contactInfo.phone}</span>
                  </div>
                </li>
                <li className="bg-primary-50/50 p-4 rounded-lg flex items-start">
                  <div className="p-2 bg-white rounded-lg shadow-sm text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-primary-700 mb-1">Horario</h5>
                    <span className="text-neutral-600">
                      Lun - Vie: 9:00 - 18:00<br />
                      Sáb: 10:00 - 14:00
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Línea divisoria */}
          <div className="border-t border-neutral-200 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-500 text-sm mb-4 md:mb-0">
                © {currentYear} Ing Juan Ordoñez. Todos los derechos reservados.
              </p>
              <p className="text-neutral-500 text-sm">
                Diseñado con <span className="text-red-500">❤️</span> para un mejor bienestar emocional
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
