import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente de botón personalizado con animaciones y variantes de estilo
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.variant - Variante del botón ('primary', 'secondary', 'outline', 'ghost')
 * @param {string} props.size - Tamaño del botón ('sm', 'md', 'lg')
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {Function} props.onClick - Función a ejecutar al hacer clic
 * @param {string} props.className - Clases adicionales
 * @param {Object} props.rest - Resto de propiedades
 * @returns {React.ReactElement} Componente Button
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  className = '',
  ...rest 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-[#5F6CAF] to-[#4A5899] hover:from-[#4A5899] hover:to-[#3A4780] text-white shadow-lg hover:shadow-xl hover:shadow-[#5F6CAF]/30 ',
    secondary: 'bg-gradient-to-r from-[#4A8FE7] to-[#337AD6] hover:from-[#337AD6] hover:to-[#2A6BB8] text-white shadow-lg hover:shadow-xl hover:shadow-[#4A8FE7]/30 ',
    outline: 'border-2 border-[#5F6CAF] text-[#5F6CAF] hover:bg-gradient-to-r hover:from-[#5F6CAF] hover:to-[#4A5899] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#5F6CAF]/30 ',
    ghost: 'text-[#5F6CAF] hover:bg-gradient-to-r hover:from-[#EEF1FF] hover:to-[#E0E7FF] hover:text-[#4A5899] hover:shadow-md '
  };
  
  const sizes = {
    sm: 'py-1 px-2 sm:px-3 text-xs sm:text-sm',
    md: 'py-1.5 sm:py-2 px-4 sm:px-5 text-sm sm:text-base',
    lg: 'py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg'
  };
  
  const buttonVariants = {
    initial: { 
      y: 0,
      boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      y: -2,
      boxShadow: "0 8px 25px 0 rgba(95, 108, 175, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    tap: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 20
      }
    }
  };

  return (
    <motion.button
      className={`rounded-full font-medium transition-all duration-300 flex items-center justify-center ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
