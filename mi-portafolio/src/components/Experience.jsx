const Experience = () => {
  const experiences = [
    {
      company: "ASSA STEEL SA de CV",
      location: "San Buenaventura, Coah.",
      position: "Auxiliar de Sistemas",
      period: "2025 - Actualmente",
      tasks: [
        "Desarrollo Web & Portales Corporativos: Creación de sistemas internos (.NET, Python, React) y modernización del portal web corporativo (assamx.com) migrado a React, Vite y Tailwind CSS con soporte multi-idioma (i18n)",
        "Mesa de Ayuda & Cumplimiento Normativo (ITSM): Diseño e implementación del sistema web de Help Desk para planta; centraliza solicitudes de servicio, asignación de equipos y automatiza la generación del formato oficial de servicio requerido por Gestión de Calidad para auditorías ISO-9001 e IATF-16949",
        "Gestión de Datos y Business Intelligence: Desarrollo e implementación de la suite de dashboards operativos para piso de manufactura (producción, scrap, inventarios y asistencia con modo Kiosco), incrementando la visibilidad de KPIs en un 20%. Administración de SQL Server y PostgreSQL",
        "Integración de Sistemas (EDI): Diseño e implementación de portal EDI con Django y PostgreSQL para intercambio automatizado y en tiempo real de órdenes de compra y embarques con proveedores",
        "Optimización de Procesos: Implementación de scripts en Python para la automatización de reportes de inventario, productividad y generación dinámica de documentos PDF corporativos",
        "Infraestructura IT & Active Directory: Diagnóstico y mantenimiento de hardware/software, configuración de redes e impresoras, y administración centralizada de identidades mediante Active Directory"
      ],
      color: "from-tech-blue to-cyan-500"
    },
    {
      company: "Presidencia Municipal San Buenaventura - Depto. de Tecnología",
      location: "San Buenaventura, Coah.",
      position: "Estancia Profesional (Desarrollo Móvil)",
      period: "2024 - 2025",
      tasks: [
        "Desarrollo Móvil Nativo: Diseño y programación integral de una aplicación educativa para Android utilizando Kotlin y Android Studio",
        "Diseño de Interfaz y Experiencia de Usuario (UI/UX): Creación de interfaces interactivas y atractivas orientadas a facilitar el aprendizaje digital",
        "Integración de Funcionalidades: Implementación de motor de lectura para libros digitales interactivos y desarrollo de lógicas de programación para minijuegos educativos",
        "Pruebas y Optimización: Monitoreo del rendimiento de la app, debugging y optimización de recursos para asegurar fluidez en distintos dispositivos móviles"
      ],
      color: "from-green-400 to-emerald-500"
    },
    {
      company: "Orden 66",
      location: "Proyecto Remoto",
      position: "Desarrollador Full-Stack (E-commerce)",
      period: "2024 - 2025",
      tasks: [
        "Desarrollo de Plataforma E-commerce: Creación integral de un marketplace utilizando Django, abarcando desde el panel de administración y control de stock, hasta la gestión segura de usuarios",
        "Procesamiento de Pagos: Integración segura de la API de PayPal para la gestión automatizada e instantánea de transacciones",
        "Logística y Rastreo: Implementación de un módulo de seguimiento de envíos en tiempo real mediante el consumo de la API REST de DHL"
      ],
      color: "from-tech-purple to-purple-500"
    }
  ];

  return (
    <section id="experiencia" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Experiencia Profesional</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Mi trayectoria en desarrollo de software y automatización
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="card-tech group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                    {exp.company}
                  </h3>
                  <p className="text-xl text-gray-300 font-semibold mb-1">{exp.position}</p>
                  <p className="text-gray-500 text-sm">{exp.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-mono border border-tech-blue/30">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-3 text-gray-300">
                    <span className="text-tech-blue mt-1.5 flex-shrink-0">▹</span>
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
