import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import useParallax from '../../hooks/useParallax';
import Threads from '../ui/Threads';

/**
 * Componente Hero para la sección principal de la landing page
 * 
 * @returns {React.ReactElement} Componente Hero
 */
const Hero = () => {
  // Detectar dispositivos de bajo rendimiento
  const [isLowPerf, setIsLowPerf] = useState(false);
  
  useEffect(() => {
    // Detector básico para dispositivos móviles o de bajo rendimiento
    const userAgent = navigator.userAgent || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    // Detector de CPU menos potente (detección básica)
    const cpuCores = navigator.hardwareConcurrency || 4;
    const isLowCPU = cpuCores <= 4;
    
    // Comprobación de memoria disponible (solo funciona en Chrome)
    const isLowRAM = navigator.deviceMemory && navigator.deviceMemory < 4;
    
    setIsLowPerf(isMobile || isLowCPU || isLowRAM);
  }, []);
  
  // Efectos parallax para diferentes elementos
  const parallaxBg = useParallax(0.2);
  const parallaxText = useParallax(isLowPerf ? -0.05 : -0.1);
  
  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
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
          amplitude={0.8}
          distance={0}
          enableMouseInteraction={!isLowPerf}
          lowPerformanceMode={isLowPerf}
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
            <div className="relative z-10">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.span 
                  className="block font-display font-bold text-[#2c3655] drop-shadow-sm"
                  variants={titleVariants}
                >
                  Encuentra tu
                </motion.span>
                <motion.span 
                  className="font-display font-bold text-primary-600 drop-shadow-sm"
                  variants={titleVariants}
                >
                  equilibrio emocional
                </motion.span>
              </motion.h1>
            </div>
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
