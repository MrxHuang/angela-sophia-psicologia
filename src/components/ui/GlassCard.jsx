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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`glass rounded-2xl p-6 md:p-8 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
