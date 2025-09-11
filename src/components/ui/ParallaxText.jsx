import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity } from 'framer-motion';

/**
 * Componente para crear texto con efecto parallax horizontal
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Texto a mostrar
 * @param {number} props.baseVelocity - Velocidad base del movimiento
 * @param {string} props.className - Clases adicionales
 * @returns {React.ReactElement} Componente ParallaxText
 */
const ParallaxText = ({ children, baseVelocity = 100, className = '' }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  const directionFactor = useRef(1);
  const prevT = useRef(0);

  const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const animate = () => {
    if (prevT.current === 0) {
      prevT.current = performance.now();
      requestAnimationFrame(animate);
      return;
    }

    const currentT = performance.now();
    const delta = (currentT - prevT.current) / 1000;
    prevT.current = currentT;

    const moveBy = directionFactor.current * baseVelocity * delta;
    baseX.set(wrap(-100, 0, baseX.get() + moveBy));
    requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={`parallax ${className}`}>
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
};

export default ParallaxText;
