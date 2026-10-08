import { useState, useEffect, useCallback } from 'react';

const Projects = () => {
  // Estado para la galería modal interactiva: { images: [...], currentIndex: 0, title: '' }
  const [modalGallery, setModalGallery] = useState(null);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setModalGallery(prev => {
      if (!prev || prev.images.length <= 1) return prev;
      return {
        ...prev,
        currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
      };
    });
  }, []);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setModalGallery(prev => {
      if (!prev || prev.images.length <= 1) return prev;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length
      };
    });
  }, []);

  // Manejo de teclado (Escape, Flecha Izquierda, Flecha Derecha) y bloqueo de scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalGallery) return;
      if (e.key === 'Escape') {
        setModalGallery(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    if (modalGallery) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modalGallery, handlePrev, handleNext]);

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
      title: "APG Manufacturing Solutions",
      category: "Desarrollo Web & Landing",
      description: "Sitio web corporativo y landing page para empresa de integración robótica, automatización y manufactura inteligente. Desarrollado con React y Vite, incluye diseño responsivo con estética dark industrial, selector de idiomas, catálogo de celdas y servicios industriales, y canales de contacto directo vía WhatsApp y correo electrónico.",
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Vercel"],
      color: "from-blue-500 to-cyan-400",
      icon: "⚙️",
      liveUrl: "https://apg-landing.vercel.app",
      images: [
        "/img/apg_1.png",
        "/img/apg_2.png",
        "/img/apg_3.png",
        "/img/apg_4.png"
      ]
    },
    {
      title: "ASSA STEEL - Portal Corporativo & Rediseño Web",
      category: "Refactorización & Web Corporativa",
      description: "Modernización, refactorización y rediseño integral del portal web corporativo de ASSA STEEL (assamx.com). Migración de un sitio legado en HTML/CSS/JS con código espagueti a una arquitectura moderna y modular en React, Vite y Tailwind CSS. Implementación de selector multi-idioma optimizado (Español, Inglés y Alemán), nuevos procesos industriales, certificaciones IATF-16949 / ISO-9001 y mejores canales de contacto y cotización.",
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "i18n", "Responsive Design"],
      color: "from-blue-600 to-indigo-500",
      icon: "🏭",
      liveUrl: "https://assamx.com",
      images: [
        "/img/assapage_1.png",
        "/img/assapage_2.png",
        "/img/assapage_5.png",
        "/img/assapage_6.png",
        "/img/assapage_3.png",
        "/img/assapage_7.png",
        "/img/assapage_4.png"
      ]
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
      title: "Dashboard de Operaciones y Producción Industrial (ASSA STEEL)",
      category: "Business Intelligence & Control Operativo",
      description: "Plataforma integral de visualización de datos y Business Intelligence en tiempo real para planta industrial. Centraliza módulos de Producción (metas vs scrap), Control de Scrap & Calidad (máquinas críticas e inspectores), Entradas y Materia Prima (con análisis de tendencia predictiva), Salidas y Embarques, y un panel de Recursos Humanos para monitoreo de turnos y asistencias en dos plantas, incorporando modo Kiosco para piso de manufactura.",
      tech: ["Python", "Web Dashboard", "Pandas", "SQL Server", "PostgreSQL", "Data Analytics", "Kiosk Mode"],
      color: "from-amber-400 to-orange-500",
      icon: "📈",
      images: [
        "/img/dashboard_operaciones_1.png",
        "/img/dashboard_operaciones_2.png",
        "/img/dashboard_operaciones_3.png",
        "/img/dashboard_operaciones_4.png",
        "/img/dashboard_operaciones_5.png"
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
                        onClick={() => setModalGallery({
                          images: project.images,
                          currentIndex: imgIndex,
                          title: project.title
                        })}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto pt-4 border-t border-slate-800/50">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2.5 py-1 bg-tech-blue/10 text-tech-blue text-xs rounded-full border border-tech-blue/30 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-tech-blue/15 hover:bg-tech-blue/25 text-tech-blue hover:text-white rounded-lg text-xs font-semibold border border-tech-blue/30 transition-all self-start sm:self-auto group/btn shrink-0"
                  >
                    <span>Ver sitio</span>
                    <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL LIGHTBOX INTERACTIVO CON NAVEGACIÓN Y MINIATURAS --- */}
      {modalGallery && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 cursor-zoom-out select-none animate-fade-in"
          onClick={() => setModalGallery(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
        >
          <div 
            className="relative max-w-6xl w-full flex flex-col items-center justify-center cursor-default" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra superior del modal */}
            <div className="w-full flex items-center justify-between mb-3 px-2 text-white">
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-semibold text-sm sm:text-base text-gray-200 truncate">
                  {modalGallery.title}
                </span>
                {modalGallery.images.length > 1 && (
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-tech-blue text-xs font-mono border border-slate-700 shrink-0">
                    {modalGallery.currentIndex + 1} de {modalGallery.images.length}
                  </span>
                )}
              </div>

              {/* Botón de cerrar */}
              <button 
                type="button"
                className="text-gray-300 hover:text-white transition-colors text-xl font-bold bg-slate-900/80 hover:bg-red-500/80 rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-slate-700 shadow-lg cursor-pointer shrink-0 ml-3"
                onClick={() => setModalGallery(null)}
                aria-label="Cerrar vista previa (Esc)"
                title="Cerrar (Esc)"
              >
                ✕
              </button>
            </div>

            {/* Contenedor central de la foto con flechas laterales */}
            <div className="relative w-full flex items-center justify-center">
              {/* Flecha Anterior */}
              {modalGallery.images.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-slate-900/85 hover:bg-tech-blue hover:text-slate-900 text-white border border-slate-700 hover:border-tech-blue shadow-xl transition-all cursor-pointer backdrop-blur-sm group"
                  aria-label="Foto anterior (←)"
                  title="Anterior (←)"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Foto activa */}
              <div className="w-full flex justify-center items-center overflow-hidden rounded-lg">
                <img 
                  key={modalGallery.currentIndex}
                  src={modalGallery.images[modalGallery.currentIndex]} 
                  alt={`${modalGallery.title} - captura ${modalGallery.currentIndex + 1}`} 
                  className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-lg border border-slate-700 shadow-2xl transition-all"
                />
              </div>

              {/* Flecha Siguiente */}
              {modalGallery.images.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-slate-900/85 hover:bg-tech-blue hover:text-slate-900 text-white border border-slate-700 hover:border-tech-blue shadow-xl transition-all cursor-pointer backdrop-blur-sm group"
                  aria-label="Foto siguiente (→)"
                  title="Siguiente (→)"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Tira inferior de miniaturas */}
            {modalGallery.images.length > 1 && (
              <div className="flex items-center gap-2 mt-3 px-2 overflow-x-auto max-w-full py-1">
                {modalGallery.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setModalGallery(prev => ({ ...prev, currentIndex: idx }))}
                    className={`h-11 w-14 sm:h-13 sm:w-18 rounded border-2 overflow-hidden shrink-0 transition-all cursor-pointer ${
                      idx === modalGallery.currentIndex
                        ? 'border-tech-blue scale-105 shadow-md shadow-tech-blue/30 opacity-100'
                        : 'border-slate-700 opacity-50 hover:opacity-85'
                    }`}
                    aria-label={`Ir a foto ${idx + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Guía de atajos */}
            <p className="text-gray-400 text-xs mt-2 font-mono hidden sm:block">
              Usa las flechas ◀ ▶ del teclado o botones laterales para navegar • Esc para salir
            </p>
          </div>
        </div>
      )}
      {/* --- FIN DEL MODAL --- */}
    </section>
  );
};

export default Projects;