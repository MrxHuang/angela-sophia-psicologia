import React from 'react';
import Home from './pages/Home';
import { motion } from 'framer-motion';

/**
 * Componente principal de la aplicación
 * 
 * @returns {React.ReactElement} Componente App
 */
export default function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Home />
        </motion.div>
    );
}