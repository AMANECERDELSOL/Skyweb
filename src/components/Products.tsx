import React, { useCallback } from 'react';
import { ShoppingCart, Shield, Star, Plus } from 'lucide-react';
import { useCart } from './CartProvider';
import { useCurrency } from './CurrencyContext';
import { sanitizeInput, rateLimit } from '../utils/security';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  features: string[];
  popular?: boolean;
}

const Products = () => {
  const { addToCart } = useCart();
  const { currency, convertPrice, getCurrencySymbol } = useCurrency();

  const products: Product[] = [
    {
      id: 1,
      name: 'Audio Bidireccional + Dual Light + ColorVu] Turret TURBOHD 4K (8 Megapixel)',
      description: 'Modelo: DS-2CE78U0T-LTS | Marca: HIKVISION | Código SAT: 46171610 | Garantía: 5 años',
      price: 1255.54,
      originalPrice: 1400.50,
      image: 'https://i.postimg.cc/TP74bQN1/imagen1.png',
      category: 'Camaras',
      rating: 4.9,
      features: [
        'Resolución máxima: 8 megapíxeles (3840 x 2160)',
        'Ángulo de visión de 113° con lente de 2.8 mm',
        'Tecnología dual light: 40 mts IR y luz blanca',
        'Protección IP67 para uso interior y exterior',
        'Audio Bidireccional Integrado'
      ],
      popular: true
    },
    {
      id: 2,
      name: 'Audio Bidireccional + Dual Light + ColorVu] Bala TURBOHD 4K (8 Megapixel)',
      description: 'Modelo: DS-2CE16U0T-LTS | Marca: HIKVISION | Código SAT: 46171610 | Garantía: 5 años',
      price: 1176.46,
      originalPrice: 1460.54,
      image: 'https://i.postimg.cc/W3psN9F4/imagen2.png',
      category: 'Camaras',
      rating: 5.0,
      features: [
        'Resolución máxima 8 Megapixeles 4K (3840 x 2160)',
        'Lente fijo de 2.8 mm con ángulo de 113°',
        'Audio bidireccional full duplex integrado',
        'Dual light, grabe a color a partir de detección de movimiento'
      ]
    },
    {
      id: 3,
      name: '[TandemVu] Domo PTZ IP 4 Megapixel con Cámara Fija 4 Megapixel',
      description: 'Modelo: DS-2SE4C415MWG-E(14F0) | Marca: HIKVISION | Código SAT: 46171610 | Garantía: 5 años',
      price: 15271.92,
      originalPrice: 19727.49,
      image: 'https://i.postimg.cc/Zntt9V03/imagen3.png',
      category: 'Camaras',
      rating: 4.8,
      features: [
        'Resolución máxima de 4 megapíxeles (2560 x 1440)',
        'Zoom óptico 15x y digital 16x',
        'Iluminación mínima color 0.005 lux',
        'Rango infrarrojo de 100 mts con Smart IR'
      ],
      popular: true
    },
    {
      id: 4,
      name: 'Kit IP 1080p (2 Megapixel) / NVR de 4 Canales con 4 Puertos PoE',
      description: 'Modelo: KIPCV2M/4T | Marca: HIKVISION | Código SAT: 46171600 | Garantía: 5 años',
      price: 8063.12,
      originalPrice: 10671.66,
      image: 'https://i.postimg.cc/zBPv9mtN/imagen4.png',
      category: 'Camaras',
      rating: 4.9,
      features: [
        'Compresión H.265+ optimiza el almacenamiento de video',
        '4 puertos PoE+ con 36 Watts totales',
        'Resolución máxima de cámara 2 megapíxeles',
        '20 metros de luz blanca para imagen en color',
        'Soporte iOS/Android con app móvil avanzada'
      ]
    },
    {
      id: 5,
      name: 'Dual Light + ColorVu] Bala IP 4 Megapixel / Lente 4 mm',
      description: 'Modelo: DS-2CD2T47G2H-LI | Marca: HIKVISION | Código SAT: 46171610 | Garantía: 5 años',
      price: 4540.69,
      originalPrice: 5865.43,
      image: 'https://i.postimg.cc/cJCrT4hh/imagen5.png',
      category: 'Camaras',
      rating: 4.7,
      features: [
        'Resolución máxima de 4 MP (2688 x 1520)',
        'Iluminación mínima de 0.0005 lux (F1.0, AGC on)',
        'Visión nocturna hasta 60 m IR EXIR',
        'WDR de 130 dB para mejor contraste',
        'Compatible con Hik-Connect P2P para acceso remoto'
      ]
    },
    {
      id: 6,
      name: 'Dual Light] Domo IP 6 Megapixel / Lente 2.8 mm',
      description: 'Modelo: DS-2CD1163G2-LIU | Marca: HIKVISION | Código SAT: 46171610 | Garantía: 5 años',
      price: 2321,
      image: 'https://i.postimg.cc/GpTbHBzW/imagen6.png',
      category: 'Camaras',
      rating: 4.6,
      features: [
        'Resolución máxima de 6 megapíxeles (3200 x 1800)',
        'Iluminación mínima color de 0.005 lux (F1.6)',
        'Distancia IR hasta 30 metros',
        'Compresión de video H.265+ / H.265 / H.264',
        'Uso exterior certificado IP67'
      ]
    }
  ];

  const handleWhatsAppPurchase = useCallback((product: Product) => {
    if (!rateLimit('products-whatsapp')) {
      alert('Por favor, espera un momento antes de enviar otra solicitud.');
      return;
    }
    const sanitizedName = sanitizeInput(product.name);
    const message = encodeURIComponent(
      `¡Hola Skyweb! Me interesa comprar el producto: ${sanitizedName} - Precio: ${getCurrencySymbol()}${convertPrice(product.price)} ${currency}. ¿Podrían ayudarme con la compra?`
    );
    const link = document.createElement('a');
    link.href = `https://wa.me/5219992102204?text=${message}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  }, [currency, convertPrice, getCurrencySymbol]);

  const handleAddToCart = useCallback((product: Product) => {
    addToCart({
      id: `product-${product.id}`,
      type: 'product',
      name: sanitizeInput(product.name),
      price: parseFloat(convertPrice(product.price))
    });
  }, [addToCart, convertPrice]);

  return (
    <section id="productos" className="py-20 bg-gray-900 relative overflow-hidden">
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
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Cámaras de Seguridad</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Sistemas CCTV
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Profesionales
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre nuestra gama completa de cámaras de seguridad HIKVISION de última generación
            con precios competitivos y garantía total.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105"
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Popular
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">({product.rating})</span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {getCurrencySymbol()}{convertPrice(product.price)}
                      </span>
                      <span className="text-sm text-gray-400">{currency}</span>
                    </div>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {getCurrencySymbol()}{convertPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Agregar al Carrito</span>
                  </button>
                  <button
                    onClick={() => handleWhatsAppPurchase(product)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Comprar por WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas una instalación personalizada?
            </h3>
            <p className="text-gray-400 mb-6">
              Contáctanos para soluciones de videovigilancia a medida y cotizaciones especiales para empresas.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  '¡Hola Skyweb! Me interesa una instalación personalizada de cámaras de seguridad. ¿Podrían ayudarme con una cotización?'
                );
                window.open(`https://wa.me/5219992102204?text=${message}`, '_blank');
              }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Solicitar Cotización</span>
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

export default Products;