import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

// Detector de dispositivos de bajo rendimiento
const isLowPerfDevice = () => {
  const userAgent = navigator.userAgent || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
  // Detector de CPU menos potente (detección básica)
  const cpuCores = navigator.hardwareConcurrency || 4;
  const isLowCPU = cpuCores <= 4;
  
  // Comprobación de memoria disponible (solo funciona en Chrome)
  const isLowRAM = navigator.deviceMemory && navigator.deviceMemory < 4;
  
  return isMobile || isLowCPU || isLowRAM;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  optimizePerformance = false, // Nuevo parámetro para forzar optimización
}) => {
  const isLowPerf = optimizePerformance || useMemo(() => isLowPerfDevice(), []);
  
  // Ajustar parámetros si es un dispositivo de bajo rendimiento
  const optimizedDelay = isLowPerf ? Math.min(delay, 100) : delay;
  const optimizedStepDuration = isLowPerf ? Math.min(stepDuration, 0.25) : stepDuration;
  
  // En dispositivos de bajo rendimiento, animar por palabras en lugar de caracteres
  const actualAnimateBy = isLowPerf && animateBy === 'characters' ? 'words' : animateBy;
  
  // Reducir el "blur" en dispositivos de bajo rendimiento
  const blurAmount = isLowPerf ? 5 : 10;
  const yOffset = isLowPerf ? 25 : 50;
  
  const elements = actualAnimateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const [forceShow, setForceShow] = useState(false);
  const ref = useRef(null);
  const isInitialMount = useRef(true);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    
    // Optimización: No observar si ya está en vista
    if (inView) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(ref.current);
    
    // Forzar la animación después de un tiempo en caso de que IntersectionObserver falle
    const timer = setTimeout(() => {
      if (!inView && !hasAnimated.current) {
        setInView(true);
        setForceShow(true);
      }
    }, 1000);
    
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin, inView]);

  // Efecto adicional para intentar la animación nuevamente si la página termina de cargarse
  useEffect(() => {
    const handleLoad = () => {
      if (!hasAnimated.current) {
        setInView(true);
        setForceShow(true);
      }
    };
    
    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: `blur(${blurAmount}px)`, opacity: 0, y: -yOffset }
        : { filter: `blur(${blurAmount}px)`, opacity: 0, y: yOffset },
    [direction, blurAmount, yOffset]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: `blur(${blurAmount / 2}px)`,
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction, blurAmount]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = optimizedStepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  // Si es un renderizado inicial en un dispositivo de bajo rendimiento,
  // esperar a la siguiente actualización para iniciar animaciones
  useEffect(() => {
    if (isInitialMount.current && isLowPerf) {
      isInitialMount.current = false;
    }
    
    if (inView || forceShow) {
      hasAnimated.current = true;
    }
  }, [isLowPerf, inView, forceShow]);

  return (
    <div
      ref={ref}
      className={`blur-text ${className} flex flex-wrap justify-center opacity-1`}
      style={{ 
        willChange: 'contents',
        visibility: 'visible' // Asegurar que siempre sea visible
      }}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * optimizedDelay) / 1000,
        };
        
        if (easing) {
          spanTransition.ease = easing;
        }

        // Para dispositivos de bajo rendimiento, solo animar elementos visibles inicialmente
        const shouldOptimize = isLowPerf && index > 4;
        const initialState = shouldOptimize ? { opacity: 1, y: 0, filter: 'blur(0px)' } : fromSnapshot;
        const animationState = (inView || forceShow) && !isInitialMount.current 
          ? (shouldOptimize ? initialState : animateKeyframes)
          : initialState;
          
        // Estado final en caso de que todo falle
        const fallbackState = (inView || forceShow) ? { opacity: 1, y: 0, filter: 'blur(0px)' } : initialState;

        return (
          <motion.span
            className="inline-block"
            style={{ 
              willChange: shouldOptimize ? 'auto' : 'transform, filter, opacity',
              wordBreak: 'keep-all',
              fontFamily: 'inherit' // Heredar la fuente del padre
            }}
            key={index}
            initial={initialState}
            animate={animationState}
            transition={shouldOptimize ? { duration: 0 } : spanTransition}
            onAnimationComplete={(definition) => {
              if (index === elements.length - 1) {
                if (onAnimationComplete) onAnimationComplete(definition);
                
                // Garantizar que el texto sea visible después de la animación
                if (definition === animateKeyframes && ref.current) {
                  const allSpans = ref.current.querySelectorAll('span');
                  allSpans.forEach(span => {
                    span.style.opacity = '1';
                    span.style.filter = 'blur(0px)';
                    span.style.transform = 'translateY(0)';
                  });
                }
              }
            }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {actualAnimateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </div>
  );
};

export default BlurText; 