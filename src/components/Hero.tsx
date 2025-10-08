import React from 'react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import AnimatedText from './AnimatedText';
import FadeInSection from './FadeInSection';

const Hero = () => {
  const handleCotizarClick = () => {
    const message = encodeURIComponent(
      '¡Hola Skyweb! Me interesa cotizar sus servicios de internet y tecnología. ¿Podrían ayudarme?'
    );
    window.open(`https://wa.me/5219992102204?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <ParticleBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" style={{ zIndex: 2 }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <FadeInSection delay={300} direction="fade">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-medium">Bienvenido a SkyWeb</span>
            </div>
          </FadeInSection>

          {/* Main Heading */}
          <FadeInSection delay={600} direction="up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent block">
                <AnimatedText text="Conectividad" delay={800} speed={100} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block">
                <AnimatedText text="del Futuro" delay={1800} speed={100} />
              </span>
            </h1>
          </FadeInSection>

          {/* Subtitle */}
          <FadeInSection delay={2800} direction="up">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              <AnimatedText 
                text="Transformamos tu experiencia digital con internet de alta velocidad, sistemas de seguridad avanzados y soluciones tecnológicas innovadoras en Mérida, Yucatán."
                delay={3000}
                speed={30}
              />
            </p>
          </FadeInSection>

          {/* Features */}
          <FadeInSection delay={4500} direction="up">
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Globe, text: 'Internet Fibra Óptica' },
                { icon: Shield, text: 'Seguridad CCTV' },
                { icon: Zap, text: 'Instalación Express' },
              ].map((feature, index) => (
                <FadeInSection key={index} delay={4800 + (index * 200)} direction="up">
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
                    <feature.icon className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <span className="text-gray-300 font-medium">{feature.text}</span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </FadeInSection>

          {/* CTA Buttons */}
          <FadeInSection delay={5500} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleCotizarClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-110 animate-pulse hover:animate-none"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>¡Cotiza tu Servicio!</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <a
                href="#servicios"
                className="px-8 py-4 border-2 border-cyan-400/50 rounded-full font-bold text-cyan-400 text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105"
              >
                Conocer Servicios
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <FadeInSection delay={6000} direction="fade">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center hover:border-cyan-400 transition-colors duration-300">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Hero;