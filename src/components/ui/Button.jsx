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
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700',
    ghost: 'text-primary-600 hover:bg-primary-50 hover:text-primary-700'
  };
  
  // Tamaños
  const sizes = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-8 text-lg'
  };
  
  // Animación al hacer hover
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.button
      className={`rounded-full font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
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
