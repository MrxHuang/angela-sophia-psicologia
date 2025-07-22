import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import videoSource from '../../assets/video/videoinformativo.mp4';
import posterImage from '../../assets/images/portada.jpg';
import SectionTitle from '../ui/SectionTitle';

/**
 * Componente para mostrar un video informativo
 * @param {string} title - Título de la sección
 * @param {string} description - Descripción del video
 * @returns {React.ReactElement} Componente VideoInformativo
 */
const VideoInformativo = ({ 
  title = 'Tu proceso merece empezar bien', 
  description = 'Te invito a conocer más sobre mi trabajo en mis redes sociales'
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Cambiado a false para que intente reproducir con sonido por defecto
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });
  
  // Reproducir/pausar basado en la visibilidad
  useEffect(() => {
    if (!videoRef.current) return;
    
    const playVideo = async () => {
      try {
        // Asegurar que el video esté listo para reproducir
        if (videoRef.current.readyState < 2) {
          await new Promise((resolve) => {
            videoRef.current.addEventListener('loadeddata', resolve, { once: true });
          });
        }
        
        // Configurar el video antes de reproducir
        videoRef.current.muted = false;
        videoRef.current.playsInline = true;
        
        // Intentar reproducir con sonido
        try {
          await videoRef.current.play();
          setIsPlaying(true);
          setIsMuted(false);
          return;
        } catch (error) {
          console.log('No se pudo reproducir con sonido, intentando silenciado...');
        }
        
        // Si falla, intentar sin sonido
        videoRef.current.muted = true;
        await videoRef.current.play();
        setIsPlaying(true);
        setIsMuted(true);
        
      } catch (error) {
        console.error('Error al reproducir el video:', error);
        setIsPlaying(false);
      }
    };
    
    const handleVisibilityChange = async () => {
      if (isInView && videoRef.current && videoRef.current.paused) {
        await playVideo();
      } else if (!isInView && videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
    
    handleVisibilityChange();
    
    return () => {
      // Limpiar listeners si es necesario
    };
  }, [isInView]);
  
  const togglePause = async () => {
    if (!videoRef.current) return;
    
    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
        // Intentar activar el sonido al reanudar manualmente
        try {
          videoRef.current.muted = false;
          setIsMuted(false);
        } catch (e) {
          console.log('No se pudo activar el sonido:', e);
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error al controlar la reproducción:', error);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  return (
    <section className="py-12 md:py-16 bg-white">
      <SectionTitle title="Tu proceso merece empezar bien" subtitle="Te invito a conocer más sobre mi trabajo en mis redes sociales" />
        
        <div ref={containerRef} className="max-w-xs mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative" style={{ aspectRatio: '9/16' }}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={posterImage}
              title="Tu proceso merece empezar bien"
              onClick={togglePause}
              preload="metadata"
              playsInline
              muted={isMuted}
              loop
              onVolumeChange={(e) => {
                if (e.target) {
                  setIsMuted(e.target.muted);
                }
              }}
              onPlay={() => {
                setIsPlaying(true);
              }}
              onPause={() => {
                setIsPlaying(false);
              }}
            >
              <source src={videoSource} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
            
            {/* Controles de video */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
              {/* Botón de silencio */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 p-2.5 rounded-full bg-primary-600/80 text-white backdrop-blur-sm hover:bg-primary-700 transition-all transform hover:scale-110 z-10 shadow-md"
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              {/* Botón de pausa/reproducción */}
              <button
                onClick={togglePause}
                className="absolute bottom-16 right-4 p-2.5 rounded-full bg-primary-600/80 text-white backdrop-blur-sm hover:bg-primary-700 transition-all transform hover:scale-110 z-10 shadow-md"
                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          
        </div>
    </section>
  );
};

export default VideoInformativo;
