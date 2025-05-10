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
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-200/40 blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-secondary-200/40 blur-3xl"
          animate={{ 
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-accent-100/30 blur-2xl"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-primary-100/30 blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
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

      {/* Elementos decorativos adicionales estilo glassmorphism */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary-400/30 via-secondary-300/20 to-accent-200/40 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent-300/20 via-primary-300/20 to-secondary-400/30 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary-200/20 via-secondary-200/30 to-accent-100/20 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>
      </div>
      
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
            Soy Ángela Sophia, psicóloga con un enfoque innovador en terapia cognitivo-conductual. 
            Te acompaño en tu camino hacia el bienestar emocional con una perspectiva fresca y métodos actualizados.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto"
            variants={itemVariants}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="w-full shadow-md"
              onClick={() => {
                const aboutElement = document.getElementById('about');
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Conocer más
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
