import React, { useState, useEffect } from 'react';
import { Menu, X, Wifi, ShoppingCart } from 'lucide-react';
import { useCart } from './CartProvider';
import CurrencySelector from './CurrencySelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleCart = () => {
    const cartEvent = new CustomEvent('toggleCart');
    window.dispatchEvent(cartEvent);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/WhatsApp Image 2025-09-04 at 8.18.21 PM.jpeg" 
              alt="Skyweb Logo" 
              className="h-12 w-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('paquetes')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Paquetes
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection('legal')}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Legal
            </button>
          </nav>

          {/* Currency, Cart and Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Currency Selector */}
            <CurrencySelector />

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Contact Button */}
            <a
              href="tel:+5219992102204"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Wifi className="w-4 h-4" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Cart Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50">
            <nav className="py-4 space-y-2">
              <div className="px-4 py-3 flex justify-center">
                <CurrencySelector />
              </div>
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('paquetes')}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                Paquetes
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                Contacto
              </button>
              <button
                onClick={() => scrollToSection('legal')}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300 font-medium"
              >
                Legal
              </button>
              <div className="px-4 py-2">
                <a
                  href="tel:+5219992102204"
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <Wifi className="w-4 h-4" />
                  <span>Contactar</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;