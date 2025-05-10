import { useEffect, useRef, useCallback } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

/**
 * Hook personalizado para implementar scroll suave con inercia usando Locomotive Scroll
 * @param {Object} options - Opciones para configurar Locomotive Scroll
 * @returns {Object} - Objeto con referencia al contenedor y funciones para controlar el scroll
 */
const useSmoothScroll = (options = {}) => {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  
  useEffect(() => {
    if (!scrollRef.current) return;
    
    // Configuración por defecto para locomotive-scroll
    const scrollOptions = {
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.1, // Factor de suavizado (0-1) - valores más bajos = más suave
      smartphone: {
        smooth: true,
        multiplier: 1,
        lerp: 0.1
      },
      tablet: {
        smooth: true,
        multiplier: 1,
        lerp: 0.1
      },
      ...options
    };
    
    // Inicializar locomotive-scroll
    locomotiveScrollRef.current = new LocomotiveScroll(scrollOptions);
    
    // Actualizar el scroll después de 500ms para asegurar que todo está cargado
    setTimeout(() => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.update();
      }
    }, 500);
    
    // Limpiar al desmontar
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, [options]);
  
  // Función para actualizar manualmente el scroll
  const updateScroll = useCallback(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update();
    }
  }, []);
  
  // Función para navegar suavemente a un elemento
  const scrollTo = useCallback((target, customOptions = {}) => {
    if (!target) return;
    
    const defaultOptions = {
      offset: -80, // Compensar la altura del navbar
      duration: 1000, // Duración de la animación en ms
      easing: [0.25, 0.0, 0.35, 1.0], // Función de easing
    };
    
    const scrollOptions = { ...defaultOptions, ...customOptions };
    
    if (locomotiveScrollRef.current) {
      setTimeout(() => {
        locomotiveScrollRef.current.scrollTo(target, scrollOptions);
      }, 100);
    } else {
      // Fallback para navegación nativa
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (scrollOptions.offset || -80);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);
  
  return { scrollRef, updateScroll, scrollTo };
};

export default useSmoothScroll; 