import React, { useState } from 'react';
import { ShoppingCart, Wifi, Shield, Router, Monitor, Star, Filter, Plus } from 'lucide-react';
import { useCart } from './CartProvider';
import CurrencyConverter from './CurrencyConverter';

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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCurrency, setSelectedCurrency] = useState<'MXN' | 'USD' | 'EUR'>('MXN');
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 1,
      name: 'Internet Fibra Óptica 100 Mbps',
      description: 'Conexión de alta velocidad perfecta para hogares con múltiples dispositivos',
      price: 599,
      originalPrice: 799,
      image: 'https://postimg.cc/image_url_here',
      category: 'internet',
      rating: 4.9,
      features: ['100 Mbps simétricos', 'Instalación gratuita', 'Router WiFi 6 incluido', 'Soporte 24/7'],
      popular: true
    },
    {
      id: 2,
      name: 'Internet Fibra Óptica 300 Mbps',
      description: 'Velocidad premium para empresas y usuarios exigentes',
      price: 899,
      originalPrice: 1199,
      image: 'https://postimg.cc/image_url_here',
      category: 'internet',
      rating: 5.0,
      features: ['300 Mbps simétricos', 'IP estática', 'Router empresarial', 'SLA 99.9%']
    },
    {
      id: 3,
      name: 'Kit CCTV 4 Cámaras 4K',
      description: 'Sistema completo de videovigilancia con tecnología 4K',
      price: 4999,
      originalPrice: 6499,
      image: 'https://postimg.cc/image_url_here',
      category: 'cctv',
      rating: 4.8,
      features: ['4 cámaras 4K', 'DVR 8 canales', 'Visión nocturna', 'App móvil incluida'],
      popular: true
    },
    {
      id: 4,
      name: 'Kit CCTV 8 Cámaras 4K',
      description: 'Solución profesional para empresas y propiedades grandes',
      price: 8999,
      originalPrice: 11999,
      image: 'https://postimg.cc/image_url_here',
      category: 'cctv',
      rating: 4.9,
      features: ['8 cámaras 4K', 'NVR 16 canales', 'Almacenamiento 2TB', 'Acceso remoto']
    },
    {
      id: 5,
      name: 'Router WiFi 6 Pro',
      description: 'Router de última generación con tecnología WiFi 6',
      price: 2499,
      originalPrice: 2999,
      image: 'https://postimg.cc/image_url_here',
      category: 'equipos',
      rating: 4.7,
      features: ['WiFi 6 AX3000', 'Cobertura 300m²', '4 antenas', 'Control parental']
    },
    {
      id: 6,
      name: 'Switch Empresarial 24 Puertos',
      description: 'Switch gestionable para redes empresariales',
      price: 3999,
      image: 'https://postimg.cc/image_url_here',
      category: 'equipos',
      rating: 4.6,
      features: ['24 puertos Gigabit', 'Gestionable', 'PoE+', 'Montaje en rack']
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: Monitor },
    { id: 'internet', name: 'Internet', icon: Wifi },
    { id: 'cctv', name: 'CCTV', icon: Shield },
    { id: 'equipos', name: 'Equipos', icon: Router }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const convertPrice = (price: number) => {
    const rates = { USD: 18.5, EUR: 20.2 };
    switch (selectedCurrency) {
      case 'USD':
        return (price / rates.USD).toFixed(2);
      case 'EUR':
        return (price / rates.EUR).toFixed(2);
      default:
        return price.toFixed(2);
    }
  };

  const getCurrencySymbol = () => {
    switch (selectedCurrency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '$';
    }
  };

  const handleWhatsAppPurchase = (product: Product) => {
    const message = encodeURIComponent(
      `¡Hola Skyweb! Me interesa comprar el producto: ${product.name} - Precio: ${getCurrencySymbol()}${convertPrice(product.price)} ${selectedCurrency}. ¿Podrían ayudarme con la compra?`
    );
    window.open(`https://wa.me/5219992102204?text=${message}`, '_blank');
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: `product-${product.id}`,
      type: 'product',
      name: product.name,
      price: parseFloat(convertPrice(product.price))
    });
  };
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
            <ShoppingCart className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Tienda Online</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Productos y
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Servicios Premium
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Descubre nuestra gama completa de productos tecnológicos de última generación 
            con precios competitivos y garantía total.
          </p>

          {/* Currency Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700">
              {['MXN', 'USD', 'EUR'].map((currency) => (
                <button
                  key={currency}
                  onClick={() => setSelectedCurrency(currency as 'MXN' | 'USD' | 'EUR')}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCurrency === currency
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {currency}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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
                      <span className="text-sm text-gray-400">{selectedCurrency}</span>
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
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-400 mb-6">
              Contáctanos para soluciones personalizadas y cotizaciones especiales para empresas.
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  '¡Hola Skyweb! Me interesa conocer más productos y servicios personalizados. ¿Podrían ayudarme?'
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