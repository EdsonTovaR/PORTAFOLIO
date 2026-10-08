const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      icon: "💻",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "C#", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Kotlin", level: 75 },
        { name: "HTML / CSS", level: 90 },
        { name: "Visual Basic", level: 70 }
      ],
      textClass: "text-tech-blue",
      barGradient: "bg-gradient-to-r from-cyan-400 to-tech-blue"
    },
    {
      title: "Frameworks & Librerías",
      icon: "🚀",
      skills: [
        { name: "React", level: 90 },
        { name: "Django", level: 90 },
        { name: "Flask", level: 85 },
        { name: ".NET", level: 75 },
        { name: "Node.js", level: 80 },
        { name: "React Native", level: 70 },
        { name: "OpenCV", level: 85 },
        { name: "TensorFlow", level: 75 }
      ],
      textClass: "text-tech-purple",
      barGradient: "bg-gradient-to-r from-purple-400 to-tech-purple"
    },
    {
      title: "Bases de Datos",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "SQL Server", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 85 }
      ],
      textClass: "text-pink-400",
      barGradient: "bg-gradient-to-r from-pink-500 to-rose-400"
    },
    {
      title: "Herramientas & Entornos",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Linux / Bash", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 80 }
      ],
      textClass: "text-emerald-400",
      barGradient: "bg-gradient-to-r from-emerald-400 to-teal-400"
    }
  ];

  const certifications = [
    "Fundamentos de privacidad de datos",
    "Fundamentals of Encryption & Quantum-Safe Techniques",
    "Aspectos básicos de la asistencia técnica",
    "Introduction to Cybersecurity",
    "Python Data Structures"
  ];

  const additionalSkills = [
    "Redes & IT",
    "Active Directory",
    "Auditorías IATF-16949 / ISO-9001",
    "Soporte Técnico",
    "PLC Industrial",
    "Arduino & Robótica",
    "SolidWorks",
    "AutoCAD",
    "Electrónica",
    "REST APIs"
  ];

  return (
    <section id="habilidades" className="section-container bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Habilidades & Certificaciones</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Stack tecnológico comprobado y conocimientos profesionales
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-tech">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-200">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className={`${category.textClass} font-mono text-sm`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${category.barGradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="card-tech max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏆</span>
            <h3 className="text-2xl font-bold text-gray-200">Certificaciones</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-tech-blue/5 to-tech-purple/5 rounded-lg border border-tech-blue/20 hover:border-tech-blue/50 transition-colors"
              >
                <span className="text-tech-blue mt-1 flex-shrink-0">✓</span>
                <span className="text-gray-300 text-sm leading-relaxed">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h4 className="text-xl font-semibold text-gray-300 mb-4">Competencias Complementarias</h4>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-3.5 py-1.5 bg-slate-800/60 text-gray-300 rounded-full text-xs sm:text-sm border border-slate-700/80 hover:border-tech-blue/50 hover:text-tech-blue transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
