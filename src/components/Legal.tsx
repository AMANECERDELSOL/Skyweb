import React, { useState } from 'react';
import { FileText, Shield, Scale, Users, Database, Network, BookOpen } from 'lucide-react';

const Legal: React.FC = () => {
  const [selectedDocument, setSelectedDocument] = useState('terminos');

  const documents = [
    {
      id: 'derechos',
      title: 'Carta de Derechos Mínimos del Usuario',
      icon: FileText,
      content: `
        <h3>CARTA DE DERECHOS MÍNIMOS DEL USUARIO</h3>
        <p>Como usuario de servicios de telecomunicaciones, usted tiene los siguientes derechos fundamentales:</p>
        
        <h3>1. DERECHO A LA INFORMACIÓN</h3>
        <p>Recibir información clara, veraz y suficiente sobre los servicios, tarifas, condiciones de contratación y calidad del servicio.</p>
        
        <h3>2. DERECHO A LA CALIDAD DEL SERVICIO</h3>
        <p>Recibir el servicio con la calidad ofrecida y contratada, incluyendo la velocidad de internet prometida.</p>
        
        <h3>3. DERECHO A LA FACTURACIÓN DETALLADA</h3>
        <p>Recibir facturas claras y detalladas de los servicios contratados y consumidos.</p>
        
        <h3>4. DERECHO A LA PORTABILIDAD</h3>
        <p>Conservar su número telefónico al cambiar de proveedor de servicios.</p>
        
        <h3>5. DERECHO A LA PRIVACIDAD</h3>
        <p>Protección de sus datos personales y comunicaciones privadas.</p>
        
        <h3>6. DERECHO AL TRATO DIGNO</h3>
        <p>Recibir atención respetuosa y no discriminatoria por parte del personal.</p>
        
        <h3>7. DERECHO A LA REPARACIÓN</h3>
        <p>Obtener reparación o compensación por fallas en el servicio.</p>
        
        <h3>8. OBLIGACIONES DEL USUARIO</h3>
        <ul>
          <li>Pagar oportunamente los servicios contratados</li>
          <li>Usar los servicios de manera responsable y legal</li>
          <li>Proporcionar información veraz para la contratación</li>
          <li>Permitir el acceso para instalación y mantenimiento</li>
        </ul>
      `
    },
    {
      id: 'privacidad',
      title: 'Aviso de Privacidad',
      icon: Shield,
      content: `
        <h3>AVISO DE PRIVACIDAD INTEGRAL</h3>
        <p>Skyweb, con domicilio en Av. Tecnología 123, Col. Innovación, Ciudad de México, es responsable del tratamiento de sus datos personales.</p>
        
        <h3>¿QUÉ DATOS PERSONALES RECABAMOS?</h3>
        <p>Recopilamos los siguientes tipos de datos personales:</p>
        <ul>
          <li><strong>Datos de identificación:</strong> Nombre completo, CURP, RFC, fecha de nacimiento</li>
          <li><strong>Datos de contacto:</strong> Dirección, teléfono, correo electrónico</li>
          <li><strong>Datos patrimoniales:</strong> Información de facturación y pagos</li>
          <li><strong>Datos de navegación:</strong> Direcciones IP, sitios visitados, tiempo de conexión</li>
          <li><strong>Datos técnicos:</strong> Configuración de equipos, velocidad de conexión</li>
        </ul>
        
        <h3>¿PARA QUÉ UTILIZAMOS SUS DATOS?</h3>
        <p>Sus datos personales serán utilizados para:</p>
        <ul>
          <li>Proporcionar los servicios de internet contratados</li>
          <li>Procesar pagos y generar facturación</li>
          <li>Brindar soporte técnico y atención al cliente</li>
          <li>Cumplir con obligaciones legales y regulatorias</li>
          <li>Mejorar nuestros servicios y desarrollar nuevos productos</li>
          <li>Enviar comunicaciones relacionadas con el servicio</li>
          <li>Realizar análisis estadísticos y de calidad</li>
        </ul>
        
        <h3>¿CON QUIÉN COMPARTIMOS SUS DATOS?</h3>
        <p>Sus datos pueden ser compartidos con:</p>
        <ul>
          <li>Autoridades competentes cuando sea requerido por ley</li>
          <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
          <li>Empresas de cobranza en caso de incumplimiento de pago</li>
          <li>Sociedades controladoras, subsidiarias o afiliadas</li>
        </ul>
        
        <h3>¿CÓMO PROTEGEMOS SUS DATOS?</h3>
        <p>Implementamos medidas de seguridad físicas, técnicas y administrativas:</p>
        <ul>
          <li>Cifrado de datos sensibles</li>
          <li>Controles de acceso restringido</li>
          <li>Monitoreo continuo de sistemas</li>
          <li>Capacitación del personal en protección de datos</li>
          <li>Auditorías periódicas de seguridad</li>
        </ul>
        
        <h3>SUS DERECHOS ARCO</h3>
        <p>Usted tiene derecho a:</p>
        <ul>
          <li><strong>Acceder</strong> a sus datos personales</li>
          <li><strong>Rectificar</strong> datos incorrectos o incompletos</li>
          <li><strong>Cancelar</strong> el tratamiento de sus datos</li>
          <li><strong>Oponerse</strong> al tratamiento para fines específicos</li>
        </ul>
        
        <h3>¿CÓMO EJERCER SUS DERECHOS?</h3>
        <p>Para ejercer sus derechos ARCO, puede contactarnos en:</p>
        <ul>
          <li>Correo: privacidad@skyweb.com</li>
          <li>Teléfono: 555 123 4567</li>
          <li>Dirección: Av. Tecnología 123, Col. Innovación, CDMX</li>
        </ul>
        
        <h3>TRANSFERENCIAS INTERNACIONALES</h3>
        <p>Sus datos pueden ser transferidos a países con nivel de protección distinto al de México, siempre con las medidas de seguridad apropiadas.</p>
        
        <h3>CAMBIOS AL AVISO DE PRIVACIDAD</h3>
        <p>Nos reservamos el derecho de modificar este aviso. Los cambios se publicarán en nuestro sitio web con 10 días de anticipación.</p>
        
        <h3>CONSENTIMIENTO</h3>
        <p>Al contratar nuestros servicios, usted consiente el tratamiento de sus datos personales conforme a este aviso.</p>
      `
    },
    {
      id: 'tarifas',
      title: 'Formatos Simplificados de Inscripción de Tarifas',
      icon: Scale,
      content: `
        <h3>FORMATO SIMPLIFICADO DE INSCRIPCIÓN DE TARIFAS</h3>
        <p>Información registrada ante el Instituto Federal de Telecomunicaciones (IFT)</p>
        
        <h3>PAQUETE BÁSICO - 50 MB</h3>
        <ul>
          <li><strong>Velocidad:</strong> Hasta 50 Mbps de descarga / 10 Mbps de subida</li>
          <li><strong>Tarifa mensual:</strong> $299.00 MXN (IVA incluido)</li>
          <li><strong>Instalación:</strong> Gratuita</li>
          <li><strong>Equipo:</strong> Módem WiFi incluido en comodato</li>
          <li><strong>Permanencia mínima:</strong> Sin permanencia</li>
          <li><strong>Penalización por cancelación:</strong> No aplica</li>
        </ul>
        
        <h3>PAQUETE FAMILIAR - 100 MB</h3>
        <ul>
          <li><strong>Velocidad:</strong> Hasta 100 Mbps de descarga / 20 Mbps de subida</li>
          <li><strong>Tarifa mensual:</strong> $449.00 MXN (IVA incluido)</li>
          <li><strong>Instalación:</strong> Gratuita</li>
          <li><strong>Equipo:</strong> Router WiFi de alta potencia incluido</li>
          <li><strong>Beneficios adicionales:</strong> Netflix 3 meses gratis</li>
          <li><strong>Permanencia mínima:</strong> Sin permanencia</li>
        </ul>
        
        <h3>PAQUETE PREMIUM - 200 MB</h3>
        <ul>
          <li><strong>Velocidad:</strong> Hasta 200 Mbps de descarga / 50 Mbps de subida</li>
          <li><strong>Tarifa mensual:</strong> $699.00 MXN (IVA incluido)</li>
          <li><strong>Instalación:</strong> Express (24 horas)</li>
          <li><strong>Equipo:</strong> Sistema WiFi Mesh incluido</li>
          <li><strong>Beneficios:</strong> Netflix + Disney+ incluidos</li>
          <li><strong>IP estática:</strong> Incluida</li>
          <li><strong>Soporte:</strong> Prioritario 24/7</li>
        </ul>
        
        <h3>CONDICIONES GENERALES</h3>
        <ul>
          <li>Tarifas vigentes a partir del 1 de enero de 2025</li>
          <li>Precios incluyen IVA</li>
          <li>Sujeto a disponibilidad técnica en la zona</li>
          <li>Velocidades son hasta la velocidad contratada</li>
          <li>Facturación mensual por adelantado</li>
        </ul>
        
        <h3>INFORMACIÓN DE REGISTRO</h3>
        <ul>
          <li><strong>Registro IFT:</strong> POIST/123456/2024</li>
          <li><strong>Fecha de registro:</strong> 15 de diciembre de 2024</li>
          <li><strong>Vigencia:</strong> 1 año a partir de la fecha de registro</li>
        </ul>
      `
    },
    {
      id: 'gestion',
      title: 'Código de Gestión y Administración de Red',
      icon: Network,
      content: `
        <h3>CÓDIGO DE GESTIÓN Y ADMINISTRACIÓN DE RED</h3>
        <p>Skyweb se compromete a mantener la neutralidad de la red y gestionar el tráfico de manera transparente.</p>
        
        <h3>PRINCIPIOS DE NEUTRALIDAD DE RED</h3>
        <ul>
          <li>No bloqueo de contenido legal</li>
          <li>No degradación intencional del servicio</li>
          <li>No priorización pagada de contenido</li>
          <li>Transparencia en la gestión de red</li>
        </ul>
        
        <h3>GESTIÓN DE TRÁFICO</h3>
        <p>Aplicamos técnicas de gestión de tráfico únicamente cuando:</p>
        <ul>
          <li>Es necesario para mantener la calidad del servicio</li>
          <li>Existe congestión temporal en la red</li>
          <li>Se requiere para cumplir con obligaciones legales</li>
          <li>Es necesario para la seguridad de la red</li>
        </ul>
        
        <h3>MEDIDAS DE SEGURIDAD</h3>
        <ul>
          <li>Protección contra ataques DDoS</li>
          <li>Filtrado de malware y virus</li>
          <li>Bloqueo de sitios de phishing</li>
          <li>Monitoreo de actividades sospechosas</li>
        </ul>
        
        <h3>CALIDAD DEL SERVICIO</h3>
        <p>Garantizamos:</p>
        <ul>
          <li>Velocidad mínima del 80% de la contratada</li>
          <li>Disponibilidad del servicio del 99.5%</li>
          <li>Latencia menor a 50ms en conexiones nacionales</li>
          <li>Pérdida de paquetes menor al 1%</li>
        </ul>
        
        <h3>TRANSPARENCIA</h3>
        <p>Publicamos mensualmente:</p>
        <ul>
          <li>Estadísticas de calidad del servicio</li>
          <li>Información sobre gestión de tráfico</li>
          <li>Reportes de disponibilidad</li>
          <li>Medidas de seguridad implementadas</li>
        </ul>
      `
    },
    {
      id: 'contrato',
      title: 'Registro de Contrato de Adhesión',
      icon: BookOpen,
      content: `
        <h3>REGISTRO DE CONTRATO DE ADHESIÓN</h3>
        <p>Información del contrato registrado ante la Procuraduría Federal del Consumidor (PROFECO)</p>
        
        <h3>DATOS DEL REGISTRO</h3>
        <ul>
          <li><strong>Número de registro:</strong> 2024-001-123456</li>
          <li><strong>Fecha de registro:</strong> 10 de enero de 2025</li>
          <li><strong>Vigencia:</strong> 1 año</li>
          <li><strong>Modalidad:</strong> Servicios de Internet</li>
        </ul>
        
        <h3>PRESTADOR DEL SERVICIO</h3>
        <ul>
          <li><strong>Razón social:</strong> Skyweb Telecomunicaciones S.A. de C.V.</li>
          <li><strong>RFC:</strong> STE123456789</li>
          <li><strong>Domicilio:</strong> Av. Tecnología 123, Col. Innovación, CDMX</li>
          <li><strong>Teléfono:</strong> 555 123 4567</li>
          <li><strong>Correo:</strong> contacto@skyweb.com</li>
        </ul>
        
        <h3>OBJETO DEL CONTRATO</h3>
        <p>Prestación de servicios de acceso a internet de banda ancha mediante tecnología de fibra óptica.</p>
        
        <h3>DERECHOS DEL CONSUMIDOR</h3>
        <ul>
          <li>Recibir el servicio con la calidad contratada</li>
          <li>Información clara sobre tarifas y condiciones</li>
          <li>Facturación detallada y comprensible</li>
          <li>Atención oportuna a quejas y reclamaciones</li>
          <li>Cancelación del servicio sin penalizaciones</li>
        </ul>
        
        <h3>OBLIGACIONES DEL PRESTADOR</h3>
        <ul>
          <li>Proporcionar el servicio con la velocidad contratada</li>
          <li>Mantener la disponibilidad del servicio</li>
          <li>Brindar soporte técnico</li>
          <li>Respetar los datos personales del usuario</li>
          <li>Cumplir con la normatividad aplicable</li>
        </ul>
        
        <h3>CONDICIONES DE CONTRATACIÓN</h3>
        <ul>
          <li>Evaluación técnica previa</li>
          <li>Instalación sin costo adicional</li>
          <li>Equipo en comodato</li>
          <li>Facturación mensual anticipada</li>
          <li>Sin permanencia mínima</li>
        </ul>
        
        <h3>PROCEDIMIENTO DE QUEJAS</h3>
        <p>En caso de inconformidad:</p>
        <ol>
          <li>Contactar servicio al cliente: 555 123 4567</li>
          <li>Si no hay solución, acudir a PROFECO</li>
          <li>Presentar queja en línea: www.profeco.gob.mx</li>
          <li>Teléfono PROFECO: 55 5568 8722</li>
        </ol>
      `
    },
    {
      id: 'cumplimiento',
      title: 'Datos de Cumplimiento a Lineamientos de Información Transparente',
      icon: Users,
      content: `
        <h3>CUMPLIMIENTO A LINEAMIENTOS DE INFORMACIÓN TRANSPARENTE</h3>
        <p>Información corporativa y de calidad conforme a las disposiciones del IFT</p>
        
        <h3>INFORMACIÓN CORPORATIVA</h3>
        <ul>
          <li><strong>Denominación social:</strong> Skyweb Telecomunicaciones S.A. de C.V.</li>
          <li><strong>RFC:</strong> STE123456789</li>
          <li><strong>Título de concesión:</strong> SCT-001-2020</li>
          <li><strong>Vigencia de concesión:</strong> 30 años (2020-2050)</li>
          <li><strong>Cobertura autorizada:</strong> Nacional</li>
        </ul>
        
        <h3>INDICADORES DE CALIDAD - TRIMESTRE ACTUAL</h3>
        <h4>Internet Fijo</h4>
        <ul>
          <li><strong>Velocidad promedio de descarga:</strong> 95.2% de la contratada</li>
          <li><strong>Velocidad promedio de subida:</strong> 97.8% de la contratada</li>
          <li><strong>Disponibilidad del servicio:</strong> 99.7%</li>
          <li><strong>Latencia promedio:</strong> 28ms</li>
          <li><strong>Pérdida de paquetes:</strong> 0.3%</li>
        </ul>
        
        <h3>ATENCIÓN AL CLIENTE</h3>
        <ul>
          <li><strong>Tiempo promedio de respuesta:</strong> 2.5 minutos</li>
          <li><strong>Resolución en primera llamada:</strong> 78%</li>
          <li><strong>Satisfacción del cliente:</strong> 4.2/5.0</li>
          <li><strong>Quejas resueltas en tiempo:</strong> 95%</li>
        </ul>
        
        <h3>INSTALACIONES Y REPARACIONES</h3>
        <ul>
          <li><strong>Tiempo promedio de instalación:</strong> 24 horas</li>
          <li><strong>Instalaciones exitosas:</strong> 98.5%</li>
          <li><strong>Tiempo promedio de reparación:</strong> 4 horas</li>
          <li><strong>Reparaciones en primera visita:</strong> 85%</li>
        </ul>
        
        <h3>COBERTURA Y INFRAESTRUCTURA</h3>
        <ul>
          <li><strong>Localidades con servicio:</strong> 1,250</li>
          <li><strong>Kilómetros de fibra óptica:</strong> 15,000 km</li>
          <li><strong>Nodos de red:</strong> 450</li>
          <li><strong>Centros de datos:</strong> 8</li>
        </ul>
        
        <h3>INVERSIÓN EN INFRAESTRUCTURA</h3>
        <ul>
          <li><strong>Inversión 2024:</strong> $250 millones MXN</li>
          <li><strong>Nuevas localidades conectadas:</strong> 85</li>
          <li><strong>Ampliación de capacidad:</strong> 40%</li>
          <li><strong>Modernización de equipos:</strong> 60%</li>
        </ul>
        
        <h3>RESPONSABILIDAD SOCIAL</h3>
        <ul>
          <li><strong>Programas educativos:</strong> 25 escuelas beneficiadas</li>
          <li><strong>Internet gratuito en espacios públicos:</strong> 150 puntos</li>
          <li><strong>Capacitación digital:</strong> 5,000 personas</li>
          <li><strong>Empleos generados:</strong> 1,200 directos</li>
        </ul>
        
        <h3>CERTIFICACIONES</h3>
        <ul>
          <li>ISO 9001:2015 - Gestión de Calidad</li>
          <li>ISO 27001:2013 - Seguridad de la Información</li>
          <li>ISO 14001:2015 - Gestión Ambiental</li>
          <li>Distintivo ESR - Empresa Socialmente Responsable</li>
        </ul>
      `
    },
    {
      id: 'privacidad-adicional',
      title: 'Aviso de Privacidad Adicional',
      icon: Database,
      content: `
        <h3>AVISO DE PRIVACIDAD ADICIONAL</h3>
        <p>Información complementaria sobre el tratamiento de datos personales específicos</p>
        
        <h3>DATOS SENSIBLES</h3>
        <p>En casos específicos, podemos recabar datos personales sensibles:</p>
        <ul>
          <li><strong>Datos biométricos:</strong> Para identificación en instalaciones críticas</li>
          <li><strong>Datos de salud:</strong> Solo para servicios de telemedicina</li>
          <li><strong>Datos financieros:</strong> Historial crediticio para evaluación</li>
        </ul>
        
        <h3>TRATAMIENTO AUTOMATIZADO</h3>
        <p>Utilizamos sistemas automatizados para:</p>
        <ul>
          <li>Análisis de patrones de consumo</li>
          <li>Detección de fraudes</li>
          <li>Personalización de ofertas</li>
          <li>Optimización de red</li>
          <li>Soporte técnico predictivo</li>
        </ul>
        
        <h3>COOKIES Y TECNOLOGÍAS SIMILARES</h3>
        <p>Nuestro sitio web utiliza:</p>
        <ul>
          <li><strong>Cookies esenciales:</strong> Para funcionamiento básico</li>
          <li><strong>Cookies analíticas:</strong> Para mejorar la experiencia</li>
          <li><strong>Cookies publicitarias:</strong> Para mostrar contenido relevante</li>
          <li><strong>Web beacons:</strong> Para análisis de uso</li>
        </ul>
        
        <h3>DATOS DE MENORES DE EDAD</h3>
        <p>Para servicios dirigidos a menores:</p>
        <ul>
          <li>Requerimos consentimiento de padres o tutores</li>
          <li>Limitamos la recopilación al mínimo necesario</li>
          <li>Aplicamos medidas de seguridad adicionales</li>
          <li>Permitimos la eliminación de datos a solicitud</li>
        </ul>
        
        <h3>VIDEOVIGILANCIA</h3>
        <p>En nuestras instalaciones operamos sistemas de videovigilancia:</p>
        <ul>
          <li><strong>Finalidad:</strong> Seguridad de instalaciones y personas</li>
          <li><strong>Conservación:</strong> 30 días calendario</li>
          <li><strong>Acceso:</strong> Solo personal autorizado</li>
          <li><strong>Señalización:</strong> Avisos visibles en todas las áreas</li>
        </ul>
        
        <h3>TRANSFERENCIAS ESPECÍFICAS</h3>
        <p>Transferimos datos a:</p>
        <ul>
          <li><strong>Proveedores de servicios en la nube:</strong> AWS, Google Cloud</li>
          <li><strong>Empresas de análisis:</strong> Para estudios de mercado</li>
          <li><strong>Socios comerciales:</strong> Para ofertas conjuntas</li>
          <li><strong>Autoridades:</strong> Cuando sea legalmente requerido</li>
        </ul>
        
        <h3>DERECHOS ADICIONALES</h3>
        <p>Además de los derechos ARCO, usted puede:</p>
        <ul>
          <li>Solicitar la portabilidad de sus datos</li>
          <li>Revocar el consentimiento en cualquier momento</li>
          <li>Solicitar la limitación del tratamiento</li>
          <li>Presentar quejas ante el INAI</li>
        </ul>
        
        <h3>CONSERVACIÓN DE DATOS</h3>
        <p>Conservamos sus datos:</p>
        <ul>
          <li><strong>Durante la relación contractual:</strong> Mientras sea cliente</li>
          <li><strong>Datos fiscales:</strong> 5 años después de la cancelación</li>
          <li><strong>Datos de tráfico:</strong> 24 meses máximo</li>
          <li><strong>Datos de facturación:</strong> 10 años</li>
        </ul>
        
        <h3>CONTACTO DEL RESPONSABLE</h3>
        <p>Para ejercer sus derechos o consultas:</p>
        <ul>
          <li><strong>Responsable:</strong> Oficial de Privacidad</li>
          <li><strong>Correo:</strong> privacidad@skyweb.com</li>
          <li><strong>Teléfono:</strong> 555 123 4567 ext. 100</li>
          <li><strong>Horario:</strong> Lunes a viernes, 9:00 a 18:00 hrs</li>
        </ul>
      `
    }
  ];

  const activeDoc = documents.find(doc => doc.id === selectedDocument);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white min-h-screen pt-32 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #3B82F6 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-1000">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Información Legal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Documentos legales y políticas que rigen nuestros servicios
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-12 translate-x-12"></div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-4">Documentos</h3>
                <nav className="space-y-2">
                  {documents.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDocument(doc.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 text-left group relative overflow-hidden ${
                        selectedDocument === doc.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                      }`}
                    >
                      {selectedDocument !== doc.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                      <doc.icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${selectedDocument === doc.id ? 'scale-110' : 'group-hover:scale-110'}`} />
                      <span className="font-medium">{doc.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8 animate-in fade-in slide-in-from-right duration-500 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -translate-y-20 translate-x-20"></div>
                
                {activeDoc && (
                  <>
                    <div className="flex items-center space-x-3 mb-8 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                        <activeDoc.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                        {activeDoc.title}
                      </h3>
                    </div>
                    
                    <div 
                      className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-gray-600 prose-li:mb-2 relative z-10"
                      dangerouslySetInnerHTML={{ __html: activeDoc.content }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
};

export default Legal;
