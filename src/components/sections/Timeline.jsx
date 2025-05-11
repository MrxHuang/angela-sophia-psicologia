import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import GlassCard from '../ui/GlassCard';

/**
 * Componente Timeline para mostrar el proceso de terapia
 * 
 * @returns {React.ReactElement} Componente Timeline
 */
const Timeline = () => {
  const [ref, controls] = useScrollAnimation();
  
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

  // Datos del proceso terapéutico
  const processSteps = [
    {
      id: 1,
      title: 'Primera Consulta',
      description: 'Nos conocemos y evalúo tu situación actual. Establezco una comprensión inicial de tus necesidades y objetivos.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      timeframe: '60 minutos'
    },
    {
      id: 2,
      title: 'Evaluación y Diagnóstico',
      description: 'Realizo una evaluación detallada utilizando diferentes herramientas y técnicas para comprender en profundidad tu situación.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      timeframe: '1-2 sesiones'
    },
    {
      id: 3,
      title: 'Plan de Tratamiento',
      description: 'Desarrollamos juntos un plan personalizado con objetivos claros y estrategias específicas adaptadas a tus necesidades.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      timeframe: '1 sesión'
    },
    {
      id: 4,
      title: 'Proceso Terapéutico',
      description: 'Implementamos el plan utilizando diferentes técnicas cognitivo-conductuales. Trabajamos en desarrollar nuevas habilidades y perspectivas.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      timeframe: '6-12 sesiones'
    },
    {
      id: 5,
      title: 'Evaluación de Progreso',
      description: 'Revisamos regularmente los avances, ajustamos estrategias según sea necesario y celebramos los logros alcanzados.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      timeframe: 'Continuo'
    }
  ];

  // Datos de una sesión típica
  const sessionSteps = [
    {
      id: 1,
      title: 'Bienvenida',
      description: 'Creación de un espacio seguro y cómodo para iniciar la sesión.',
      time: '0-5 min'
    },
    {
      id: 2,
      title: 'Revisión',
      description: 'Conversamos sobre cómo te ha ido desde la última sesión y revisamos tareas asignadas.',
      time: '5-15 min'
    },
    {
      id: 3,
      title: 'Trabajo Terapéutico',
      description: 'Abordamos el tema central de la sesión usando técnicas específicas según tus necesidades.',
      time: '15-45 min'
    },
    {
      id: 4,
      title: 'Asignación de Tareas',
      description: 'Definimos ejercicios o prácticas para realizar entre sesiones y reforzar lo aprendido.',
      time: '45-50 min'
    },
    {
      id: 5,
      title: 'Cierre',
      description: 'Resumen de lo trabajado y programación de la próxima sesión.',
      time: '50-60 min'
    }
  ];

  return (
    <section 
      id="timeline" 
      className="py-12 sm:py-16 relative overflow-hidden bg-gradient-to-b from-white to-primary-50"
    >
      {/* Elementos decorativos - similares a los de la sección About */}
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
      
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Proceso Terapéutico" 
          subtitle="Conoce cómo trabajamos juntos en tu bienestar emocional"
        />
        
        {/* Timeline del proceso terapéutico */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-8 sm:mt-12"
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 sm:mb-8 text-primary-800 text-center">
            El Camino hacia tu Bienestar
          </h3>
          
          <div className="relative">
            {/* Pasos del proceso */}
            <div className="space-y-8 md:space-y-0 relative">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  className={`md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } mb-12 md:mb-20 relative`}
                  variants={itemVariants}
                >
                  {/* Conector decorativo central */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-white rounded-full shadow-md border-2 border-primary-300 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full shadow-[0_0_15px_rgba(92,124,250,0.5)]"></div>
                    </div>
                  </div>
                  
                  {/* Línea conectora con gradiente para el timeline vertical */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2" style={{
                      top: '50%',
                      height: '100%',
                      zIndex: 0
                    }}>
                      <div className="h-full w-1 bg-gradient-to-b from-primary-300/70 to-secondary-400/70 rounded-full shadow-md relative">
                        <div className="absolute inset-0 w-full h-full animate-pulse opacity-50 bg-gradient-to-b from-primary-200 to-secondary-300 rounded-full"></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Contenido del paso */}
                  <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <GlassCard className="h-full hover:shadow-lg transition-all duration-300 border border-primary-100/50 hover:border-primary-200/50">
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="p-3 bg-primary-50 rounded-full text-primary-600 flex-shrink-0 shadow-md">
                          {step.icon}
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-lg font-bold text-primary-800">
                              {step.title}
                            </h4>
                            <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full shadow-sm">
                              {step.timeframe}
                            </span>
                          </div>
                          {step.description}
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                  
                  {/* Espacio vacío para mantener el diseño alternado en desktop */}
                  <div className="hidden md:block md:w-[45%]"></div>
                  
                  {/* Conector en dispositivos móviles */}
                  {index < processSteps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-primary-300 to-secondary-400 rounded-full shadow-md relative">
                        <div className="absolute inset-0 w-full h-full animate-pulse opacity-50 bg-gradient-to-b from-primary-200 to-secondary-300 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Estructura de una sesión típica */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-16 sm:mt-24"
        >
          <h3 className="text-xl sm:text-2xl font-display font-bold mb-10 sm:mb-14 text-primary-800 text-center">
            ¿Cómo es una Sesión Típica?
          </h3>
          
          <div className="max-w-5xl mx-auto">
            {/* Línea de tiempo horizontal con marcadores */}
            <div className="relative mb-6 hidden sm:block">
              <div className="h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200 w-full absolute top-6"></div>
              
              <div className="flex justify-between relative">
                {sessionSteps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center relative">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-primary-300 flex items-center justify-center text-primary-700 font-bold text-lg shadow-md z-10">
                      {step.id}
                    </div>
                    <div className="text-xs font-medium text-primary-600 mt-2 bg-white px-2 py-1 rounded-md shadow-sm">
                      {step.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contenido de los pasos */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {sessionSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="group"
                  variants={itemVariants}
                  whileInView={{ 
                    opacity: [0, 1],
                    transition: {
                      duration: 0.7,
                      delay: index * 0.1
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={`flex flex-col sm:flex-row sm:items-stretch`}>
                      {/* Marcador móvil */}
                      <div className="sm:hidden flex items-center px-4 pt-4">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold mr-2">
                          {step.id}
                        </div>
                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                          {step.time}
                        </span>
                      </div>
                      
                      {/* Barra lateral con color */}
                      <div className={`w-full sm:w-1.5 h-1.5 sm:h-auto ${
                        index === 0 ? 'bg-blue-400' : 
                        index === 1 ? 'bg-indigo-400' : 
                        index === 2 ? 'bg-violet-500' : 
                        index === 3 ? 'bg-fuchsia-400' : 
                        'bg-rose-400'
                      }`}></div>
                      
                      {/* Contenido */}
                      <div className="p-4 sm:p-5 flex-1">
                        <h4 className="text-lg font-bold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {step.title}
                        </h4>
                        <p className="text-neutral-600">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Indicador de tiempo en desktop */}
                      <div className="hidden sm:flex items-center px-4 text-neutral-500 text-sm">
                        <div className="w-[1px] h-8 bg-neutral-200 mr-4"></div>
                        {step.time}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Flecha indicadora */}
            <div className="flex justify-center mt-8">
              <div className="relative h-16 flex flex-col items-center">
                <motion.div 
                  className="h-12 w-0.5 bg-gradient-to-b from-primary-300 to-primary-100"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
                <motion.div 
                  className="text-primary-600 mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              </div>
            </div>
            
            {/* Resumen */}
            <motion.div 
              className="text-center mt-2 text-sm text-neutral-500 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Sesiones de 60 minutos - Frecuencia semanal recomendada
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 