# Landing Page de Psicología - Ángela Sophia

## Descripción

Este proyecto es una landing page moderna y personalizada para servicios de psicología, desarrollada para la profesional Ángela Sophia. La página está diseñada con un enfoque en la experiencia de usuario, con animaciones fluidas, efectos visuales atractivos y un diseño responsive que se adapta a todos los dispositivos.

## Características

- **Diseño moderno y personalizado** inspirado en sitios web ganadores de Awwwards
- **Efectos visuales avanzados** como glassmorphism, fondos suaves y bordes difuminados
- **Animaciones fluidas** utilizando Framer Motion para transiciones elegantes
- **Scroll suave** con efectos parallax donde los elementos se mueven dinámicamente
- **Tipografía profesional** con jerarquía visual clara y espaciado optimizado
- **Totalmente responsive** para una experiencia perfecta en dispositivos móviles y de escritorio

## Tecnologías utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de compilación que proporciona una experiencia de desarrollo más rápida
- **Tailwind CSS** - Framework CSS utilitario para diseño rápido y personalizable
- **Framer Motion** - Biblioteca para animaciones en React
- **React Intersection Observer** - Para detectar elementos en el viewport
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
├── pages/           # Páginas de la aplicación
├── styles/          # Estilos globales y configuraciones
└── utils/           # Funciones de utilidad
```

## Secciones

1. **Hero** - Presentación principal con llamada a la acción
2. **Sobre mí** - Información sobre Ángela Sophia, su experiencia y valores
3. **Servicios** - Detalle de los servicios ofrecidos (consultas, sesiones online, talleres)
4. **Contacto** - Formulario de contacto y datos de ubicación

## Características de diseño

- **Glassmorphism** - Efecto de vidrio esmerilado en tarjetas y elementos de navegación
- **Parallax** - Elementos que se mueven a diferentes velocidades durante el scroll
- **Animaciones de entrada** - Elementos que aparecen con animaciones suaves al entrar en el viewport
- **Efectos hover** - Interacciones visuales al pasar el cursor sobre elementos interactivos

## Instalación y ejecución

1. Clona este repositorio
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

## Personalización

Para personalizar el contenido, puedes modificar los textos en los componentes de la carpeta `src/components/sections/`. Para cambiar los colores y estilos globales, ajusta la configuración en `tailwind.config.js` y `src/index.css`.

## Créditos

Diseñado y desarrollado con inspiración en sitios web modernos como [Repeat Studio Freight](https://repeat.studiofreight.com).
# angela-sophia-psicologia
