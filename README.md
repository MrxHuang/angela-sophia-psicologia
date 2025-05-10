# Landing Page de Psicología - Ángela Sophia

## Descripción

Este proyecto es una landing page moderna y personalizada para servicios de psicología, desarrollada para la profesional Ángela Sophia. La página está diseñada con un enfoque en la experiencia de usuario, con animaciones fluidas, efectos visuales atractivos y un diseño responsive que se adapta a todos los dispositivos.


## Características

- **Diseño moderno y personalizado** con esquema de colores azul-violeta profesional
- **Efectos visuales avanzados** como glassmorphism, gradientes difuminados y animaciones sutiles
- **Animaciones fluidas** utilizando Framer Motion para transiciones elegantes
- **Sistema de scroll suave** optimizado para una navegación agradable
- **Tipografía profesional** con jerarquía visual clara y espaciado optimizado
- **Totalmente responsive** para una experiencia perfecta en dispositivos móviles y de escritorio
- **Mapa interactivo** integrado con Leaflet y OpenStreetMap
- **Formulario de contacto** con validación y feedback visual
- **Botones de contacto WhatsApp** con mensajes predefinidos para cada servicio
- **Tarjetas de servicios** con diseño elegante y toda la información necesaria

## Tecnologías utilizadas

- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 6** - Herramienta de compilación que proporciona una experiencia de desarrollo más rápida
- **Tailwind CSS 4** - Framework CSS utilitario para diseño rápido y personalizable
- **Framer Motion 12** - Biblioteca para animaciones en React
- **React Intersection Observer** - Para detectar elementos en el viewport
- **Leaflet/React Leaflet** - Para implementar mapas interactivos
- **React Scroll** - Para implementar navegación suave entre secciones

## Estructura del proyecto

```
src/
├── assets/          # Imágenes, iconos y recursos estáticos
├── components/      # Componentes reutilizables
│   ├── layout/      # Componentes estructurales (Navbar, Footer)
│   ├── sections/    # Secciones principales de la página
│   └── ui/          # Componentes de interfaz de usuario
├── hooks/           # Hooks personalizados
│   ├── useParallax.js      # Hook para efectos parallax
│   └── useScrollAnimation.js # Hook para animaciones basadas en scroll
├── pages/           # Páginas de la aplicación
├── styles/          # Estilos globales y configuraciones
│   ├── base.css     # Estilos base
│   ├── components.css # Estilos de componentes
│   └── variables.css # Variables CSS
└── utils/           # Funciones de utilidad
    ├── config.js    # Configuraciones generales
    └── whatsappUtils.js # Utilidades para integración con WhatsApp
```

## Secciones

1. **Hero** - Presentación principal con llamada a la acción y fondos animados
2. **Sobre mí** - Información sobre Ángela Sophia, su formación y valores profesionales
3. **Servicios** - Detalle de los servicios ofrecidos con tarjetas informativas y botones de contacto
4. **Contacto** - Formulario de contacto, información y mapa interactivo con la ubicación

## Características de diseño

- **Glassmorphism** - Efecto de vidrio esmerilado en tarjetas y elementos de navegación
- **Gradientes animados** - Fondos con gradientes suaves que se animan lentamente
- **Animaciones de entrada** - Elementos que aparecen con animaciones suaves al entrar en el viewport
- **Efectos hover** - Interacciones visuales al pasar el cursor sobre elementos interactivos
- **Mapa interactivo** - Visualización de la ubicación con marcador personalizado y opción para abrir en Google Maps
- **Navegación responsiva** - Menú hamburguesa en dispositivos móviles con animaciones de apertura y cierre

## Mejoras recientes

- Cambio del esquema de colores a una paleta azul-violeta más profesional
- Implementación de mapa interactivo con Leaflet y OpenStreetMap
- Integración de botones de WhatsApp con mensajes predefinidos para cada servicio
- Optimización del rendimiento en dispositivos móviles
- Mejora del sistema de scroll suave
- Rediseño responsive de todas las secciones

## Instalación y ejecución

1. Clona este repositorio
   ```bash
   git clone https://github.com/yourusername/angela-sophia-psicologia.git
   cd angela-sophia-psicologia
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`

## Compilación para producción

```bash
npm run build
```

Los archivos compilados estarán en el directorio `dist/`.

## Despliegue

El proyecto está configurado para despliegue en GitHub Pages:

```bash
npm run deploy
```

## Personalización

Para personalizar el contenido, puedes modificar los textos en los componentes de la carpeta `src/components/sections/`. Para cambiar los colores y estilos globales, ajusta la configuración en `tailwind.config.js` y archivos en `src/styles/`.

## Créditos

- Diseño y desarrollo: Juan Ordoñez
- Imágenes: Proporcionadas por Ángela Sophia
- Iconos: [Heroicons](https://heroicons.com/)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
