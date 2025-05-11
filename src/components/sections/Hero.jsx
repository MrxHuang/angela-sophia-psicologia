import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import useParallax from '../../hooks/useParallax';
import BlurText from '../ui/BlurText';
import Threads from '../ui/Threads';

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
      className="min-h-screen relative flex items-center justify-center overflow-hidden py-20 bg-white"
    >
      {/* Fondo con Threads - Solo visible en dispositivos no móviles */}
      <div className="absolute inset-0 z-0 opacity-30 hidden md:block">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
          color={[0.37, 0.42, 0.69]} // Color primario (violeta-azul) de la página
        />
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
          <motion.div 
            className="relative mb-6"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold relative z-10"
            >
              <BlurText 
                text="Encuentra tu" 
                className="block font-bold text-[#2c3655] drop-shadow-sm" 
                delay={100}
                direction="top"
                animateBy="words"
                stepDuration={0.5}
              />
              <BlurText 
                text="equilibrio emocional" 
                className="text-primary-600 font-bold drop-shadow-sm" 
                delay={100}
                direction="top"
                animateBy="words"
                stepDuration={0.5}
              />
            </motion.h1>
            {/* Sutil fondo para mejorar contraste */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] rounded-xl -z-[1]"></div>
          </motion.div>
          
          <motion.div 
            className="relative mb-8"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto relative z-10"
            >
              Soy Ángela Sophia, psicóloga con un enfoque innovador en terapia cognitivo-conductual. 
              Te acompaño en tu camino hacia el bienestar emocional con una perspectiva fresca y métodos actualizados.
            </motion.p>
            {/* Sutil fondo para mejorar contraste */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] rounded-lg -z-[1]"></div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto"
            variants={itemVariants}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="w-full shadow-md relative z-10 bg-primary-50 border-primary-200 text-primary-800 hover:bg-primary-100"
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
