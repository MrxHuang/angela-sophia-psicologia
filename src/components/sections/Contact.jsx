import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import LeafletMap from '../ui/LeafletMap';
import 'leaflet/dist/leaflet.css';
import { locationConfig, contactInfo } from '../../utils/config';

/**
 * Componente para la sección de Contacto de la landing page
 * 
 * @returns {React.ReactElement} Componente Contact
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  
  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a un backend
    // Por ahora, solo simulamos una respuesta exitosa
    setFormStatus('success');
    
    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormStatus(null);
    }, 3000);
  };
  
  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden bg-white min-h-screen"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-secondary-100/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-primary-100/30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Contacto" 
          subtitle="¿Listo para comenzar tu camino hacia el bienestar? Contáctame hoy mismo"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12">
          {/* Formulario de contacto - Primero en móviles, segundo en desktop */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="order-1 lg:order-2 relative z-10"
          >
            <GlassCard className="w-full h-full p-6 sm:p-8">
              <motion.h3 
                className="text-2xl font-display font-bold mb-6"
                variants={itemVariants}
              >
                Envíame un mensaje
              </motion.h3>
              
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={itemVariants}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center bg-white/50 p-3 rounded-lg">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-neutral-700">
                    Acepto la política de privacidad y el tratamiento de mis datos
                  </label>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                  >
                    {formStatus === 'success' ? 'Mensaje enviado ✓' : 'Enviar mensaje'}
                  </Button>
                  
                  {formStatus === 'success' && (
                    <div className="bg-primary-50 border border-primary-200 text-primary-700 px-4 py-3 rounded-lg mt-4">
                      <p className="text-center">
                        Tu mensaje ha sido enviado correctamente. Me pondré en contacto contigo pronto.
                      </p>
                    </div>
                  )}
                </div>
              </motion.form>
            </GlassCard>
          </motion.div>
          
          {/* Información de contacto - Segundo en móviles, primero en desktop */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="order-2 lg:order-1 mt-8 lg:mt-0 relative z-10"
          >
            <GlassCard className="w-full h-full p-6 sm:p-8">
              <motion.h3 
                className="text-2xl font-display font-bold mb-6"
                variants={itemVariants}
              >
                Información de contacto
              </motion.h3>
              
              <motion.div className="space-y-6" variants={itemVariants}>
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 rounded-lg text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Dirección</h4>
                    <p className="text-neutral-600">{locationConfig.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 rounded-lg text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-neutral-600">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 rounded-lg text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Teléfono</h4>
                    <p className="text-neutral-600">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary-50 rounded-lg text-primary-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Horario de atención</h4>
                    <p className="text-neutral-600">
                      {contactInfo.schedule.weekdays}<br />
                      {contactInfo.schedule.weekend}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Mapa interactivo */}
              <motion.div 
                className="mt-8 h-64 sm:h-80 bg-neutral-100 rounded-lg overflow-hidden shadow-md relative"
                variants={itemVariants}
                style={{ minHeight: '250px' }}
              >
                {/* Componente de mapa Leaflet */}
                <LeafletMap 
                  center={locationConfig.coordinates} 
                  zoom={locationConfig.zoom}
                  popupText={locationConfig.popupText}
                  className="absolute inset-0"
                />
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
