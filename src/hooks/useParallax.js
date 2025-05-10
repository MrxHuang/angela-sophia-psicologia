import { useEffect, useState, useRef } from 'react';

/**
 * Hook personalizado para crear efectos parallax basados en el scroll
 * @param {number} speed - Velocidad del efecto parallax (positivo: mismo sentido que el scroll, negativo: sentido contrario)
 * @returns {Object} - Objeto con el valor de transformación para aplicar al elemento
 */
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      // Obtener la posición del elemento en la ventana
      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const elementY = rect.top + scrollY;
      
      // Calcular el desplazamiento relativo
      const relativeOffset = (scrollY - elementY) * speed;
      setOffset(relativeOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return {
    ref,
    y: offset,
    style: { 
      transform: `translateY(${offset}px)`,
      willChange: 'transform'
    }
  };
};

export default useParallax;
