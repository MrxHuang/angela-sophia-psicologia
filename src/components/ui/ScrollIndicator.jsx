import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente que muestra un indicador de scroll animado
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.className - Clases adicionales
 * @returns {React.ReactElement} Componente ScrollIndicator
 */
const ScrollIndicator = ({ className = '' }) => {
  return (
    <motion.div 
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: [0.3, 1, 0.3], 
        y: [0, 10, 0] 
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <span className="text-sm text-neutral-600 mb-2">Scroll</span>
      <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
        <motion.div 
          className="w-1.5 h-3 bg-primary-500 rounded-full mt-1"
          animate={{ 
            y: [0, 15, 0] 
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator; 