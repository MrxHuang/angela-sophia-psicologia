import fs from 'fs';
import path from 'path';

// Contenido del archivo 404.html que redirige a la página principal
const redirectHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirigiendo...</title>
  <script>
    // Redirección a la página principal utilizando HashRouter
    window.location.replace(
      window.location.protocol + "//" + 
      window.location.hostname + 
      (window.location.port ? ":" + window.location.port : "") +
      "/angela-sophia-psicologia/#/"
    );
  </script>
</head>
<body>
  <p>Redirigiendo a la página principal...</p>
</body>
</html>`;

// Asegúrate de que el directorio dist existe
const distDir = path.resolve('dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Escribe el archivo 404.html
fs.writeFileSync(path.join(distDir, '404.html'), redirectHtml);

// Copia también el index.html a la raíz para asegurarnos de que todo funciona
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '200.html'));

console.log('✓ Archivos de redirección creados correctamente'); 