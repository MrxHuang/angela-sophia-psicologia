import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { socialMedia } from "../../utils/config";

/**
 * Componente de pie de página simplificado con animaciones
 *
 * @returns {React.ReactElement} Componente Footer
 */
const Footer = () => {
  const [ref, controls] = useScrollAnimation();

  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Manejar clic en enlaces de navegación
  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Enlaces principales
  const mainLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Redes Sociales", href: "#social" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-2/3 h-64 rounded-full bg-primary-50/40 blur-3xl -z-10 translate-x-1/4 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-64 rounded-full bg-secondary-50/30 blur-3xl -z-10 -translate-x-1/4 translate-y-1/3"></div>

      <motion.footer
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={footerVariants}
        className="bg-white/80 backdrop-blur-sm py-8 relative z-0"
      >
        <div className="container mx-auto px-4">
          {/* Sección principal */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8 relative">
            {/* Logo y descripción */}
            <div className="md:max-w-xs">
              <div className="flex items-center mb-3">
                <h3 className="text-2xl font-display font-bold">
                  <span className="text-primary-700">Angela</span>
                  <span className="text-secondary-600 ml-1">Sophia</span>
                </h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Psicóloga comprometida con tu bienestar emocional, ofreciendo un
                espacio seguro y confidencial.{" "}
              </p>
              <div className="flex space-x-3">
                {/* Iconos de redes sociales */}
                {Object.keys(socialMedia).map((platform) => (
                  <a
                    key={platform}
                    href={socialMedia[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    aria-label={platform}
                  >
                    {platform === "instagram" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    )}
                    {platform === "tiktok" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                    )}
                    {platform === "x" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Enlaces principales */}
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <h4 className="text-lg font-bold mb-3 text-primary-800 text-center">
                Navegación
              </h4>
              <div className="flex flex-col space-y-2">
                {mainLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className="text-neutral-600 hover:text-primary-600 transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-2 text-primary-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-neutral-200 pt-4 mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-neutral-500 text-sm mb-3 md:mb-0">
                © {currentYear}{" "}
                <p>Diseño y desarrollo por</p>
                <a
                  href="https://www.instagram.com/juan.ordonezz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-neutral-900 font-medium transition-colors"
                >
                  Juan Ordóñez - Desarrollador Web
                </a>
                . Todos los derechos reservados.
              </p>
              <p className="text-neutral-500 text-sm">
                Diseñado con <span className="text-red-500">❤️</span> para un
                mejor bienestar emocional
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
