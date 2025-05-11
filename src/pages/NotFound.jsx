import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FuzzyText from '../components/ui/FuzzyText';
import Threads from '../components/ui/Threads';
import Button from '../components/ui/Button';

/**
 * Página 404 Not Found
 * 
 * @returns {React.ReactElement} Componente NotFound
 */
const NotFound = () => {
  const [hoverIntensity, setHoverIntensity] = useState(0.5);
  const [enableHover, setEnableHover] = useState(true);
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
    
    const lowPerf = isMobile || isLowCPU || isLowRAM;
    setIsLowPerf(lowPerf);
    
    // Deshabilitar hover en dispositivos de bajo rendimiento para mejorar performance
    if (lowPerf) {
      setEnableHover(false);
      setHoverIntensity(0.3);
    }
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden py-20 bg-white">
      {/* Fondo con ondas animadas (Threads) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Threads
          amplitude={isLowPerf ? 0.7 : 1}
          distance={0}
          enableMouseInteraction={!isLowPerf}
          lowPerformanceMode={isLowPerf}
          color={[0.37, 0.42, 0.69]} // Color primario (violeta-azul) de la página
        />
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isLowPerf ? 0.3 : 0.5 }}
        >
          <div className="relative mb-8 flex justify-center">
            <div className="flex justify-center items-center">
              <FuzzyText 
                fontSize={isLowPerf ? "clamp(6rem, 15vw, 12rem)" : "clamp(8rem, 20vw, 16rem)"}
                fontWeight={900}
                color="#5F6CAF" // Color primario (similar al primary-600)
                baseIntensity={isLowPerf ? 0.15 : 0.2}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
                optimizePerformance={isLowPerf}
              >
                404
              </FuzzyText>
            </div>
            
            {/* Efecto de glass para mejorar visibilidad */}
            <div className="absolute inset-0 bg-white/30 rounded-xl -z-[1] blur-xl"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: isLowPerf ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isLowPerf ? 0.2 : 0.3, duration: isLowPerf ? 0.4 : 0.6 }}
            className="relative mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-4">
              Página no encontrada
            </h1>
            <p className="text-lg text-neutral-700 max-w-xl mx-auto">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            
            {/* Efecto de glass para mejorar visibilidad */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] rounded-lg -z-[1]"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: isLowPerf ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isLowPerf ? 0.3 : 0.5, duration: isLowPerf ? 0.4 : 0.6 }}
          >
            <Link to="/">
              <Button 
                variant="outline" 
                size="lg"
                className="shadow-md bg-primary-50 border-primary-200 hover:bg-primary-100 relative z-10"
              >
                Volver al inicio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound; 