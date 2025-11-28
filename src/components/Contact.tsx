import React, { useState, useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sanitizeInput, validatePhoneNumber, sanitizePhoneNumber, rateLimit } from '../utils/security';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    'Baja de servicio',
    'Migracion de servicio',
    'Cambio Fibra/Antena',
    'Error en la compra de un producto',
    'Consulta de Facturación',
    'Cambio de Plan',
    'Falla del Servicio',
    'Soporte Técnico',
    'Solicitar Cotización Personalizada'
  ];

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};

    const sanitizedName = sanitizeInput(formData.name.trim());
    if (!sanitizedName || sanitizedName.length < 2) {
      newErrors.name = 'El nombre es requerido (mínimo 2 caracteres)';
    } else if (sanitizedName.length > 100) {
      newErrors.name = 'El nombre es demasiado largo';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'El correo no es válido';
    } else if (formData.email.length > 254) {
      newErrors.email = 'El correo es demasiado largo';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = 'El teléfono debe tener 10 dígitos';
    }

    const sanitizedMessage = sanitizeInput(formData.message.trim());
    if (!sanitizedMessage || sanitizedMessage.length < 10) {
      newErrors.message = 'El mensaje es requerido (mínimo 10 caracteres)';
    } else if (sanitizedMessage.length > 1000) {
      newErrors.message = 'El mensaje es demasiado largo';
    }

    if (!formData.service) {
      newErrors.service = 'Selecciona el tipo de consulta';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!rateLimit('contact-form')) {
      alert('Por favor, espera un momento antes de enviar otro mensaje.');
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizePhoneNumber(formData.phone),
        service: sanitizeInput(formData.service),
        message: sanitizeInput(formData.message)
      };

      const message = encodeURIComponent(
        `¡Nuevo contacto desde el sitio web!\n\n` +
        `Nombre: ${sanitizedData.name}\n` +
        `Email: ${sanitizedData.email}\n` +
        `Teléfono: ${sanitizedData.phone}\n` +
        `Tipo de consulta: ${sanitizedData.service}\n` +
        `Mensaje: ${sanitizedData.message}`
      );

      const link = document.createElement('a');
      link.href = `https://wa.me/5219992102204?text=${message}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let sanitizedValue = value;
    if (name === 'name' || name === 'message' || name === 'service') {
      sanitizedValue = value.slice(0, name === 'message' ? 1000 : 100);
    } else if (name === 'email') {
      sanitizedValue = value.slice(0, 254);
    } else if (name === 'phone') {
      sanitizedValue = value.slice(0, 20);
    }

    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  return (
    <section id="contacto" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322d3ee' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-6">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Contacto</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Conectemos
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contigo
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Listo para transformar tu conectividad? Nuestro equipo de expertos está
            aquí para ayudarte a encontrar la solución perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>

            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400">Error al enviar el mensaje. Por favor intenta de nuevo.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.name
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                    }`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                    }`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${errors.phone
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                    }`}
                  placeholder="999 123 4567"
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de consulta *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-300 ${errors.service
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                    }`}
                >
                  <option value="">Selecciona el tipo de consulta</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${errors.message
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-gray-600 focus:border-cyan-400 focus:ring-cyan-400/50'
                    }`}
                  placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Teléfono',
                  info: '+52 1 999 210 2204 / +52 999 111 1070',
                  description: 'Lunes a Viernes: 9:00 AM - 8:00 PM\nSábados: 9:00 AM - 2:00 PM\nDomingos: Cerrado',
                  action: () => window.open('tel:+5219992102204')
                },
                {
                  icon: Mail,
                  title: 'Correo Electrónico',
                  info: 'huchalebaltazar@skyweb.mx',
                  description: 'Respuesta en menos de 24 horas',
                  action: () => window.open('mailto:huchalebaltazar@skyweb.mx')
                },
                {
                  icon: MapPin,
                  title: 'Oficina Principal',
                  info: 'C. 138A 1318, 97249 Paseos Diamante De Opichen\nMérida, Yucatán',
                  description: 'Visítanos para una consulta personalizada',
                  action: () => window.open('https://maps.google.com/?q=Merida,Yucatan')
                }
              ].map((contact, index) => (
                <div
                  key={index}
                  onClick={contact.action}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-cyan-400 font-medium mb-2 whitespace-pre-line">
                        {contact.info}
                      </p>
                      <p className="text-gray-400 text-sm whitespace-pre-line">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-bold text-white mb-4">Nuestra Ubicación</h4>
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1764343684522!6m8!1m7!1sMT-tnTZbDUQWTLqHNUAbPA!2m2!1d20.93599248630852!2d-89.68429030193525!3f130.5862713439493!4f2.3705752169640135!5f0.7820865974627469"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-cyan-400" />
                <h4 className="text-lg font-bold text-white">Horarios de Atención</h4>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="text-cyan-400">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="text-cyan-400">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="text-gray-500">Cerrado</span>
                </div>
                <div className="pt-2 border-t border-gray-600">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
