import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from '../../utils/analytics';

const GoogleAnalytics = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Inicializar GA4
    initGA();
    
    // Rastrear la página inicial
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    // Rastrear cambio de ruta
    trackPageView(location.pathname + location.search);
  }, [location]);

  return children;
};

export default GoogleAnalytics;
