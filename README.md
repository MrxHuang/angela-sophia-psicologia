# Documentación Técnica - Landing Page Ángela Sophia

## Descripción
Landing page profesional para Ángela Sophia, psicóloga especializada en acompañamiento emocional. El sitio web presenta un diseño moderno, accesible y centrado en el usuario, con énfasis en la experiencia móvil y la optimización de rendimiento.

## Tecnologías Principales
- React 19
- Vite 6
- Tailwind CSS 4
- Framer Motion (animaciones)
- React Router (enrutamiento)
- OGL (WebGL para efectos visuales)
- Leaflet (mapas interactivos)
- React Intersection Observer (scroll animations)
- GSAP (animaciones avanzadas)

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

## Mejoras Recientes

### Optimizaciones de Imágenes
- Implementado manejo responsivo de imágenes
- Añadidos placeholders y estados de carga
- Optimización de formatos y compresión

### Mejoras en el Diseño Responsivo
- Reorganización del layout para móviles
- Ajustes en la jerarquía visual para mejor legibilidad
- Efectos visuales optimizados para móviles

### Accesibilidad
- Mejor contraste de colores
- Navegación por teclado mejorada
- Etiquetas ARIA y roles semánticos

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

## Diseño y Experiencia de Usuario

### Responsive Design
- Diseño adaptativo para móviles, tablets y desktop
- Layout optimizado para cada breakpoint
- Menú de hamburguesa con animaciones fluidas
- Imágenes y fondos adaptativos

### Secciones Principales
1. **Hero**
   - Animaciones fluidas
   - Efectos de scroll personalizados
   - Llamados a la acción estratégicos

2. **Sobre Mí**
   - Diseño de dos columnas en desktop
   - Imagen de perfil optimizada
   - Sección de valores con iconos

3. **Servicios**
   - Tarjetas interactivas
   - Efectos hover sutiles
   - Diseño de cuadrícula adaptable

4. **Footer**
   - Navegación simplificada
   - Enlaces a redes sociales
   - Información de contacto clara

## Optimizaciones de Rendimiento

### Tiempo de Carga
- Lazy loading de imágenes y componentes
- Carga diferida de scripts no críticos
- Optimización de assets estáticos
- Preload de fuentes críticas

### Técnicas Avanzadas
- Code splitting automático
- Tree shaking para reducir el bundle size
- Pre-rendering de rutas críticas
- Optimización de animaciones para mejor rendimiento

### SEO
- Metadatos optimizados
- Sitemap generado automáticamente
- Estructura semántica HTML5
- Open Graph y Twitter Cards

## Scripts Disponibles

### Desarrollo
```bash
npm run dev      # Inicia el servidor de desarrollo
npm run lint     # Ejecuta el linter
```

### Producción
```bash
npm run build    # Genera la versión optimizada para producción
npm run preview  # Previsualiza la versión de producción localmente
npm run deploy   # Despliega en GitHub Pages
```

### Mantenimiento
```bash
npm run format   # Formatea el código automáticamente
npm run analyze  # Analiza el tamaño del bundle
```

## Estructura del Código

### Componentes Clave
- **Hero**: Animaciones de entrada y efectos visuales
- **About**: Sección "Sobre Mí" con imagen de perfil
- **Services**: Muestra los servicios ofrecidos
- **Timeline**: Línea de tiempo del proceso terapéutico
- **Testimonials**: Opiniones de pacientes
- **Contact**: Formulario de contacto interactivo
- **Footer**: Navegación y datos de contacto

### Hooks Personalizados
- `useParallax`: Efectos de desplazamiento parallax
- `useScrollAnimation`: Animaciones basadas en scroll
- `useResponsiveImage`: Manejo de imágenes responsivas

## Guía de Estilos

### Colores Principales
- **Primario**: `#5F6CAF` (Azul violáceo)
- **Secundario**: `#F472B6` (Rosa)
- **Acento**: `#38BDF8` (Azul claro)
- **Fondo**: `#F9FAFB` (Gris muy claro)
- **Texto**: `#1F2937` (Gris oscuro)

### Tipografía
- **Títulos**: 'Playfair Display', serif
- **Texto**: 'Inter', sans-serif
- **Tamaños**: Sistema de escala modular para consistencia

### Breakpoints
- Móvil: < 640px
- Tablet: 640px - 1023px
- Desktop: ≥ 1024px

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

2. **Configuración importante para GitHub Pages:**
   - En `vite.config.js`, configura la base URL para que coincida con el nombre de tu repositorio:
     ```javascript
     export default defineConfig({
       plugins: [react(), tailwindcss()],
       base: '/angela-sophia-psicologia/'
     })
     ```
   - En `src/main.jsx`, usa `HashRouter` 
     ```javascript
     import { HashRouter } from 'react-router-dom'
     
     createRoot(document.getElementById('root')).render(
       <StrictMode>
         <HashRouter>
           <App />
         </HashRouter>
       </StrictMode>,
     )
     ```

3. Ejecuta el comando de despliegue:
   ```
   npm run deploy
   ```

Este proceso generará una versión optimizada de la aplicación y la publicará en el repositorio configurado en el `package.json` bajo la propiedad `homepage`. La aplicación será accesible en la URL: https://MrxHuang.github.io/angela-sophia-psicologia/

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
