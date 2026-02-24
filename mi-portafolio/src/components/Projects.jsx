import { useState } from 'react';

const Projects = () => {
  // Estado para controlar qué imagen está seleccionada para el modal
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Sistema de Detección de Somnolencia",
      category: "Visión Artificial",
      description: "Sistema para detección de somnolencia en conductores utilizando OpenCV y Python. Implementado en Raspberry Pi como prototipo funcional para aumentar la seguridad vial.",
      tech: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision"],
      color: "from-tech-blue to-cyan-500",
      icon: "👁️",
      images: [
        "https://via.placeholder.com/300x200/1e293b/60a5fa?text=Demo+Somnolencia+1",
        "https://via.placeholder.com/300x200/1e293b/60a5fa?text=Demo+Somnolencia+2"
      ]
    },
    {
      title: "Digitalízate",
      category: "Aplicación Móvil",
      description: "App educativa desarrollada en Android Studio y Kotlin con libros digitales interactivos y minijuegos para mejorar la experiencia de aprendizaje.",
      tech: ["Android Studio", "Kotlin", "Firebase", "Material Design"],
      color: "from-green-400 to-emerald-500",
      icon: "📱",
      images: [
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+1",
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+2",
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+3"
      ]
    },
    {
      title: "Sistema EDI",
      category: "Desarrollo Web",
      description: "Sistema de Electronic Data Interchange para intercambio automatizado de órdenes de compra y facturas con proveedores, optimizando procesos empresariales.",
      tech: ["Django", "PostgreSQL", "Python", "REST API"],
      color: "from-tech-purple to-purple-500",
      icon: "🔄",
      images: [
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+1",
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+2",
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+3"
      ]
    },
    {
      title: "Nutrition Gym",
      category: "Aplicación Web",
      description: "Sistema web integral para gestión de gimnasio, incluyendo control de inventarios, registro de miembros, seguimiento de ventas y control de gastos.",
      tech: ["Flask", "Python", "SQLite", "Bootstrap"],
      color: "from-orange-400 to-red-500",
      icon: "💪",
      images: [
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+1",
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+2",
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+3"
      ]
    },
    {
      title: "Agente de IA",
      category: "Inteligencia Artificial",
      description: "Bot automatizado para gestión de tareas y recordatorios utilizando Python e integración con APIs de Google para productividad.",
      tech: ["Python", "Google APIs", "NLP", "Automation"],
      color: "from-pink-500 to-rose-500",
      icon: "🤖",
      images: [
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+1",
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+2",
        "https://via.placeholder.com/150x250/1e293b/34d399?text=App+3"
      ]
    },
    {
      title: "Control de Scrap Dashboard",
      category: "Business Intelligence",
      description: "Desarrollo de dashboards interactivos para control y visualización de indicadores de scrap, mejorando la visibilidad y control de procesos industriales.",
      tech: ["Python", "Power BI", "Pandas", "SQL"],
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
      title: "Pagina Web - Orden66",
      category: "E-commerce Django Project",
      description: "Una tienda en línea especializada en figuras coleccionables de anime, videojuegos, películas y más, con sistema completo de pagos integrado con PayPal.",
      tech: ["Python", "Django", "PostgreSQL", "Docker"],
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
      title: "RomoCheck - Checador de Empleados",
      category: "Aplicación Web",
      description: "Sistema de control de asistencia para empleados con registro de entradas y salidas, generación de reportes y gestión de horarios, desarrollado con Django, React y PostgreSQL.",
      tech: ["Django", "React", "PostgreSQL", "Material Design"],
      color: "from-green-400 to-emerald-500",
      icon: "✅ ",
      images: [
        "/img/romocheck1.jpg",
        "/img/romocheck2.jpg",
        "/img/romocheck3.jpg",
        "/img/romocheck4.jpg",
        "/img/romocheck5.jpg"
      ]
    },
  ];

  return (
    <section id="proyectos" className="section-container relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Proyectos Destacados</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Soluciones tecnológicas que he desarrollado
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
                  <p className="text-xs text-gray-500 mb-2 font-mono uppercase tracking-wider">Galería</p>
                  <div className="flex gap-2 overflow-x-auto pb-2 snap-x scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                    {project.images.map((imgUrl, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={imgUrl} 
                        alt={`${project.title} - captura ${imgIndex + 1}`}
                        // Agregué cursor-pointer para que se note que se puede hacer clic
                        // y el onClick para actualizar el estado con la imagen seleccionada
                        className="h-32 w-auto object-cover rounded border border-slate-700 snap-center shrink-0 hover:border-gray-400 transition-colors cursor-pointer hover:opacity-80"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)} // Cerrar al hacer clic en el fondo oscuro
        >
          <div className="relative max-w-5xl w-full flex justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
            {/* Botón de cerrar */}
            <button 
              className="absolute -top-12 right-0 md:-right-8 text-white hover:text-red-400 transition-colors text-3xl font-bold bg-slate-900/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
              title="Cerrar"
            >
              &times;
            </button>
            
            {/* Imagen expandida */}
            <img 
              src={selectedImage} 
              alt="Vista ampliada" 
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