/**
 * Archivo de configuración para la aplicación
 * Centraliza valores configurables como coordenadas, enlaces, etc.
 */

// Configuración para el mapa y la dirección
export const locationConfig = {
    // Coordenadas de Pereira (ubicación actualizada)
    coordinates: {
      lat: 4.806389, 
      lng: -75.747806
    },
    // Texto para mostrar en el popup del mapa
    popupText: "Consultorio de Psicología - Ángela Sophia",
    // Nivel de zoom del mapa (14-16 para ciudades)
    zoom: 16,
    // Dirección física para mostrar en el sitio
    address: "Pereira, Risaralda, Colombia"
  };
  
  // Datos de contacto
  export const contactInfo = {
    email: "contacto@angelasophia.com",
    phone: "+57 315 123 4567",
    schedule: {
      weekdays: "Lunes - Viernes: 9:00 - 18:00",
      weekend: "Sábado: 10:00 - 14:00"
    }
  };
  
  // Redes sociales (para futuras implementaciones)
  export const socialMedia = {
    instagram: "https://www.instagram.com/psic.angelasophia/",
    tiktok: "https://www.tiktok.com/@psic.angelasophia",
    x: "https://x.com/angelasophia_psi",
    whatsapp: "https://wa.me/573215841483"
  };
  