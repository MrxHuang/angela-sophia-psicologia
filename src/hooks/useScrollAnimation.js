import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Hook personalizado para animar elementos cuando entran en el viewport
 * @param {Object} options - Opciones de configuración
 * @param {number} options.threshold - Umbral de visibilidad (0-1)
 * @param {boolean} options.triggerOnce - Si la animación debe ejecutarse solo una vez
 * @returns {Array} - Array con la referencia al elemento y los controles de animación
 */
export const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, triggerOnce]);

  return [ref, controls];
};

export default useScrollAnimation;
