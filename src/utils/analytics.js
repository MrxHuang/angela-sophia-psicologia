import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-FQLW35RE9H';

// Inicializar GA4
export const initGA = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(TRACKING_ID);
    console.log('GA4 inicializado');
  }
};

// Enviar página vista
export const trackPageView = (path) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

// Enviar eventos personalizados
export const trackEvent = (category, action, label, value) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};
