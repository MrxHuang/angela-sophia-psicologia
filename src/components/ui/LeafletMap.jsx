import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Solución al problema de los íconos de Leaflet sin importar archivos
const ICON_URL = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png';
const SHADOW_URL = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';

/**
 * Componente para mostrar un mapa interactivo usando Leaflet
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.center - Coordenadas del centro del mapa { lat: number, lng: number }
 * @param {number} props.zoom - Nivel de zoom del mapa
 * @param {string} props.popupText - Texto para el popup del marcador
 * @param {string} props.className - Clases adicionales
 * @returns {React.ReactElement} Componente LeafletMap
 */
const LeafletMap = ({ 
  center = { lat: 4.8087174, lng: -75.690601 }, // Coordenadas por defecto (Pereira, Colombia)
  zoom = 15,
  popupText = "Ángela Sophia - Psicóloga",
  className = '',
}) => {
  const [mapIsReady, setMapIsReady] = useState(false);

  // Configurar el ícono por defecto para los marcadores
  useEffect(() => {
    // Asegurarse de que Leaflet está disponible
    if (typeof L !== 'undefined') {
      // Restaurar el ícono por defecto
      delete L.Icon.Default.prototype._getIconUrl;
      
      // Usar un marcador más visible y moderno
      L.Icon.Default.mergeOptions({
        iconUrl: ICON_URL,
        shadowUrl: SHADOW_URL,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      
      setMapIsReady(true);
    }
  }, []);

  // Estilos personalizados para el componente
  const mapStyles = {
    height: '100%', 
    width: '100%', 
    borderRadius: '0.5rem',
    zIndex: 1
  };

  // Estilos para el popup
  const customPopupStyle = {
    '.leaflet-popup-content-wrapper': {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '0.5rem',
      padding: '0.5rem'
    },
    '.leaflet-popup-content': {
      margin: '0.5rem',
      color: '#334155',
      textAlign: 'center',
      fontWeight: 500
    }
  };

  // Función para abrir la ubicación en Google Maps
  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`, '_blank');
  };

  if (!mapIsReady) {
    return (
      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Cargando mapa...</p>
      </div>
    );
  }

  return (
    <div className={`map-container w-full h-full rounded-lg overflow-hidden ${className}`}>
      <MapContainer 
        center={[center.lat, center.lng]} 
        zoom={zoom} 
        className="w-full h-full"
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={true}
      >
        {/* Mapa base con colores más intensos */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          subdomains="abc"
          maxZoom={19}
        />
        
        {/* Capa adicional para nombres y calles más claras */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          opacity={0.6}
        />
        
        {/* Añadir control de zoom en una mejor posición */}
        <ZoomControl position="bottomright" />
        
        {/* Marcador con popup personalizado */}
        <Marker position={[center.lat, center.lng]}>
          <Popup className="custom-popup">
            <div className="text-center">
              <p className="font-medium text-primary-700 mb-2">{popupText}</p>
              <button 
                onClick={openInGoogleMaps}
                className="text-xs bg-primary-600 hover:bg-primary-700 text-white py-1 px-2 rounded-md transition-colors"
              >
                Abrir en Google Maps
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Overlay para mejor integración visual */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.3)',
          borderRadius: '0.5rem',
          zIndex: 10
        }}
      />
    </div>
  );
};

export default LeafletMap; 