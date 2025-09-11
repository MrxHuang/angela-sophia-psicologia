import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import ParallaxText from "../ui/ParallaxText";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import {
  generateWhatsAppUrl,
  serviceMessages,
} from "../../utils/whatsappUtils";
import { socialMedia } from "../../utils/config";

const Services = () => {
  const [ref, controls] = useScrollAnimation();

  const services = [
    {
      id: 1,
      key: "individual",
      title: "Terapia presencial",
      shortDesc:
        "Sesiones personalizadas para abordar tus necesidades específicas.",
      description:
        "Sesiones personalizadas donde trabajamos juntos para abordar tus preocupaciones específicas, desarrollar estrategias de afrontamiento efectivas y alcanzar tus objetivos de bienestar emocional. Cada sesión se adapta a tus necesidades únicas.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 sm:h-10 sm:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      benefits: [
        "Atención completamente personalizada",
        "Espacio confidencial y seguro",
        "Flexibilidad de horarios",
        "Seguimiento continuo de tu progreso",
        "La terapia puede ser a domicilio",
      ],
    },
    {
      id: 2,
      key: "online",
      title: "Terapia Online",
      shortDesc:
        "Sesiones virtuales con la misma calidad que las presenciales.",
      description:
        "Accede a terapia de calidad desde la comodidad de tu hogar u oficina. Las sesiones online mantienen la misma efectividad y confidencialidad que las presenciales, eliminando barreras geográficas y ahorrando tiempo de desplazamiento.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 sm:h-10 sm:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      benefits: [
        "Ahorro de tiempo en desplazamientos",
        "Accesibilidad desde cualquier ubicación",
        "Misma calidad que las sesiones presenciales",
        "Plataforma segura y confidencial",
        "Atención desde cualquier parte del mundo",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const openWhatsApp = (serviceKey) => {
    const url = generateWhatsAppUrl(serviceMessages[serviceKey]);
    window.open(url, "_blank");
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-white to-primary-50"
      ref={ref}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      {/* Burbujas decorativas - ocultamos algunas en móvil para mejor rendimiento */}
      <motion.div
        className="absolute top-40 left-0 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-primary-200/40 blur-3xl -z-10"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-40 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-secondary-200/40 blur-3xl -z-10 hidden sm:block"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 17,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <motion.div
        className="absolute top-1/2 left-1/3 w-40 sm:w-48 h-40 sm:h-48 rounded-full bg-accent-100/30 blur-2xl -z-10 hidden sm:block"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>

      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mis Servicios"
          subtitle="Descubre cómo puedo ayudarte a mejorar tu bienestar emocional"
          className="text-primary-800"
        />

        {/* Texto con efecto parallax - oculto en móvil muy pequeño */}
        <div className="my-10 sm:my-12 md:my-16 overflow-hidden">
          <ParallaxText baseVelocity={-2}>
            Bienestar Emocional • Crecimiento Personal • Equilibrio Mental •
          </ParallaxText>
        </div>

        {/* Tarjetas de servicios */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 max-w-4xl mx-auto"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 glass h-full flex flex-col relative overflow-hidden">
                
                <div className="flex flex-col items-center text-center mb-4 sm:mb-6 relative z-10">
                  <div className="p-3 sm:p-4 bg-primary-50 rounded-full text-primary-600 mb-3 sm:mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary-800">
                    {service.title}
                  </h3>
                </div>

                <p className="text-neutral-700 mb-4 sm:mb-6 text-center font-medium text-sm sm:text-base relative z-10">
                  {service.shortDesc}
                </p>

                <div className="pt-4 sm:pt-6 border-t border-neutral-100 mt-2 flex-grow relative z-10">
                  <p className="text-neutral-600 mb-4 sm:mb-5 text-sm sm:text-base font-normal">
                    {service.description}
                  </p>

                  <h4 className="font-bold text-primary-800 mb-2 sm:mb-3 text-base">
                    Beneficios:
                  </h4>
                  <ul className="space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
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
                        <span className="text-neutral-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto relative group">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full text-sm sm:text-base cursor-pointer relative overflow-hidden"
                    onClick={() => openWhatsApp(service.key)}
                  >
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></div>
                    
                    <span className="flex items-center justify-center relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                      Contactar vía WhatsApp
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Redes Sociales */}
        <div id="social" className="mt-16 sm:mt-20 text-center pb-10">
          <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6 text-primary-800">
            Sígueme en redes sociales
          </h3>
          <p className="text-neutral-600 mb-6 sm:mb-8 max-w-xl mx-auto">
            Encuentra consejos, reflexiones y contenido sobre bienestar
            emocional y psicología en mis redes sociales
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white hover:shadow-lg transition-all duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a
              href={socialMedia.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:shadow-lg transition-all duration-300"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </a>
            <a
              href={socialMedia.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:shadow-lg transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
