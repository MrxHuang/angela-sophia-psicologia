import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useParallax from "../../hooks/useParallax";
import angelaImage from "../../assets/images/angela.jpg";

/**
 * Componente para cargar imágenes responsive
 */
const ResponsiveImage = ({
  mobileImgSrc,
  desktopImgSrc,
  alt,
  className,
  ...props
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSrc, setCurrentSrc] = useState(
    windowWidth <= 768 ? mobileImgSrc : desktopImgSrc
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setCurrentSrc(width <= 768 ? mobileImgSrc : desktopImgSrc);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileImgSrc, desktopImgSrc]);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary-50/50 z-10">
          <div className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

/**
 * Componente para la sección "Sobre mí" de la landing page
 *
 * @returns {React.ReactElement} Componente About
 */
const About = () => {
  const [ref, controls] = useScrollAnimation();
  const parallaxImage = useParallax(0.15);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const values = [
    {
      title: "Empatía",
      description:
        "Comprendo tus emociones y experiencias desde una perspectiva respetuosa y sin juicios.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Integridad",
      description:
        "Me guío por principios éticos sólidos, actuando con coherencia entre pensamiento, emoción y conducta, siempre con el compromiso de velar por tu bienestar.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Confidencialidad",
      description:
        "Tu privacidad es fundamental. Toda información compartida se mantiene bajo estricta confidencialidad.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-40 right-0 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full bg-primary-100/40 blur-3xl -z-10"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 left-0 w-48 sm:w-56 h-48 sm:h-56 rounded-full bg-secondary-100/40 blur-3xl -z-10"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 w-36 sm:w-40 h-36 sm:h-40 rounded-full bg-accent-100/30 blur-2xl -z-10"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <div className="container mx-auto px-4 overflow-hidden">
        <SectionTitle title="Sobre mí" subtitle="Conoce más sobre mi trabajo" />

        {/* Imagen - Mostrada entre el subtítulo y el título en móvil */}
        <div className="lg:hidden relative w-full max-w-xs mx-auto my-6 rounded-2xl overflow-hidden aspect-[3/4] h-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 rounded-2xl"></div>
          <div className="relative w-full h-full">
            <img
              src={angelaImage}
              alt="Ángela Sophia - Psicóloga profesional en Pereira, Risaralda"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-primary-100 rounded-full opacity-70 blur-md"></div>
          <div className="absolute -top-5 -right-5 w-14 h-14 bg-secondary-100 rounded-full opacity-70 blur-md"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center mt-8 sm:mt-10">
          {/* Contenido sobre mí - Primero en móvil */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="order-1 lg:order-2 pt-4 lg:pt-0"
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-display font-bold mb-4 sm:mb-6 text-primary-700"
              variants={itemVariants}
            >
              Angela Sophia
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg text-neutral-700 mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Soy Angela, psicóloga profesional. Acompaño a personas como tú en
              el camino de conocerse, comprenderse y transformar su vida.
              Trabajo con herramientas terapéuticas basadas en la evidencia, con
              el objetivo de ayudarte a reconectar contigo, fortalecer tu
              bienestar emocional y mejorar tu calidad de vida.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-neutral-700 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              Mi filosofía se centra en crear un espacio seguro donde puedas
              expresarte libremente, comprender tus patrones de pensamiento y
              desarrollar herramientas efectivas para gestionar tus emociones y
              alcanzar tus metas personales.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <span className="block text-xl md:text-2xl font-bold text-primary-600">
                  Empatía
                </span>
                <span className="text-neutral-600 text-sm sm:text-base">
                  Enfoque personalizado
                </span>
              </div>
              <div className="text-center">
                <span className="block text-xl md:text-2xl font-bold text-primary-600">
                  Innovación
                </span>
                <span className="text-neutral-600 text-sm sm:text-base">
                  Técnicas actualizadas
                </span>
              </div>
              <div className="text-center">
                <span className="block text-xl md:text-2xl font-bold text-primary-600">
                  Compromiso
                </span>
                <span className="text-neutral-600 text-sm sm:text-base">
                  Con tu bienestar
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Formación académica
              </h4>
              <ul className="space-y-2 mb-4 sm:mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">
                    Licenciatura en Psicología - Universidad Católica de Pereira
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">
                    Formación continua en Terapia Cognitivo-Conductual
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">
                    Diplomados enfocados en consumo de Sustancias Psicoactivas
                    (SPA) y conducta suicida
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Imagen - Solo visible en desktop */}
          <div className="hidden lg:block relative w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden order-1 mb-6 lg:mb-0 aspect-[3/4] h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-primary-50 to-accent-50 rounded-2xl"></div>
            <div className="relative w-full h-full">
              <img
                src={angelaImage}
                alt="Ángela Sophia - Psicóloga profesional en Pereira, Risaralda"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-primary-100 rounded-full opacity-70 blur-md"></div>
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-secondary-100 rounded-full opacity-70 blur-md"></div>
          </div>
        </div>

        {/* Sección de valores */}
        <div className="mt-10 lg:mt-14">
          <h3 className="text-xl sm:text-2xl font-display font-bold mb-5 sm:mb-6 text-center">
            Principios que guían mi práctica
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-neutral-100 rounded-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-primary-50 rounded-full">
                    {value.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
