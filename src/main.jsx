import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'

// Carga diferida del componente App principal
const App = lazy(() => import('./App.jsx'))

// Componente de carga mientras se prepara la aplicación
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    color: '#5F6CAF',
    fontSize: '1.2rem'
  }}>
    <p>Cargando...</p>
  </div>
)

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
  
  // Renderizar con fallback durante la carga
  createRoot(rootElement).render(
    <StrictMode>
      <HashRouter>
        <Suspense fallback={<LoadingFallback />}>
          <App />
        </Suspense>
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
