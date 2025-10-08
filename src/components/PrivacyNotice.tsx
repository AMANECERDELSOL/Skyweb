import React, { useEffect, useState } from 'react';
import { X, Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyNotice = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedPrivacy = localStorage.getItem('privacyAccepted');
    if (!hasAcceptedPrivacy) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('privacyAccepted', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-cyan-500/20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

        <div className="p-8 overflow-y-auto max-h-[90vh]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Aviso de Privacidad
              </h2>
            </div>
            <button
              onClick={handleDecline}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>

          <div className="space-y-6 text-gray-300">
            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-6">
              <p className="text-lg leading-relaxed">
                En <span className="font-bold text-cyan-400">Skyweb</span>, nos comprometemos a proteger tu privacidad
                y garantizar la seguridad de tus datos personales. Este aviso describe cómo recopilamos,
                usamos y protegemos tu información.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Datos que Recopilamos</h3>
                  <p className="text-gray-400">
                    Recopilamos información como nombre, dirección, teléfono, correo electrónico y datos
                    de facturación necesarios para la prestación de nuestros servicios de internet y
                    videovigilancia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-500/10 rounded-lg flex-shrink-0">
                  <Eye className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Uso de la Información</h3>
                  <p className="text-gray-400">
                    Utilizamos tus datos para procesar contrataciones, brindar soporte técnico,
                    facturación, y mejorar nuestros servicios. No compartimos tu información con terceros
                    sin tu consentimiento, excepto cuando sea requerido por ley.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/10 rounded-lg flex-shrink-0">
                  <Lock className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Seguridad y Protección</h3>
                  <p className="text-gray-400">
                    Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger
                    tus datos contra acceso no autorizado, alteración o destrucción. Tu información se
                    almacena de manera segura y solo personal autorizado tiene acceso a ella.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-500/10 rounded-lg flex-shrink-0">
                  <Shield className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tus Derechos</h3>
                  <p className="text-gray-400">
                    Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos
                    personales (Derechos ARCO). Para ejercer estos derechos, contáctanos a través de
                    nuestros canales oficiales.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Cookies y Almacenamiento Local</h3>
              <p className="text-gray-400 text-sm">
                Este sitio web utiliza almacenamiento local del navegador para mejorar tu experiencia,
                recordar tus preferencias y mantener tu carrito de compras. No utilizamos cookies de
                terceros para rastreo publicitario.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
              <p className="text-sm text-gray-400">
                <span className="font-bold text-white">Última actualización:</span> Octubre 2025<br/>
                <span className="font-bold text-white">Contacto:</span> Para dudas sobre este aviso,
                contáctanos al <span className="text-cyan-400">999-210-2204</span> o visita nuestra
                sección de contacto.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-700">
            <button
              onClick={handleAccept}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Aceptar y Continuar
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 py-4 px-6 bg-gray-700/50 hover:bg-gray-700 text-white font-bold rounded-xl transition-all duration-300 border border-gray-600 hover:border-gray-500"
            >
              Leer después
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice;
