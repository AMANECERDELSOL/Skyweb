import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  service: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'María González',
      role: 'Directora de TI',
      company: 'Empresa Constructora Maya',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Skyweb transformó completamente nuestra conectividad empresarial. El internet de fibra óptica es increíblemente rápido y estable. Su equipo técnico es profesional y siempre está disponible cuando los necesitamos.',
      service: 'Internet Empresarial 300 Mbps'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      role: 'Propietario',
      company: 'Restaurante La Tradición',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'El sistema CCTV que instalaron en mi restaurante es excepcional. Las cámaras 4K captan cada detalle y puedo monitorear todo desde mi celular. Me siento mucho más seguro con Skyweb.',
      service: 'Kit CCTV 8 Cámaras 4K'
    },
    {
      id: 3,
      name: 'Ana Herrera',
      role: 'Madre de Familia',
      company: 'Fraccionamiento Las Américas',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Desde que tenemos internet de Skyweb, toda la familia puede trabajar y estudiar desde casa sin problemas. La velocidad es constante y nunca se corta. ¡Excelente servicio!',
      service: 'Internet Residencial 100 Mbps'
    },
    {
      id: 4,
      name: 'Roberto Cámara',
      role: 'Gerente General',
      company: 'Hotel Boutique Mérida',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'La instalación fue rápida y profesional. Nuestros huéspedes siempre elogian la velocidad del WiFi. Skyweb nos ayudó a mejorar significativamente la experiencia de nuestros clientes.',
      service: 'Solución Hotelera Completa'
    },
    {
      id: 5,
      name: 'Lucía Pech',
      role: 'Emprendedora',
      company: 'Tienda Online Yucatán',
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Como trabajo desde casa con mi tienda online, necesitaba una conexión súper confiable. Skyweb superó mis expectativas. El soporte técnico es increíble, siempre resuelven todo rápidamente.',
      service: 'Internet Residencial 300 Mbps'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-6">
            <Quote className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Testimonios</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Lo que Dicen
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nuestros Clientes
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro.
            Descubre por qué confían en Skyweb para su conectividad.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-4">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 font-light italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Service Badge */}
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
                <span className="text-cyan-400 text-sm font-medium">
                  {testimonials[currentIndex].service}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-1">
                    <User className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-cyan-400 text-sm font-medium">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 rounded-full p-3 transition-all duration-300 border border-gray-600 hover:border-cyan-400"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 rounded-full p-3 transition-all duration-300 border border-gray-600 hover:border-cyan-400"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-cyan-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-400 font-medium">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-400 font-medium">Clientes Recomiendan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <div className="text-gray-400 font-medium">Reseñas Positivas</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para unirte a nuestros clientes satisfechos?
            </h3>
            <p className="text-gray-400 mb-6">
              Descubre por qué somos la opción preferida en Mérida para servicios de internet y tecnología.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  '¡Hola Skyweb! He visto los testimonios de sus clientes y me interesa conocer más sobre sus servicios. ¿Podrían ayudarme?'
                );
                window.open(`https://wa.me/5299912345678?text=${message}`, '_blank');
                window.open(`https://wa.me/5219992102204?text=${message}`, '_blank');
              }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>¡Quiero ser el Siguiente!</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
