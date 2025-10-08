import React from 'react';
import { CartProvider } from './components/CartProvider';
import { CurrencyProvider } from './components/CurrencyContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import PrivacyNotice from './components/PrivacyNotice';
import { useState, useEffect } from 'react';
import { preventClickJacking } from './utils/security';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    preventClickJacking();

    const handleToggleCart = () => {
      setIsCartOpen(prev => !prev);
    };

    window.addEventListener('toggleCart', handleToggleCart);
    return () => window.removeEventListener('toggleCart', handleToggleCart);
  }, []);

  return (
    <CurrencyProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-900">
          <PrivacyNotice />
          <Header />
          <Hero />
          <Packages />
          <Services />
          <Products />
          <About />
          <Testimonials />
          <Contact />
          <Legal />
          <Footer />
          <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;