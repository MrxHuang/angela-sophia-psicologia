/**
 * Utilidades optimizadas para scroll suave
 * Optimizado para dispositivos móviles y mejor rendimiento
 */

/**
 * Función de scroll suave optimizada para móviles
 * @param {string} targetId - ID del elemento al que hacer scroll
 * @param {number} offset - Offset desde el top (por defecto 80px para navbar)
 * @param {number} duration - Duración de la animación en ms (por defecto 400ms)
 */
export const smoothScrollTo = (targetId, offset = 80, duration = 400) => {
  const targetElement = document.getElementById(targetId);
  
  if (!targetElement) {
    return; // Removido console.warn para mejor rendimiento
  }

  // Detectar si es dispositivo móvil
  const isMobile = window.innerWidth <= 768;
  
  // Ajustar duración y offset para móviles
  const mobileDuration = isMobile ? 300 : duration;
  const mobileOffset = isMobile ? 60 : offset;

  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + startPosition - mobileOffset;
  const distance = targetPosition - startPosition;

  // Si la distancia es muy pequeña, usar scroll nativo
  if (Math.abs(distance) < 10) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  let startTime = null;
  let animationId = null;

  // Función de easing optimizada
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / mobileDuration, 1);
    
    const easedProgress = easeOutCubic(progress);
    const currentPosition = startPosition + distance * easedProgress;
    
    window.scrollTo(0, currentPosition);
    
    if (timeElapsed < mobileDuration) {
      animationId = requestAnimationFrame(animation);
    }
  };

  // Cancelar animación anterior si existe
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  
  animationId = requestAnimationFrame(animation);
};

/**
 * Función de scroll suave con detección de rendimiento
 * @param {string} targetId - ID del elemento al que hacer scroll
 * @param {number} offset - Offset desde el top
 */
export const optimizedSmoothScroll = (targetId, offset = 80) => {
  const targetElement = document.getElementById(targetId);
  
  if (!targetElement) {
    console.warn(`Elemento con ID "${targetId}" no encontrado`);
    return;
  }

  // Detectar rendimiento del dispositivo
  const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                        navigator.deviceMemory <= 4 ||
                        window.innerWidth <= 480;

  if (isLowEndDevice) {
    // Para dispositivos de bajo rendimiento, usar scroll nativo
    targetElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    return;
  }

  // Para dispositivos de alto rendimiento, usar animación personalizada
  smoothScrollTo(targetId, offset, 500);
};

/**
 * Función para manejar clics en enlaces de navegación
 * @param {Event} e - Evento del clic
 * @param {string} href - Href del enlace (ej: "#home")
 * @param {Function} onComplete - Callback opcional al completar el scroll
 */
export const handleNavLinkClick = (e, href, onComplete) => {
  e.preventDefault();
  
  const targetId = href.replace('#', '');
  
  // Ejecutar scroll optimizado
  optimizedSmoothScroll(targetId);
  
  // Ejecutar callback si existe
  if (onComplete && typeof onComplete === 'function') {
    setTimeout(onComplete, 100);
  }
};
