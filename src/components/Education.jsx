const Education = () => {
  const education = [
    {
      institution: "Escuela Superior de Cómputo - Instituto Politécnico Nacional",
      location: "CDMX",
      degree: "Ingeniería en Inteligencia Artificial",
      period: "2020 - 2024",
      highlights: [
        "Especialización en visión por computadora y machine learning",
        "Desarrollo de sistemas de IA aplicados a problemas reales",
        "Proyectos con Python, OpenCV, TensorFlow y frameworks modernos"
      ],
      color: "from-tech-blue to-cyan-500"
    },
    {
      institution: "CECyTEC",
      location: "San Buenaventura, Coah.",
      degree: "Técnico Mecatrónico",
      period: "2017 - 2020",
      highlights: [
        "Desarrollo de proyectos con PLC para control automatizado",
        "Diseño y programación de prototipos con Arduino",
        "Modelado de piezas en AutoCAD y conocimientos en neumática"
      ],
      color: "from-tech-purple to-purple-500"
    }
  ];

  return (
    <section id="educacion" className="section-container bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Educación</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Formación académica y técnica
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="card-tech group hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${edu.color}`}></div>
              
              <div className="pl-4">
                <div className="mb-4">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-gray-300 font-semibold mb-1">{edu.degree}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                    <span className="px-3 py-1 bg-tech-blue/10 text-tech-blue rounded-full text-xs font-mono border border-tech-blue/30">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-tech-blue mt-1 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
