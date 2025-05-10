import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import ParallaxText from '../ui/ParallaxText';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * Componente para la sección de Servicios de la landing page
 * 
 * @returns {React.ReactElement} Componente Services
 */
const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [ref, controls] = useScrollAnimation();
  
  // Datos de los servicios
  const services = [
    {
      id: 1,
      title: 'Terapia Individual',
      shortDesc: 'Sesiones personalizadas para abordar tus necesidades específicas.',
      description: 'Sesiones personalizadas donde trabajamos juntos para abordar tus preocupaciones específicas, desarrollar estrategias de afrontamiento efectivas y alcanzar tus objetivos de bienestar emocional. Cada sesión se adapta a tus necesidades únicas.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      benefits: [
        'Atención completamente personalizada',
        'Espacio confidencial y seguro',
        'Flexibilidad de horarios',
        'Seguimiento continuo de tu progreso'
      ]
    },
    {
      id: 2,
      title: 'Terapia Online',
      shortDesc: 'Sesiones virtuales con la misma calidad que las presenciales.',
      description: 'Accede a terapia de calidad desde la comodidad de tu hogar u oficina. Las sesiones online mantienen la misma efectividad y confidencialidad que las presenciales, eliminando barreras geográficas y ahorrando tiempo de desplazamiento.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      benefits: [
        'Ahorro de tiempo en desplazamientos',
        'Accesibilidad desde cualquier ubicación',
        'Misma calidad que las sesiones presenciales',
        'Plataforma segura y confidencial'
      ]
    },
    {
      id: 3,
      title: 'Talleres Grupales',
      shortDesc: 'Experiencias de aprendizaje colectivo en temas específicos.',
      description: 'Talleres temáticos diseñados para grupos pequeños donde se abordan temas específicos como manejo del estrés, habilidades sociales, autoestima y más. Aprende en comunidad y comparte experiencias en un ambiente seguro y enriquecedor.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      benefits: [
        'Aprendizaje colaborativo',
        'Precios más accesibles',
        'Desarrollo de habilidades sociales',
        'Materiales y recursos incluidos'
      ]
    }
  ];
  
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
  
  const cardVariants = {
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

  const detailsVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section 
      id="services" 
      className="py-20 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-40 left-0 w-72 h-72 rounded-full bg-green-200/40 blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-blue-200/30 blur-2xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Mis Servicios" 
          subtitle="Descubre cómo puedo ayudarte a mejorar tu bienestar emocional"
        />
        
        {/* Texto con efecto parallax */}
        <div className="my-16">
          <ParallaxText baseVelocity={-2}>Bienestar Emocional • Crecimiento Personal • Equilibrio Mental •</ParallaxText>
        </div>
        
        {/* Tarjetas de servicios */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <div 
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-transparent cursor-pointer transition-all duration-300 h-full ${
                  activeService === service.id ? 'scale-105 border-green-300 shadow-xl' : 'hover:border-green-200'
                }`}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 rounded-xl text-green-600 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-green-800">{service.title}</h3>
                  </div>
                  
                  <p className="text-green-700 mb-4">{service.shortDesc}</p>
                  
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={detailsVariants}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-green-200 mt-4">
                          <p className="text-green-700 mb-4">{service.description}</p>
                          
                          <h4 className="font-bold text-green-800 mb-2">Beneficios:</h4>
                          <ul className="space-y-2 mb-6">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-green-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <Button variant="primary" size="md" className="w-full bg-green-500 hover:bg-green-600 text-white">
                            Solicitar información
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {activeService !== service.id && (
                    <div className="mt-auto pt-4 flex justify-center">
                      <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                        Ver más detalles
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto py-10 px-8 rounded-2xl bg-gradient-to-r from-green-100 to-blue-100 shadow-lg border border-white/50">
            <h3 className="text-2xl font-display font-bold mb-4 text-green-800">¿No estás seguro de qué servicio necesitas?</h3>
            <p className="text-green-700 mb-8 text-lg">
              Agenda una consulta inicial gratuita de 15 minutos para discutir tus necesidades y determinar el mejor enfoque para ti.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Consulta gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
