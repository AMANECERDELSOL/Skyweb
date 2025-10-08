import React, { useState, useCallback } from 'react';
import { MapPin, Wifi, Zap, Shield, Star, Check, ShoppingCart } from 'lucide-react';
import FadeInSection from './FadeInSection';
import AnimatedText from './AnimatedText';
import { useCart } from './CartProvider';
import { useCurrency } from './CurrencyContext';
import { sanitizeInput, rateLimit } from '../utils/security';

interface Package {
  id: number;
  name: string;
  speed: string;
  downloadSpeed: number;
  uploadSpeed: number;
  price: number;
  installationCost: number;
  features: string[];
  popular?: boolean;
  recommended?: boolean;
}

interface Zone {
  id: string;
  name: string;
  description: string;
  packages: Package[];
  specialOffer?: string;
}

const Packages = () => {
  const [selectedZone, setSelectedZone] = useState<string>('caucel');
  const { addToCart } = useCart();
  const { currency, convertPrice, getCurrencySymbol } = useCurrency();

  const zones: Zone[] = [
    {
      id: 'caucel',
      name: 'Zona Caucel y Portal San Pedro',
      description: 'Fibra óptica de alta velocidad con instalación desde $300',
      packages: [
        {
          id: 1,
          name: 'Paquete Básico',
          speed: '20 Mbps',
          downloadSpeed: 20,
          uploadSpeed: 5,
          price: 250,
          installationCost: 300,
          features: ['20 Mbps descarga / 5 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
        },
        {
          id: 2,
          name: 'Paquete Estudiante',
          speed: '30 Mbps',
          downloadSpeed: 30,
          uploadSpeed: 10,
          price: 300,
          installationCost: 300,
          features: ['30 Mbps descarga / 10 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
          popular: true,
        },
        {
          id: 3,
          name: 'Paquete Entretengas',
          speed: '50 Mbps',
          downloadSpeed: 50,
          uploadSpeed: 20,
          price: 400,
          installationCost: 300,
          features: ['50 Mbps descarga / 20 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
          recommended: true,
        },
        {
          id: 4,
          name: 'Paquete Super',
          speed: '100 Mbps',
          downloadSpeed: 100,
          uploadSpeed: 50,
          price: 500,
          installationCost: 300,
          features: ['100 Mbps descarga / 50 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
        },
        {
          id: 5,
          name: 'Paquete Plus',
          speed: '200 Mbps',
          downloadSpeed: 200,
          uploadSpeed: 100,
          price: 600,
          installationCost: 300,
          features: ['200 Mbps descarga / 100 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
        },
      ],
    },
    {
      id: 'diamante',
      name: 'Diamante y Opichén',
      description: 'Fibra óptica con precios especiales para la comunidad',
      packages: [
        {
          id: 6,
          name: 'Paquete Básico',
          speed: '20 Mbps',
          downloadSpeed: 20,
          uploadSpeed: 5,
          price: 200,
          installationCost: 300,
          features: ['20 Mbps descarga / 5 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
        },
        {
          id: 7,
          name: 'Paquete Estudiante',
          speed: '30 Mbps',
          downloadSpeed: 30,
          uploadSpeed: 10,
          price: 290,
          installationCost: 300,
          features: ['30 Mbps descarga / 10 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
          popular: true,
        },
        {
          id: 8,
          name: 'Paquete Entretengas',
          speed: '50 Mbps',
          downloadSpeed: 50,
          uploadSpeed: 20,
          price: 390,
          installationCost: 300,
          features: ['50 Mbps descarga / 20 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
          recommended: true,
        },
        {
          id: 9,
          name: 'Paquete Super',
          speed: '100 Mbps',
          downloadSpeed: 100,
          uploadSpeed: 50,
          price: 450,
          installationCost: 300,
          features: ['100 Mbps descarga / 50 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
        },
        {
          id: 10,
          name: 'Paquete Plus',
          speed: '200 Mbps',
          downloadSpeed: 200,
          uploadSpeed: 100,
          price: 550,
          installationCost: 300,
          features: ['200 Mbps descarga / 100 Mbps subida', 'Fibra óptica', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
        },
      ],
    },
    {
      id: 'oasis',
      name: 'Oasis del Oriente',
      description: 'Internet inalámbrico con un mes gratis y instalación completa',
      specialOffer: 'Un mes gratis + Instalación completa por $500',
      packages: [
        {
          id: 11,
          name: 'Paquete Básico',
          speed: '6 Mbps',
          downloadSpeed: 6,
          uploadSpeed: 2,
          price: 200,
          installationCost: 500,
          features: ['6 Mbps de velocidad', 'Antena + módem incluidos', 'Un mes gratis', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
          popular: true,
        },
        {
          id: 12,
          name: 'Paquete Estudiante',
          speed: '10 Mbps',
          downloadSpeed: 10,
          uploadSpeed: 3,
          price: 300,
          installationCost: 500,
          features: ['10 Mbps de velocidad', 'Antena + módem incluidos', 'Un mes gratis', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
          recommended: true,
        },
        {
          id: 13,
          name: 'Paquete Entretengas',
          speed: '20 Mbps',
          downloadSpeed: 20,
          uploadSpeed: 5,
          price: 400,
          installationCost: 500,
          features: ['20 Mbps de velocidad', 'Antena + módem incluidos', 'Un mes gratis', 'Equipos en comodato', 'Sin plan forzoso', 'Internet ilimitado'],
        },
      ],
    },
  ];

  const currentZone = zones.find(zone => zone.id === selectedZone) || zones[0];

  const handlePackageSelect = useCallback((packageItem: Package) => {
    if (!rateLimit('packages-whatsapp')) {
      alert('Por favor, espera un momento antes de enviar otra solicitud.');
      return;
    }
    const sanitizedName = sanitizeInput(packageItem.name);
    const sanitizedZone = sanitizeInput(currentZone.name);
    const message = encodeURIComponent(
      `¡Hola Skyweb! Me interesa el "${sanitizedName}" de ${packageItem.speed} por ${getCurrencySymbol()}${convertPrice(packageItem.price)} ${currency} mensuales en la zona ${sanitizedZone}. Costo de instalación: ${getCurrencySymbol()}${convertPrice(packageItem.installationCost)} ${currency}. ¿Podrían darme más información?`
    );
    const link = document.createElement('a');
    link.href = `https://wa.me/5219992102204?text=${message}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  }, [currentZone.name, currency, convertPrice, getCurrencySymbol]);

  const handleAddToCart = useCallback((packageItem: Package) => {
    addToCart({
      id: `package-${packageItem.id}`,
      type: 'package',
      name: sanitizeInput(`${packageItem.name} - ${packageItem.speed}`),
      price: parseFloat(convertPrice(packageItem.price)),
      zone: sanitizeInput(currentZone.name),
      installationCost: parseFloat(convertPrice(packageItem.installationCost))
    });
  }, [addToCart, convertPrice, currentZone.name]);
  return (
    <section id="paquetes" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
              <MapPin className="w-4 h-4 text-cyan-400 animate-bounce" />
              <span className="text-cyan-400 font-medium">Paquetes por Zona</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
                <AnimatedText text="Elige tu" delay={400} speed={100} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                <AnimatedText text="Zona de Cobertura" delay={1200} speed={80} />
              </span>
            </h2>
            
            <FadeInSection delay={2500} direction="up">
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Selecciona tu zona para ver los paquetes de internet disponibles 
                con la mejor velocidad y precio para tu ubicación.
              </p>
            </FadeInSection>
          </div>
        </FadeInSection>

        {/* Zone Selector */}
        <FadeInSection delay={800} direction="up">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {zones.map((zone, index) => (
              <FadeInSection key={zone.id} delay={1000 + (index * 200)} direction="up">
                <button
                  onClick={() => setSelectedZone(zone.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-500 transform hover:scale-110 ${
                    selectedZone === zone.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105 animate-pulse'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-400/50'
                  }`}
                >
                  <MapPin className={`w-5 h-5 ${selectedZone === zone.id ? 'animate-bounce' : ''}`} />
                  <div className="text-left">
                    <div className="font-bold">{zone.name}</div>
                    <div className="text-xs opacity-75">{zone.description}</div>
                  </div>
                </button>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>

        {/* Selected Zone Info */}
        <FadeInSection delay={1200} direction="fade">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              <AnimatedText text={currentZone.name} delay={1400} speed={50} />
            </h3>
            <p className="text-gray-400 mb-4">
              {currentZone.description}
            </p>
            {currentZone.specialOffer && (
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-2">
                <Star className="w-4 h-4 text-green-400 animate-pulse" />
                <span className="text-green-400 font-medium">{currentZone.specialOffer}</span>
              </div>
            )}
          </div>
        </FadeInSection>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {currentZone.packages.map((packageItem, index) => (
            <FadeInSection key={packageItem.id} delay={1600 + (index * 150)} direction="up">
              <div
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 transform hover:scale-110 hover:rotate-1 ${
                  packageItem.recommended
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/25 animate-pulse hover:animate-none'
                    : packageItem.popular
                    ? 'border-orange-500/50 shadow-lg shadow-orange-500/25 animate-pulse hover:animate-none'
                    : 'border-gray-700/50 hover:border-cyan-400/50'
                }`}
              >
              {/* Badges */}
              {packageItem.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1 animate-pulse">
                    <Star className="w-3 h-3 animate-spin" />
                    <span>Recomendado</span>
                  </div>
                </div>
              )}
              
              {packageItem.popular && !packageItem.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                    Popular
                  </div>
                </div>
              )}

              {/* Package Content */}
              <div className="text-center">
                {/* Speed Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-4 animate-pulse hover:animate-none hover:scale-125 transition-all duration-500">
                  <Wifi className="w-8 h-8 text-white" />
                </div>

                {/* Package Name */}
                <h4 className="text-xl font-bold text-white mb-2">
                  {packageItem.name}
                </h4>

                {/* Speed */}
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {packageItem.speed}
                </div>

                {/* Speed Details */}
                <div className="text-sm text-gray-400 mb-4">
                  {packageItem.downloadSpeed} Mbps descarga / {packageItem.uploadSpeed} Mbps subida
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-white">
                      {getCurrencySymbol()}{convertPrice(packageItem.price)}
                    </span>
                    <span className="text-gray-400 text-sm">{currency}/mes</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    + {getCurrencySymbol()}{convertPrice(packageItem.installationCost)} instalación
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {packageItem.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 animate-pulse" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleAddToCart(packageItem)}
                    className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Agregar</span>
                  </button>
                  <button
                    onClick={() => handlePackageSelect(packageItem)}
                    className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-500 transform hover:scale-110 ${
                      packageItem.recommended
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 animate-pulse hover:animate-none'
                        : packageItem.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-orange-500/25 animate-pulse hover:animate-none'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25'
                    }`}
                  >
                    Contratar Ahora
                  </button>
                </div>
              </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Additional Info */}
        <FadeInSection delay={2500} direction="up">
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Tu zona no aparece en la lista?
              </h3>
              <p className="text-gray-400 mb-6">
                Estamos expandiendo nuestra cobertura constantemente. 
                Contáctanos para verificar disponibilidad en tu área.
              </p>
              <button
                onClick={() => {
                  if (!rateLimit('packages-availability')) {
                    alert('Por favor, espera un momento antes de enviar otra solicitud.');
                    return;
                  }
                  const message = encodeURIComponent(
                    sanitizeInput('¡Hola Skyweb! Mi zona no aparece en la lista de paquetes. ¿Podrían verificar la disponibilidad de servicio en mi área?')
                  );
                  const link = document.createElement('a');
                  link.href = `https://wa.me/5219992102204?text=${message}`;
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  link.click();
                }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-110 animate-pulse hover:animate-none"
              >
                <span>Consultar Disponibilidad</span>
                <Zap className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Packages;