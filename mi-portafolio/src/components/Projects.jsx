import { useState, useEffect } from 'react';

const Projects = () => {
  // Estado para controlar qué imagen está seleccionada para el modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Manejo de accesibilidad: tecla Escape y bloqueo de scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const projects = [
    {
      title: "Sistema de Detección de Somnolencia",
      category: "Visión Artificial",
      description: "Sistema para detección de fatiga y somnolencia en conductores en tiempo real utilizando OpenCV y Python. Implementado sobre una Raspberry Pi como prototipo funcional para prevención de accidentes viales.",
      tech: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision"],
      color: "from-tech-blue to-cyan-500",
      icon: "👁️",
      images: []
    },
    {
      title: "Digitalízate - App Educativa",
      category: "Desarrollo Móvil Nativo",
      description: "Aplicación móvil nativa para la Presidencia Municipal (Depto. de Tecnología). Incorpora motor de lectura de libros digitales interactivos y minijuegos lúdicos para enriquecer el aprendizaje digital.",
      tech: ["Kotlin", "Android Studio", "Material Design", "UI/UX", "Firebase"],
      color: "from-green-400 to-emerald-500",
      icon: "📱",
      images: []
    },
    {
      title: "Sistema EDI (Electronic Data Interchange)",
      category: "Integración de Sistemas & Web",
      description: "Portal EDI desarrollado con Django y PostgreSQL para el intercambio automatizado y en tiempo real de órdenes de compra, facturación y embarques con proveedores industriales.",
      tech: ["Django", "PostgreSQL", "Python", "REST API", "Docker"],
      color: "from-tech-purple to-purple-500",
      icon: "🔄",
      images: [
        "/img/sistemaedi_1.jpg",
        "/img/sistemaedi_2.jpg",
        "/img/sistemaedi_3.jpg"
      ]
    },
    {
      title: "Orden 66 - Marketplace E-commerce",
      category: "E-commerce Full-Stack",
      description: "Marketplace en Django con catálogo, control de stock, gestión segura de usuarios, procesamiento automatizado de pagos con API de PayPal y módulo de rastreo de envíos en tiempo real con la API REST de DHL.",
      tech: ["Django", "Python", "PostgreSQL", "PayPal API", "DHL REST API", "Docker"],
      color: "from-purple-400 to-orange-500",
      icon: "🛒",
      images: [
        "/img/orden66_1.jpg",
        "/img/orden66_2.jpg",
        "/img/orden66_3.jpg",
        "/img/orden66_4.jpg",
        "/img/orden66_5.jpg"
      ]
    },
    {
      title: "Control de Scrap Dashboard",
      category: "Business Intelligence & Data",
      description: "Desarrollo de dashboards industriales y análisis de KPIs en ASSA STEEL que mejoraron la visibilidad del scrap en un 20%. Extracción, transformación y visualización de datos de producción.",
      tech: ["Python", "Power BI", "Pandas", "SQL Server", "PostgreSQL"],
      color: "from-yellow-400 to-orange-500",
      icon: "📊",
      images: [
        "/img/dashboardassa_1.jpg",
        "/img/dashboardassa_2.jpg",
        "/img/dashboardassa_3.jpg",
        "/img/dashboardassa_4.jpg",
        "/img/dashboardassa_5.jpg"
      ]
    },
    {
      title: "RomoCheck - Checador de Empleados",
      category: "Aplicación Web Empresarial",
      description: "Sistema de control de asistencia para empleados con registro de entradas y salidas, generación de reportes de asistencia y turnos, desarrollado con Django, React y PostgreSQL.",
      tech: ["Django", "React", "PostgreSQL", "REST API", "Material Design"],
      color: "from-cyan-400 to-blue-500",
      icon: "✅",
      images: [
        "/img/romocheck1.jpg",
        "/img/romocheck2.jpg",
        "/img/romocheck3.jpg",
        "/img/romocheck4.jpg",
        "/img/romocheck5.jpg"
      ]
    },
    {
      title: "Agente de IA y Automatización",
      category: "Inteligencia Artificial",
      description: "Bot automatizado para gestión de tareas, recordatorios y productividad personal utilizando Python, procesamiento de lenguaje natural (NLP) e integración con APIs de Google.",
      tech: ["Python", "NLP", "Google APIs", "Automation"],
      color: "from-pink-500 to-rose-500",
      icon: "🤖",
      images: []
    },
    {
      title: "Nutrición Gym",
      category: "Aplicación Web",
      description: "Sistema web integral para gestión de centros deportivos: control de inventarios de suplementación, membresías, seguimiento de ventas y control de gastos.",
      tech: ["Flask", "Python", "SQLite", "Bootstrap"],
      color: "from-orange-400 to-red-500",
      icon: "💪",
      images: []
    }
  ];

  return (
    <section id="proyectos" className="section-container relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Proyectos Destacados</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Soluciones tecnológicas, desarrollo de software e inteligencia artificial
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-tech group hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`text-4xl p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-10`}>
                  {project.icon}
                </div>
                <span className="px-3 py-1 bg-slate-800 text-gray-400 rounded-full text-xs font-mono border border-slate-700">
                  {project.category}
                </span>
              </div>

              <h3 className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-3`}>
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {project.images && project.images.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2 font-mono uppercase tracking-wider flex items-center justify-between">
                    <span>Galería interactiva</span>
                    <span className="text-[10px] text-tech-blue/80 font-mono">Haz clic para ampliar</span>
                  </p>
                  <div className="flex gap-2 overflow-x-auto pb-2 snap-x scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                    {project.images.map((imgUrl, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={imgUrl} 
                        alt={`${project.title} - captura ${imgIndex + 1}`}
                        className="h-32 w-auto object-cover rounded border border-slate-700 snap-center shrink-0 hover:border-tech-blue transition-all cursor-pointer hover:opacity-90 hover:scale-105"
                        loading="lazy"
                        onClick={() => setSelectedImage(imgUrl)}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-tech-blue/10 text-tech-blue text-xs rounded-full border border-tech-blue/30 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL PARA VER IMAGEN EN PANTALLA COMPLETA --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la imagen"
        >
          <div className="relative max-w-5xl w-full flex justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
            {/* Botón de cerrar accesible */}
            <button 
              type="button"
              className="absolute -top-12 right-0 md:-right-4 text-gray-300 hover:text-white transition-colors text-2xl font-bold bg-slate-900/80 hover:bg-red-500/80 rounded-full w-10 h-10 flex items-center justify-center border border-slate-700 shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar vista previa (Esc)"
              title="Cerrar (Esc)"
            >
              ✕
            </button>
            
            {/* Imagen expandida */}
            <img 
              src={selectedImage} 
              alt="Captura ampliada del proyecto" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg border border-slate-700 shadow-2xl"
            />
          </div>
        </div>
      )}
      {/* --- FIN DEL MODAL --- */}
    </section>
  );
};

export default Projects;