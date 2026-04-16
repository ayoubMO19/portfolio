const technologies = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function TechStack() {
  return (
    <div className="w-full bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-12">
          Stack Tecnológico Profesional
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-8 items-center justify-items-center">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-3 group cursor-default">
              <div className="relative">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-10 h-10 md:w-11 md:h-11 transition-all duration-300 transform group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]" 
                />
              </div>
              <span className="text-[9px] font-black text-gray-400 group-hover:text-green-600 transition-colors uppercase tracking-tighter">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}