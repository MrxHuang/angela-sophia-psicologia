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
  // Variantes de estilo
  const variants = {
    primary: 'bg-[#5F6CAF] hover:bg-[#4A5899] text-white',
    secondary: 'bg-[#4A8FE7] hover:bg-[#337AD6] text-white',
    outline: 'border-2 border-[#5F6CAF] text-[#5F6CAF] hover:bg-[#EEF1FF] hover:border-[#4A5899]',
    ghost: 'text-[#5F6CAF] hover:bg-[#EEF1FF] hover:text-[#4A5899]'
  };
  
  // Tamaños adaptados a responsive
  const sizes = {
    sm: 'py-1 px-2 sm:px-3 text-xs sm:text-sm',
    md: 'py-1.5 sm:py-2 px-4 sm:px-5 text-sm sm:text-base',
    lg: 'py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg'
  };
  
  // Mantenemos la definición pero ya no usamos activamente estas variantes
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.button
      className={`rounded-full font-medium transition-all duration-300 flex items-center justify-center ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      initial="initial"
      whileTap={{ scale: 0.98 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
