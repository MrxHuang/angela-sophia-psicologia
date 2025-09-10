/**
 * Utilidades para optimización de imágenes
 */

/**
 * Precargar imagen crítica
 * @param {string} src - URL de la imagen
 * @param {string} sizes - Tamaños de la imagen
 */
export const preloadImage = (src, sizes = '100vw') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.setAttribute('imagesizes', sizes);
  document.head.appendChild(link);
};

/**
 * Lazy loading de imágenes con Intersection Observer
 * @param {string} src - URL de la imagen
 * @param {string} alt - Texto alternativo
 * @param {string} className - Clases CSS
 * @returns {Promise<HTMLImageElement>}
 */
export const createLazyImage = (src, alt, className = '') => {
  return new Promise((resolve) => {
    const img = new Image();
    img.className = className;
    img.alt = alt;
    img.loading = 'lazy';
    
    img.onload = () => resolve(img);
    img.src = src;
  });
};

/**
 * Optimizar imágenes para diferentes dispositivos
 * @param {string} baseSrc - URL base de la imagen
 * @param {Object} options - Opciones de optimización
 * @returns {string} URL optimizada
 */
export const getOptimizedImageSrc = (baseSrc, options = {}) => {
  const { width, quality = 80, format = 'webp' } = options;
  
  // Si es una imagen local, devolver tal como está
  if (baseSrc.startsWith('/') || baseSrc.startsWith('./')) {
    return baseSrc;
  }
  
  // Para imágenes externas, podrías usar un servicio de optimización
  return baseSrc;
};
