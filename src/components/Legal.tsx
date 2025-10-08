import React, { useState } from 'react';
import { FileText, Download, Shield, Scale, AlertTriangle, Phone } from 'lucide-react';

const Legal = () => {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const legalDocuments = [
    {
      id: 'tarifas',
      title: 'Formatos Simplificados de Inscripción de Tarifas',
      icon: FileText,
      description: 'Información detallada sobre nuestras tarifas y planes de servicio.',
      category: 'Tarifas'
    },
    {
      id: 'privacidad',
      title: 'Aviso de Privacidad',
      icon: Shield,
      description: 'Política de privacidad y protección de datos personales.',
      category: 'Privacidad'
    },
    {
      id: 'neutralidad',
      title: 'Código de Gestión y Administración de la Red',
      icon: FileText,
      description: 'Documento derivado de los lineamientos de neutralidad de la red.',
      category: 'Red'
    },
    {
      id: 'transparencia',
      title: 'Documento de Cumplimiento a los Lineamientos de Información Transparente',
      icon: FileText,
      description: 'Información transparente y comparable sobre nuestros servicios.',
      category: 'Transparencia'
    },
    {
      id: 'autoridades',
      title: 'Datos para Contacto con Autoridades de Seguridad y Justicia',
      icon: Phone,
      description: 'Información de contacto para autoridades competentes.',
      category: 'Seguridad'
    },
    {
      id: 'contrato',
      title: 'Registro de Contrato de Adhesión',
      icon: FileText,
      description: 'Términos y condiciones del contrato de adhesión.',
      category: 'Contratos'
    },
    {
      id: 'practicas',
      title: 'Código de Prácticas Comerciales',
      icon: Scale,
      description: 'Nuestras prácticas comerciales y estándares de servicio.',
      category: 'Comercial'
    },
    {
      id: 'derechos',
      title: 'Carta de Derechos Mínimos de los Usuarios',
      icon: Shield,
      description: 'Derechos fundamentales de nuestros usuarios.',
      category: 'Derechos'
    },
    {
      id: 'procedimientos',
      title: 'Procedimientos de Dudas, Quejas, Aclaraciones y Reclamaciones',
      icon: AlertTriangle,
      description: 'Proceso para resolver dudas, quejas y reclamaciones.',
      category: 'Procedimientos'
    },
    {
      id: 'operaciones',
      title: 'Aviso de Inicio de Operaciones',
      icon: FileText,
      description: 'Documentación de inicio de operaciones ante el IFT.',
      category: 'Concesión'
    },
    {
      id: 'ventanilla',
      title: 'Acceso a Ventanilla Electrónica',
      icon: FileText,
      description: 'Acceso y documentación de ventanilla electrónica del IFT.',
      category: 'Concesión'
    },
    {
      id: 'eformato',
      title: 'E-formato Enviado al IFT',
      icon: FileText,
      description: 'Formatos electrónicos y documentos enviados al IFT.',
      category: 'Concesión'
    }
  ];

  const categories = ['Todos', 'Tarifas', 'Privacidad', 'Red', 'Transparencia', 'Seguridad', 'Contratos', 'Comercial', 'Derechos', 'Procedimientos', 'Concesión'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredDocuments = selectedCategory === 'Todos' 
    ? legalDocuments 
    : legalDocuments.filter(doc => doc.category === selectedCategory);

  const handleDocumentClick = (docId: string) => {
    const message = encodeURIComponent(
      `¡Hola Skyweb! Me interesa obtener información sobre el documento: "${legalDocuments.find(doc => doc.id === docId)?.title}". ¿Podrían proporcionármelo?`
    );
    window.open(`https://wa.me/5219992102204?text=${message}`, '_blank');
  };

  return (
    <section id="legal" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
            <Scale className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Marco Legal</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Documentación
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Legal y Regulatoria
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            En cumplimiento con las disposiciones del Instituto Federal de Telecomunicaciones (IFT) 
            y la normatividad vigente, ponemos a su disposición la siguiente documentación.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((document) => (
            <div
              key={document.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => handleDocumentClick(document.id)}
            >
              {/* Category Badge */}
              <div className="inline-flex items-center space-x-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1 mb-4">
                <span className="text-cyan-400 text-xs font-medium">{document.category}</span>
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <document.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                {document.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {document.description}
              </p>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  Solicitar documento
                </span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Download className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Necesitas algún documento específico?
              </h3>
              <p className="text-gray-400 mb-6">
                Todos nuestros documentos legales y regulatorios están disponibles. 
                Contáctanos para obtener cualquier información adicional.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Contacto Directo</h4>
                  <p className="text-gray-400 text-sm mb-3">Para solicitudes de documentos legales</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400">+52 1 999 210 2204</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400">huchalebaltazar@skyweb.mx</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-white mb-2">Autoridades Competentes</h4>
                  <p className="text-gray-400 text-sm mb-3">Información para autoridades de seguridad y justicia</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400">Disponible 24/7</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400">Respuesta inmediata</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    '¡Hola Skyweb! Me interesa obtener información sobre sus documentos legales y regulatorios. ¿Podrían ayudarme?'
                  );
                  window.open(`https://wa.me/5219992102204?text=${message}`, '_blank');
                }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span>Contactar Ahora</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-white">Skyweb</strong> opera en cumplimiento con todas las disposiciones 
              del Instituto Federal de Telecomunicaciones (IFT) y la normatividad vigente en materia de 
              telecomunicaciones. Todos nuestros documentos están actualizados conforme a la legislación actual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;