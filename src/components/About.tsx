import React from 'react';
import { MapPin, Users, Award, Clock, Target, Heart } from 'lucide-react';
import FadeInSection from './FadeInSection';
import CounterAnimation from './CounterAnimation';
import AnimatedText from './AnimatedText';

const About = () => {
  const stats = [
    { icon: Users, number: '1000+', label: 'Clientes Satisfechos' },
    { icon: Award, number: '5+', label: 'Años de Experiencia' },
    { icon: Clock, number: '24/7', label: 'Soporte Técnico' },
    { icon: Target, number: '99.9%', label: 'Tiempo de Actividad' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovación Constante',
      description: 'Siempre a la vanguardia de las últimas tecnologías para ofrecer las mejores soluciones.',
    },
    {
      icon: Heart,
      title: 'Compromiso Local',
      description: 'Orgullosamente yucatecos, comprometidos con el desarrollo tecnológico de nuestra región.',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Todos nuestros servicios cuentan con garantía y el respaldo de marcas líderes mundiales.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <FadeInSection delay={200} direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-6">
              <MapPin className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-medium">Sobre Nosotros</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
                <AnimatedText text="Conectando Yucatán" delay={400} speed={80} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                <AnimatedText text="con el Futuro" delay={1600} speed={80} />
              </span>
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <FadeInSection delay={600} direction="left">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                <AnimatedText text="Nuestra Historia" delay={800} speed={100} />
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <FadeInSection delay={1500} direction="up">
                  <p>
                    Skyweb nació en el corazón de Mérida, Yucatán, con la visión de transformar 
                    la conectividad en nuestra región. Desde nuestros inicios, hemos sido pioneros 
                    en llevar tecnología de punta a hogares y empresas yucatecas.
                  </p>
                </FadeInSection>
                <FadeInSection delay={1800} direction="up">
                  <p>
                    Con más de 5 años de experiencia, nos hemos consolidado como líderes en 
                    servicios de internet de fibra óptica, sistemas de seguridad CCTV y 
                    soluciones tecnológicas integrales. Nuestro compromiso va más allá de 
                    la conectividad: construimos puentes hacia el futuro digital.
                  </p>
                </FadeInSection>
                <FadeInSection delay={2100} direction="up">
                  <p>
                    Cada proyecto que realizamos refleja nuestro orgullo yucateco y nuestra 
                    pasión por la excelencia tecnológica. Creemos que la innovación debe ser 
                    accesible para todos, y trabajamos incansablemente para hacer realidad 
                    esta visión en cada rincón de la Península de Yucatán.
                  </p>
                </FadeInSection>
              </div>

            {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <FadeInSection delay={2400} direction="left">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-cyan-400 mb-3">Nuestra Misión</h4>
                    <p className="text-gray-300 text-sm">
                      Proporcionar soluciones tecnológicas de vanguardia que impulsen el 
                      crecimiento y la conectividad de nuestra comunidad yucateca.
                    </p>
                  </div>
                </FadeInSection>
                <FadeInSection delay={2700} direction="right">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-purple-400 mb-3">Nuestra Visión</h4>
                    <p className="text-gray-300 text-sm">
                      Ser la empresa líder en telecomunicaciones del sureste mexicano, 
                      reconocida por su innovación y compromiso con la excelencia.
                    </p>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </FadeInSection>

          {/* Image/Visual */}
          <FadeInSection delay={1000} direction="right">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Equipo Skyweb"
                  className="w-full h-80 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-xl" />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-4 animate-bounce">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-4 animate-pulse">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Stats */}
        <FadeInSection delay={1200} direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <FadeInSection key={index} delay={1400 + (index * 200)} direction="up">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-125 transition-all duration-500 animate-pulse group-hover:animate-none">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    <CounterAnimation end={parseInt(stat.number.replace(/[^\d]/g, ''))} suffix={stat.number.replace(/[\d]/g, '')} />
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>

        {/* Values */}
        <FadeInSection delay={1600} direction="up">
          <div>
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              <AnimatedText text="Nuestros Valores" delay={1800} speed={100} />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <FadeInSection key={index} delay={2200 + (index * 300)} direction="up">
                  <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:rotate-1">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={2800} direction="up">
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Quieres ser parte de nuestra historia?
              </h3>
              <p className="text-gray-400 mb-6">
                Únete a los miles de yucatecos que ya confían en Skyweb para su conectividad.
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    '¡Hola Skyweb! Me interesa conocer más sobre sus servicios y formar parte de su comunidad de clientes satisfechos.'
                  );
                  window.open(`https://wa.me/5219992102204?text=${message}`, '_blank');
                }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-110 animate-pulse hover:animate-none"
              >
                <span>Contáctanos Ahora</span>
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

export default About;