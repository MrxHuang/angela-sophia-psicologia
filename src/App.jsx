import React, { useEffect } from 'react';
import Home from './pages/Home';
import { motion } from 'framer-motion';
import useSmoothScroll from './hooks/useSmoothScroll';

/**
 * Componente principal de la aplicación
 * 
 * @returns {React.ReactElement} Componente App
 */
export default function App() {
    const { scrollRef, updateScroll } = useSmoothScroll({
        // Puedes ajustar estos valores para cambiar la sensación del scroll
        lerp: 0.06, // Factor de suavizado (0-1) - valores más bajos = más suave
        multiplier: 1.0, // Multiplicador de velocidad
        smooth: true, // Habilitar scroll suave
        tablet: { smooth: true },
        smartphone: { smooth: true }
    });

    // Actualizar el scroll cuando cambian las imágenes
    useEffect(() => {
        // Actualizar el scroll cuando las imágenes se cargan
        const handleImagesLoaded = () => {
            updateScroll();
        };
        
        window.addEventListener('load', handleImagesLoaded);
        
        const imgElements = document.querySelectorAll('img');
        imgElements.forEach(img => {
            if (img.complete) {
                updateScroll();
            } else {
                img.addEventListener('load', updateScroll);
            }
        });
        
        return () => {
            window.removeEventListener('load', handleImagesLoaded);
            imgElements.forEach(img => {
                img.removeEventListener('load', updateScroll);
            });
        };
    }, [updateScroll]);

    return (
        <motion.div
            ref={scrollRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="scroll-container"
        >
            <Home />
        </motion.div>
    );
}