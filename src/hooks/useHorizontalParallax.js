import { useEffect, useState } from 'react';

/**
 * Hook personalizado para crear un efecto de parallax horizontal al hacer scroll
 * @param {number} intensity - La intensidad del efecto (positiva: se mueve hacia la derecha, negativa: se mueve hacia la izquierda)
 * @returns {Object} Valores de transformación para aplicar al elemento
 */
const useHorizontalParallax = (intensity = 0.1) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const newOffset = scrollY * intensity;
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return {
    x: offset,
    style: {
      transform: `translateX(${offset}px)`,
      willChange: 'transform'
    }
  };
};

export default useHorizontalParallax; 