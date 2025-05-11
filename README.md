# Documentación Técnica - Landing Page Ángela Sophia

## Descripción
Landing page para psicóloga con enfoque en terapia cognitivo-conductual. El proyecto incluye efectos visuales interactivos, animaciones y diseño responsive.

## Tecnologías Principales
- React
- Vite
- Tailwind CSS
- Framer Motion (animaciones)
- React Router (enrutamiento)
- OGL (WebGL para efectos visuales)
- Leaflet (mapas interactivos)

## Estructura del Proyecto
```
landing-ang/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── components/
│   │   ├── layout/      # Componentes estructurales (Navbar, Footer)
│   │   ├── sections/    # Secciones principales de la página
│   │   └── ui/          # Componentes de UI reutilizables
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Páginas de la aplicación
│   ├── styles/          # Estilos adicionales
│   └── utils/           # Utilidades y configuración
│   ├── App.jsx          # Componente principal y rutas
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── tailwind.config.js   # Configuración de Tailwind CSS
└── vite.config.js       # Configuración de Vite
```

## Componentes Visuales Destacados

### FuzzyText
Componente que crea texto con efecto de distorsión dinámica. Implementado usando Canvas para manipular el texto pixel por pixel, creando un efecto de "ruido" visual.

**Características:**
- Efecto de distorsión que se intensifica al pasar el cursor
- Rendimiento optimizado usando Canvas
- Personalizable en intensidad, color y comportamiento

**Uso principal:** Número "404" en la página de error.

### Threads
Componente para crear fondos con ondas animadas mediante WebGL (usando la biblioteca OGL). Crea un efecto visual fluido de líneas ondulantes que responden al movimiento del cursor.

**Características:**
- Interacción con el cursor del usuario
- Animación constante con ondas fluidas
- Oculto en dispositivos móviles para optimizar rendimiento
- Personalizable en color, amplitud y distancia

**Uso principal:** Fondo dinámico en sección Hero y página 404.

### BlurText
Componente para textos con efecto de desenfoque que se desvanece gradualmente a medida que se muestra en pantalla.

**Características:**
- Animación de "revelación" con efecto de desenfoque
- Animación por palabras o por caracteres
- Personalizable en timing, dirección y efecto

**Uso principal:** Título principal en la sección Hero.

### ParallaxText
Componente que crea texto con desplazamiento horizontal continuo, simulando un efecto parallax.

**Características:**
- Movimiento continuo e infinito
- Velocidad ajustable
- Responde al scroll del usuario

**Uso principal:** Sección de Servicios para destacar términos clave.

## Responsive Design
- Diseño adaptativo para todos los dispositivos (móvil, tablet, desktop)
- Componentes que se ajustan o desactivan en función del tamaño de pantalla
- Menú hamburguesa para dispositivos móviles
- Efectos visuales simplificados en dispositivos móviles para optimizar rendimiento

## Optimizaciones
- Lazy loading de componentes pesados
- Desactivación de efectos WebGL en dispositivos móviles
- Imágenes optimizadas para carga rápida
- Backgrounds semi-transparentes para mejorar la legibilidad

## Scripts Disponibles
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera la versión de producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run deploy` - Despliega la aplicación en GitHub Pages

## Navegación
La aplicación incluye navegación interna (smooth scroll) y una página 404 personalizada.

## Componentes Eliminados
Durante el desarrollo se han eliminado algunos componentes que no fueron necesarios para la versión final:
- CustomCursor
- GlowText
- SpotlightCard
- TestimonialCard
- GoogleMap (reemplazado por LeafletMap)
- OpenStreetMap
- Accordion
- Secciones eliminadas: Testimonials, FAQ

## Despliegue
Para desplegar la aplicación en GitHub Pages:

1. Asegúrate de tener instalado el paquete `gh-pages`: 
   ```
   npm install gh-pages --save-dev
   ```

2. Ejecuta el comando de despliegue:
   ```
   npm run deploy
   ```

Este proceso generará una versión optimizada de la aplicación y la publicará en el repositorio configurado en el `package.json` bajo la propiedad `homepage`.

## Mejoras Futuras

### Optimización de tamaño del bundle
Durante la compilación, se muestra una advertencia sobre el tamaño de algunos chunks que superan los 500 kB después de la minificación. Para solucionar esto, se podrían implementar las siguientes mejoras:

1. **Code-splitting dinámico**: Utilizar `import()` dinámicos para cargar componentes solo cuando sean necesarios.
   ```javascript
   const SomeComponent = React.lazy(() => import('./SomeComponent'));
   ```

2. **Configurar chunks manuales**: Ajustar la configuración de Rollup en `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react(), tailwindcss()],
     build: {
       rollupOptions: {
         output: {
           manualChunks: {
             vendor: ['react', 'react-dom', 'framer-motion'],
             ui: ['./src/components/ui/'],
           }
         }
       }
     },
     base: ''
   })
   ```

3. **Ajustar el límite de advertencia**: Si las optimizaciones anteriores no son suficientes, se puede aumentar el límite de advertencia:
   ```javascript
   build: {
     chunkSizeWarningLimit: 800
   }
   ```
