import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import ParallaxText from '../ui/ParallaxText';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { generateWhatsAppUrl, serviceMessages } from '../../utils/whatsappUtils';

/**
 * Componente para la sección de Servicios de la landing page
 * 
 * @returns {React.ReactElement} Componente Services
 */
const Services = () => {
  const [ref, controls] = useScrollAnimation();
  
  // Datos de los servicios
  const services = [
    {
      id: 1,
      key: 'individual',
      title: 'Terapia Individual',
      shortDesc: 'Sesiones personalizadas para abordar tus necesidades específicas.',
      description: 'Sesiones personalizadas donde trabajamos juntos para abordar tus preocupaciones específicas, desarrollar estrategias de afrontamiento efectivas y alcanzar tus objetivos de bienestar emocional. Cada sesión se adapta a tus necesidades únicas.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      key: 'online',
      title: 'Terapia Online',
      shortDesc: 'Sesiones virtuales con la misma calidad que las presenciales.',
      description: 'Accede a terapia de calidad desde la comodidad de tu hogar u oficina. Las sesiones online mantienen la misma efectividad y confidencialidad que las presenciales, eliminando barreras geográficas y ahorrando tiempo de desplazamiento.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      key: 'grupal',
      title: 'Talleres Grupales',
      shortDesc: 'Experiencias de aprendizaje colectivo en temas específicos.',
      description: 'Talleres temáticos diseñados para grupos pequeños donde se abordan temas específicos como manejo del estrés, habilidades sociales, autoestima y más. Aprende en comunidad y comparte experiencias en un ambiente seguro y enriquecedor.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Función para abrir WhatsApp con el mensaje correspondiente
  const openWhatsApp = (serviceKey) => {
    const url = generateWhatsAppUrl(serviceMessages[serviceKey]);
    window.open(url, '_blank');
  };

  return (
    <section 
      id="services" 
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-white to-primary-50"
      ref={ref}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Burbujas decorativas - ocultamos algunas en móvil para mejor rendimiento */}
      <motion.div 
        className="absolute top-40 left-0 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-primary-200/40 blur-3xl -z-10"
        animate={{ 
          y: [0, -25, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-40 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-secondary-200/40 blur-3xl -z-10 hidden sm:block"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -15, 0]
        }}
        transition={{
          duration: 17,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-1/2 left-1/3 w-40 sm:w-48 h-40 sm:h-48 rounded-full bg-accent-100/30 blur-2xl -z-10 hidden sm:block"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Mis Servicios" 
          subtitle="Descubre cómo puedo ayudarte a mejorar tu bienestar emocional"
        />
        
        {/* Texto con efecto parallax - oculto en móvil muy pequeño */}
        <div className="my-10 sm:my-12 md:my-16 overflow-hidden">
          <ParallaxText baseVelocity={-2}>Bienestar Emocional • Crecimiento Personal • Equilibrio Mental •</ParallaxText>
        </div>
        
        {/* Tarjetas de servicios */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 glass h-full">
                <div className="flex flex-col h-full">
                  <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 bg-primary-50 rounded-full text-primary-600 mb-3 sm:mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary-800">{service.title}</h3>
                  </div>
                  
                  <p className="text-neutral-700 mb-4 sm:mb-6 text-center font-medium text-sm sm:text-base">{service.shortDesc}</p>
                  
                  <div className="pt-4 sm:pt-6 border-t border-neutral-100 mt-2">
                    <p className="text-neutral-600 mb-4 sm:mb-5 text-sm sm:text-base font-normal">{service.description}</p>
                    
                    <h4 className="font-bold text-primary-800 mb-2 sm:mb-3 text-base">Beneficios:</h4>
                    <ul className="space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-neutral-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="primary" 
                      size="md" 
                      className="w-full text-sm sm:text-base"
                      onClick={() => openWhatsApp(service.key)}
                    >
                      <span className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                        Contactar vía WhatsApp
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="max-w-3xl mx-auto py-8 sm:py-10 px-6 sm:px-8 rounded-2xl glass">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4 text-primary-800">¿No estás seguro de qué servicio necesitas?</h3>
            <p className="text-neutral-700 mb-6 sm:mb-8 text-base sm:text-lg">
              Agenda una consulta inicial gratuita de 15 minutos para discutir tus necesidades y determinar el mejor enfoque para ti.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="px-6 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => openWhatsApp('consulta')}
              >
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  Consulta gratuita
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;