import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

/**
 * Componente wrapper para lazy loading con skeleton
 */
const LazyWrapper = ({ children, fallback, ...props }) => {
  return (
    <Suspense fallback={fallback || <LazySkeleton />}>
      {children}
    </Suspense>
  );
};

/**
 * Skeleton de carga para componentes lazy
 */
const LazySkeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full h-64 bg-gray-200 rounded-2xl animate-pulse"
  />
);

export default LazyWrapper;
