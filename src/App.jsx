import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/**
 * Componente principal de la aplicación
 * 
 * @returns {React.ReactElement} Componente App
 */
export default function App() {
    // Asegurar que el texto sea visible
    useEffect(() => {
        // Forzar visibilidad después de un breve retraso
        const timer = setTimeout(() => {
            document.querySelectorAll('h1, h2, .font-display').forEach(el => {
                el.style.visibility = 'visible';
                el.style.opacity = '1';
            });
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}