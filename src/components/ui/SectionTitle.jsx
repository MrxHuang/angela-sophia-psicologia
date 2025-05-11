import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

/**
 * Componente para títulos de sección con animaciones al hacer scroll
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título principal
 * @param {string} props.subtitle - Subtítulo o descripción
 * @param {string} props.align - Alineación del texto ('left', 'center', 'right')
 * @param {string} props.className - Clases adicionales
 * @returns {React.ReactElement} Componente SectionTitle
 */
const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  const [ref, controls] = useScrollAnimation();
  
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className={`section-title mb-8 sm:mb-10 md:mb-12 ${alignmentClasses[align]} ${className}`} ref={ref}>
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 sm:mb-4 text-primary-800"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto px-4 sm:px-6 md:px-0"
          initial="hidden"
          animate={controls}
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
