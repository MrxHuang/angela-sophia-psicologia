import React from 'react';

/**
 * Componente para mostrar un mapa estático de Google
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.center - Coordenadas del centro del mapa { lat: number, lng: number }
 * @param {number} props.zoom - Nivel de zoom del mapa
 * @param {string} props.apiKey - API Key de Google Maps
 * @param {number} props.width - Ancho del mapa
 * @param {number} props.height - Alto del mapa
 * @param {string} props.className - Clases adicionales
 * @returns {React.ReactElement} Componente StaticMap
 */
const StaticMap = ({ 
  center = { lat: 4.8087174, lng: -75.690601 }, // Coordenadas por defecto (Pereira, Colombia)
  zoom = 15,
  apiKey = '',
  width = 600,
  height = 300,
  className = '',
}) => {
  // Construir la URL para el mapa estático
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=${zoom}&size=${width}x${height}&markers=color:red%7C${center.lat},${center.lng}&key=${apiKey}&style=feature:all|element:geometry|color:0xf5f5f5&style=feature:water|element:geometry|color:0xc9d3de&style=feature:landscape|element:geometry|color:0xffffff&style=feature:road|element:geometry|color:0xd6d6d6&style=feature:poi|element:geometry|color:0xeeeeee&style=feature:road.highway|element:geometry|color:0xc9d3de`;

  // Si no hay API Key, mostrar un mensaje de error
  if (!apiKey) {
    return (
      <div className={`flex items-center justify-center bg-neutral-100 h-full rounded-lg ${className}`}>
        <div className="text-neutral-500 text-center p-4">
          <p className="mb-2 font-semibold">Se requiere una API Key de Google Maps</p>
          <p className="text-sm">Para ver el mapa, por favor proporciona una API Key válida de Google Maps.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <img 
        src={staticMapUrl} 
        alt="Mapa de ubicación" 
        className="w-full h-full object-cover"
        width={width}
        height={height}
      />
    </div>
  );
};

export default StaticMap; 