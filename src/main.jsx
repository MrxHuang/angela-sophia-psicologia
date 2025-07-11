import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'  // Importación directa en lugar de lazy loading
import GoogleAnalytics from './components/analytics/GoogleAnalytics'

// Ejecutar después de que el documento haya cargado completamente
function startApp() {
  const rootElement = document.getElementById('root')
  
  // Configurar el rendimiento para dispositivos de bajo rendimiento
  // mediante la detección básica del dispositivo
  const userAgent = navigator.userAgent || ''
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  const isLowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4
  
  // Variable global para indicar rendimiento bajo para que sea accesible desde componentes
  window.__PERFORMANCE_MODE__ = isMobile || isLowCPU ? 'low' : 'high'
  
  // Renderizado directo sin Suspense para simplificar
  createRoot(rootElement).render(
    <StrictMode>
      <HashRouter>
        <GoogleAnalytics>
          <App />
        </GoogleAnalytics>
      </HashRouter>
    </StrictMode>
  )
}

// Si el documento ya está cargado, iniciar inmediatamente,
// de lo contrario, esperar a que termine de cargar
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(startApp, 0)
} else {
  document.addEventListener('DOMContentLoaded', startApp)
}
