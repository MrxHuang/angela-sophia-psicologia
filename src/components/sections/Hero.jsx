import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import useParallax from '../../hooks/useParallax';

/**
 * Componente Hero para la sección principal de la landing page
 * 
 * @returns {React.ReactElement} Componente Hero
 */
const Hero = () => {
  // Efectos parallax para diferentes elementos
  const parallaxBg = useParallax(0.2);
  const parallaxText = useParallax(-0.1);
  
  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const decorationVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.8,
      transition: { 
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden py-20"
    >
      {/* Fondo con elementos decorativos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-green-200/40 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-200/40 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-yellow-200/30 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-pink-200/30 blur-2xl"></div>
      </div>
      
      {/* Elementos decorativos */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-secondary-300/20 blur-3xl"
        initial="hidden"
        animate="visible"
        variants={decorationVariants}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-primary-300/20 blur-3xl"
        initial="hidden"
        animate="visible"
        variants={decorationVariants}
        transition={{ delay: 0.3 }}
      ></motion.div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={parallaxText.style}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            <span className="block">Encuentra tu</span>
            <span className="text-primary-600">equilibrio emocional</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Soy Ángela Sophia, psicóloga especializada en terapia cognitivo-conductual. 
            Te acompaño en tu camino hacia el bienestar emocional con un enfoque personalizado y profesional.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto"
            variants={itemVariants}
          >
            <Button 
              variant="primary" 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto"
            >
              Agendar una consulta
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-green-500 text-green-600 hover:bg-green-50 w-full sm:w-auto"
            >
              Conocer más
            </Button>
          </motion.div>
          
          {/* Indicador de scroll */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 1.5,
                duration: 0.8,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
          </motion.div>
        </motion.div>
      </div>
      
      {/* Espacio para imagen o ilustración */}
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-1/2 md:h-2/3 z-0 opacity-20 md:opacity-100">
        {/* Aquí irá la imagen principal cuando la proporcione el cliente */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-neutral-300 text-lg border-2 border-dashed border-neutral-300 rounded-lg p-8 bg-white/50">
            Espacio para imagen principal
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
