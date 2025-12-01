const Projects = () => {
  const projects = [
    {
      title: "Sistema de Detección de Somnolencia",
      category: "Visión Artificial",
      description: "Sistema para detección de somnolencia en conductores utilizando OpenCV y Python. Implementado en Raspberry Pi como prototipo funcional para aumentar la seguridad vial.",
      tech: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision"],
      color: "from-tech-blue to-cyan-500",
      icon: "👁️"
    },
    {
      title: "Digitalízate",
      category: "Aplicación Móvil",
      description: "App educativa desarrollada en Android Studio y Kotlin con libros digitales interactivos y minijuegos para mejorar la experiencia de aprendizaje.",
      tech: ["Android Studio", "Kotlin", "Firebase", "Material Design"],
      color: "from-green-400 to-emerald-500",
      icon: "📱"
    },
    {
      title: "Sistema EDI",
      category: "Desarrollo Web",
      description: "Sistema de Electronic Data Interchange para intercambio automatizado de órdenes de compra y facturas con proveedores, optimizando procesos empresariales.",
      tech: ["Django", "PostgreSQL", "Python", "REST API"],
      color: "from-tech-purple to-purple-500",
      icon: "🔄"
    },
    {
      title: "Nutrition Gym",
      category: "Aplicación Web",
      description: "Sistema web integral para gestión de gimnasio, incluyendo control de inventarios, registro de miembros, seguimiento de ventas y control de gastos.",
      tech: ["Flask", "Python", "SQLite", "Bootstrap"],
      color: "from-orange-400 to-red-500",
      icon: "💪"
    },
    {
      title: "Agente de IA",
      category: "Inteligencia Artificial",
      description: "Bot automatizado para gestión de tareas y recordatorios utilizando Python e integración con APIs de Google para productividad.",
      tech: ["Python", "Google APIs", "NLP", "Automation"],
      color: "from-pink-500 to-rose-500",
      icon: "🤖"
    },
    {
      title: "Control de Scrap Dashboard",
      category: "Business Intelligence",
      description: "Desarrollo de dashboards interactivos para control y visualización de indicadores de scrap, mejorando la visibilidad en un 20%.",
      tech: ["Python", "Power BI", "Pandas", "SQL"],
      color: "from-yellow-400 to-orange-500",
      icon: "📊"
    },
    {
      title: "Pagina Web - Orden66",
      category: "E-commerce Django Project",
      description: "Una tienda en línea especializada en figuras coleccionables de anime, videojuegos, películas y más, con sistema completo de pagos integrado con PayPal.",
      tech: ["Python", "Django", "PostgreSQL", "Docker"],
      color: "from-purple-400 to-orange-500",
      icon: "🛒"
    }
  ];

  return (
    <section id="proyectos" className="section-container">
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
              className="card-tech group hover:-translate-y-2 transition-all duration-300 flex flex-col"
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

              <div className="flex flex-wrap gap-2 mt-auto">
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
    </section>
  );
};

export default Projects;
