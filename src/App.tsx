import React from 'react';
import { CartProvider } from './components/CartProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <Hero />
        <Packages />
        <Services />
        <Products />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;