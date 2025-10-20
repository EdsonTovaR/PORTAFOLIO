const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      icon: "💻",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "C#", level: 75 },
        { name: "SQL", level: 85 },
        { name: "Kotlin", level: 70 },
        { name: "HTML/CSS", level: 90 }
      ],
      color: "tech-blue"
    },
    {
      title: "Frameworks & Librerías",
      icon: "🚀",
      skills: [
        { name: "React", level: 90 },
        { name: "Django", level: 85 },
        { name: "Flask", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "OpenCV", level: 85 }
      ],
      color: "tech-purple"
    },
    {
      title: "Bases de Datos",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "SQLite", level: 85 },
        { name: "MongoDB", level: 70 }
      ],
      color: "pink-500"
    },
    {
      title: "Herramientas & Tecnologías",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Android Studio", level: 75 }
      ],
      color: "green-500"
    }
  ];

  const certifications = [
    "Fundamentos de privacidad de datos",
    "Fundamentals of Encryption & Quantum-Safe Techniques",
    "Aspectos básicos de la asistencia técnica",
    "Introduction to Cybersecurity",
    "Python Data Structures"
  ];

  return (
    <section id="habilidades" className="section-container bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Habilidades & Certificaciones</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Stack tecnológico y conocimientos profesionales
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
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className={`text-${category.color} font-mono text-sm`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color} rounded-full transition-all duration-1000 ease-out`}
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
        <div className="card-tech max-w-4xl mx-auto">
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
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold text-gray-300 mb-4">Otras Habilidades</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Redes", "Soporte Técnico", "Electrónica Básica", "Arduino", "PLC", "AutoCAD", "Neumática", "REST APIs"].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-800/50 text-gray-300 rounded-full text-sm border border-slate-700 hover:border-tech-blue/50 transition-colors"
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
