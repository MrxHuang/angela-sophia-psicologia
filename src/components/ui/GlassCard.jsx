import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * Componente de tarjeta con efecto glassmorphism y animaciones
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido de la tarjeta
 * @param {string} props.className - Clases adicionales
 * @param {Object} props.rest - Resto de propiedades
 * @returns {React.ReactElement} Componente GlassCard
 */
const GlassCard = ({ children, className = '', ...rest }) => {
  const [ref, controls] = useScrollAnimation();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const hoverVariants = {
    initial: { 
      scale: 1,
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)"
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 15px 40px 0 rgba(31, 38, 135, 0.35)"
    },
    tap: { 
      scale: 0.98 
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: cardVariants.hidden,
        visible: cardVariants.visible
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }}
      className={`glass rounded-2xl p-6 md:p-8 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
