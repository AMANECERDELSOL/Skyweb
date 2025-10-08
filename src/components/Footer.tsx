import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/WhatsApp Image 2025-09-04 at 8.18.21 PM.jpeg" 
                alt="Skyweb Logo" 
                className="h-12 w-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Conectando Mérida con tecnología de vanguardia. Internet de fibra óptica, 
              sistemas de seguridad y soluciones tecnológicas para hogares y empresas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    C. 138A 1318, 97249 Paseos Diamante De Opichen
                  </p>
                  <p className="text-gray-400 text-xs">Mérida, Yucatán</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <a href="tel:+5219992102204" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    +52 1 999 210 2204
                  </a>
                  <br />
                  <a href="tel:+5299911111070" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    +52 999 111 1070
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:huchalebaltazar@skyweb.mx" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  huchalebaltazar@skyweb.mx
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Horarios</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Lunes - Viernes</p>
                  <p className="text-gray-400 text-xs">9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Sábados</p>
                  <p className="text-gray-400 text-xs">9:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Domingos</p>
                  <p className="text-red-400 text-xs">Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Internet Residencial
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Internet Empresarial
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Sistemas CCTV
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Torres de Internet
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Soporte Técnico
                </a>
              </li>
              <li>
                <a href="#legal" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                  Documentos Legales
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Skyweb. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;