import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';
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
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-yellow-200/40 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-green-200/40 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-200/30 blur-2xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Sobre mí" 
          subtitle="Conoce más sobre mi trayectoria y enfoque terapéutico"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Imagen estática */}
          <motion.div 
            className="h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1 lg:sticky lg:top-32"
          >
            {/* Aquí irá la imagen del profesional cuando la proporcione el cliente */}
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 rounded-2xl">
              <div className="text-neutral-400 text-lg border-2 border-dashed border-neutral-300 rounded-lg p-8 bg-white/50">
                Espacio para tu fotografía profesional
              </div>
            </div>
            
            {/* Decoración */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-100 rounded-full opacity-70 blur-md"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-100 rounded-full opacity-70 blur-md"></div>
          </motion.div>
          
          {/* Contenido sobre mí */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="order-1 lg:order-2"
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
              Soy psicóloga clínica con más de 8 años de experiencia ayudando a personas a superar desafíos emocionales y mejorar su calidad de vida. Me especializo en terapia cognitivo-conductual, un enfoque basado en evidencia que ha demostrado excelentes resultados.
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
                <span className="block text-3xl font-bold text-primary-600">+500</span>
                <span className="text-neutral-600">Pacientes atendidos</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary-600">8+</span>
                <span className="text-neutral-600">Años de experiencia</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary-600">3</span>
                <span className="text-neutral-600">Especializaciones</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-4">Formación académica</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Licenciatura en Psicología - Universidad Nacional</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maestría en Terapia Cognitivo-Conductual - Universidad Central</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Especialización en Manejo del Estrés y Ansiedad - Instituto de Salud Mental</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Sección de valores */}
        <div className="mt-20">
          <h3 className="text-2xl font-display font-bold mb-10 text-center">Mis valores profesionales</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary-50 rounded-full">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
