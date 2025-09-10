import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import WhatsAppFloatingButton from './components/ui/WhatsAppFloatingButton';
import LazyWrapper from './components/LazyWrapper';

// Lazy loading de páginas
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
            <LazyWrapper>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </LazyWrapper>
            <WhatsAppFloatingButton />
        </div>
    );
}