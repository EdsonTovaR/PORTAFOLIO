const Experience = () => {
  const experiences = [
    {
      company: "ASSA STEEL SA de CV",
      location: "San Buenaventura, Coah.",
      position: "Auxiliar de Sistemas",
      period: "2025 - 2026",
      tasks: [
        "Soporte técnico a usuarios: diagnóstico y resolución de problemas de hardware y software",
        "Instalación, configuración y mantenimiento de equipos de cómputo, impresoras, redes y sistemas operativos",
        "Desarrollo y mantenimiento de sistemas internos utilizando Visual Basic, Python, C# y tecnologías web (React, Django, Flask)",
        "Gestión de bases de datos: consultas SQL, respaldos y actualizaciones"
      ],
      color: "from-tech-blue to-cyan-500"
    },
    {
      company: "Daimay Automotive Interior",
      location: "Saltillo, Coah.",
      position: "Operador General",
      period: "2024 - 2025",
      tasks: [
        "Implementación de scripts en Python para automatizar reportes de inventario y productividad",
        "Desarrollo de dashboards de control de scrap que mejoraron la visibilidad de indicadores en un 20%",
        "Diseño e implementación de un sistema EDI (Electronic Data Interchange) con Django y PostgreSQL",
        "Desarrollo de aplicación web en Django para gestión de cuentas por pagar y control de proveedores"
      ],
      color: "from-tech-purple to-purple-500"
    },
    {
      company: "Operadora Merco",
      location: "San Buenaventura, Coah.",
      position: "Auxiliar de Departamento Salchilacteos",
      period: "2022 - 2024",
      tasks: [
        "Apoyo en la recepción, almacenamiento y manejo adecuado de productos",
        "Mantenimiento de estándares de higiene y limpieza cumpliendo normas sanitarias",
        "Atención al cliente en mostrador, ofreciendo productos y resolviendo dudas",
        "Control de inventario y fechas de caducidad para rotación adecuada de productos"
      ],
      color: "from-pink-500 to-rose-500"
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
