import { socialMedia } from './config';

export const generateWhatsAppUrl = (message) => {
  const encodedMessage = encodeURIComponent(message);
  if (socialMedia.whatsapp.includes('?')) {
    return `${socialMedia.whatsapp}&text=${encodedMessage}`;
  } else {
    return `${socialMedia.whatsapp}?text=${encodedMessage}`;
  }
};

export const serviceMessages = {
  individual: "Hola, estoy interesad@ en agendar una sesión de terapia individual. ¿Podrías brindarme más información?",
  online: "Hola, me interesa la terapia online. ¿Qué plataforma utilizas y cómo podemos agendar una sesión?",
  grupal: "Hola, quiero obtener información sobre los próximos talleres grupales. ¿Qué temáticas están disponibles y cuándo inician?",
  consulta: "Hola, me gustaría agendar una consulta inicial gratuita para conocer qué servicio se adapta mejor a mis necesidades."
}; 