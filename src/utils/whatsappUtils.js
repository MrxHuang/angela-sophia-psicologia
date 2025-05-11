import { socialMedia } from './config';

/**
 * Genera una URL de WhatsApp con un mensaje predefinido
 * 
 * @param {string} message - Mensaje a enviar
 * @returns {string} URL de WhatsApp con el mensaje codificado
 */
export const generateWhatsAppUrl = (message) => {
  const encodedMessage = encodeURIComponent(message);
  if (socialMedia.whatsapp.includes('?')) {
    return `${socialMedia.whatsapp}&text=${encodedMessage}`;
  } else {
    return `${socialMedia.whatsapp}?text=${encodedMessage}`;
  }
};

/**
 * Mensajes predefinidos para cada servicio
 */
export const serviceMessages = {
  individual: "Hola, estoy interesad@ en agendar una sesión de terapia individual. ¿Podrías brindarme más información?",
  online: "Hola, me interesa la terapia online. ¿Qué plataforma utilizas y cómo podemos agendar una sesión?",
  grupal: "Hola, quiero obtener información sobre los próximos talleres grupales. ¿Qué temáticas están disponibles y cuándo inician?",
  consulta: "Hola, me gustaría agendar una consulta inicial gratuita para conocer qué servicio se adapta mejor a mis necesidades."
}; 