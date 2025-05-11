import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import aboutImage from '../../assets/images/Langela.png';
import useParallax from '../../hooks/useParallax';

/**
 * Componente para la sección "Sobre mí" de la landing page
 * 
 * @returns {React.ReactElement} Componente About
 */
const About = () => {
  const [ref, controls] = useScrollAnimation();
  const parallaxImage = useParallax(0.15);
  
  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Datos sobre valores y experiencia
  const values = [
    {
      title: 'Empatía',
      description: 'Comprendo tus emociones y experiencias desde una perspectiva respetuosa y sin juicios.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Profesionalismo',
      description: 'Trabajo con los más altos estándares éticos y metodológicos para ofrecerte la mejor atención.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Confidencialidad',
      description: 'Tu privacidad es fundamental. Toda información compartida se mantiene bajo estricta confidencialidad.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <motion.div 
        className="absolute top-40 right-0 w-96 h-96 rounded-full bg-primary-100/40 blur-3xl -z-10"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-secondary-100/40 blur-3xl -z-10"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-accent-100/30 blur-2xl -z-10"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Sobre mí" 
          subtitle="Conoce más sobre mi trayectoria y enfoque terapéutico"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mt-12">
          {/* Contenido sobre mí - Primero en móvil */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="order-1 lg:order-2 pt-4 lg:pt-0"
          >
            <motion.h3 
              className="text-3xl font-display font-bold mb-6 text-primary-700"
              variants={itemVariants}
            >
              Ángela Sophia
            </motion.h3>
            
            <motion.p 
              className="text-lg text-neutral-700 mb-6"
              variants={itemVariants}
            >
              Soy psicóloga con un enfoque fresco y actualizado en terapia cognitivo-conductual. Mi formación académica reciente me ha permitido incorporar las técnicas y métodos más innovadores para ayudar a personas a superar desafíos emocionales y mejorar su calidad de vida.
            </motion.p>
            
            <motion.p 
              className="text-lg text-neutral-700 mb-8"
              variants={itemVariants}
            >
              Mi filosofía se centra en crear un espacio seguro donde puedas expresarte libremente, comprender tus patrones de pensamiento y desarrollar herramientas efectivas para gestionar tus emociones y alcanzar tus metas personales.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-primary-600">Empatía</span>
                <span className="text-neutral-600">Enfoque personalizado</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-primary-600">Innovación</span>
                <span className="text-neutral-600">Técnicas actualizadas</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-primary-600">Compromiso</span>
                <span className="text-neutral-600">Con tu bienestar</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-4">Formación académica</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Licenciatura en Psicología - Universidad Católica de Pereira</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Formación continua en Terapia Cognitivo-Conductual</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seminarios especializados en Manejo del Estrés y Ansiedad</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          
          {/* Imagen - Segunda en móvil, primera en desktop */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] max-w-sm sm:max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden order-2 lg:order-1 mb-8 lg:mb-0">
            {/* Fondo de color sólido como fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 rounded-2xl"></div>
            
            {/* Imagen del profesional */}
            <img 
              src={aboutImage} 
              alt="Ángela Sophia" 
              className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl" 
            />
            
            {/* Decoración */}
            <div className="absolute -bottom-5 -left-5 w-20 h-20 md:w-32 md:h-32 bg-primary-100 rounded-full opacity-70 blur-md"></div>
            <div className="absolute -top-5 -right-5 w-16 h-16 md:w-24 md:h-24 bg-secondary-100 rounded-full opacity-70 blur-md"></div>
          </div>
        </div>
        
        {/* Sección de valores */}
        <div className="mt-16 lg:mt-20">
          <h3 className="text-2xl font-display font-bold mb-8 text-center">Mis valores profesionales</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100 rounded-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
