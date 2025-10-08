import React, { useCallback, useMemo } from 'react';
import { Wifi, Shield, Radio, Smartphone, Settings } from 'lucide-react';
import FadeInSection from './FadeInSection';
import AnimatedText from './AnimatedText';
import { sanitizeInput, rateLimit } from '../utils/security';

const Services = () => {
  const services = useMemo(() => [
    {
      icon: Wifi,
      title: 'Internet Residencial',
      description: 'Conexión de fibra óptica de alta velocidad para tu hogar con velocidades de hasta 1 Gbps.',
      features: ['Fibra óptica', 'Sin límites de descarga', 'IP estática disponible', 'Soporte 24/7'],
      color: 'from-cyan-500 to-blue-600',
      link: '#productos'
    },
    {
      icon: Shield,
      title: 'Sistemas CCTV',
      description: 'Sistemas de videovigilancia profesionales con tecnología IP y acceso remoto.',
      features: ['Cámaras 4K', 'Visión nocturna', 'Acceso móvil', 'Almacenamiento en la nube'],
      color: 'from-purple-500 to-pink-600',
      link: '#productos'
    },
    {
      icon: Radio,
      title: 'Instalación de Torres',
      description: 'Diseño e instalación de torres de telecomunicaciones para empresas y proveedores.',
      features: ['Diseño estructural', 'Instalación profesional', 'Mantenimiento', 'Certificaciones'],
      color: 'from-orange-500 to-red-600',
      link: '#contacto'
    },
    {
      icon: Smartphone,
      title: 'Internet Empresarial',
      description: 'Soluciones de conectividad dedicadas para empresas con SLA garantizado.',
      features: ['Ancho de banda dedicado', 'SLA 99.9%', 'Soporte prioritario', 'Configuración personalizada'],
      color: 'from-green-500 to-teal-600',
      link: '#contacto'
    },
    {
      icon: Settings,
      title: 'Soporte Técnico',
      description: 'Servicio técnico especializado y mantenimiento preventivo para todos nuestros servicios.',
      features: ['Soporte remoto', 'Visitas técnicas', 'Mantenimiento preventivo', 'Capacitación'],
      color: 'from-gray-500 to-gray-700',
      link: '#contacto'
    }
  ], []);

  const handleServiceClick = useCallback((link: string) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(sanitizeInput(link));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="servicios" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322d3ee' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeInSection delay={200} direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-6">
              <Settings className="w-4 h-4 text-cyan-400 animate-spin" />
              <span className="text-cyan-400 font-medium">Nuestros Servicios</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
                <AnimatedText text="Soluciones Tecnológicas" delay={400} speed={80} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                <AnimatedText text="de Vanguardia" delay={2000} speed={80} />
              </span>
            </h2>
            
            <FadeInSection delay={3000} direction="up">
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Ofrecemos una gama completa de servicios de telecomunicaciones y tecnología 
                diseñados para impulsar tu conectividad al siguiente nivel.
              </p>
            </FadeInSection>
          </div>
        </FadeInSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInSection key={index} delay={600 + (index * 200)} direction="up">
              <div
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:rotate-1 cursor-pointer"
                onClick={() => handleServiceClick(service.link)}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse group-hover:animate-none`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full animate-pulse`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center animate-bounce`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA Section */}
        <FadeInSection delay={2000} direction="up">
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Necesitas una solución personalizada?
              </h3>
              <p className="text-gray-400 mb-6">
                Nuestro equipo de expertos puede diseñar la solución perfecta para tus necesidades específicas.
              </p>
              <button
                onClick={() => {
                  if (!rateLimit('services-whatsapp')) {
                    alert('Por favor, espera un momento antes de enviar otra solicitud.');
                    return;
                  }
                  const message = encodeURIComponent(
                    sanitizeInput('¡Hola Skyweb! Me interesa conocer más sobre sus servicios personalizados. ¿Podrían contactarme?')
                  );
                  const link = document.createElement('a');
                  link.href = `https://wa.me/5219992102204?text=${message}`;
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  link.click();
                }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-110 animate-pulse hover:animate-none"
              >
                <span>Solicitar Consulta</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Services;