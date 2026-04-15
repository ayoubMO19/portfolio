import { ExternalLink, Code2 } from "lucide-react";
import backend_ecommerce from "../../assets/backend_ecommerce.png";
import frontend_ecommerce from "../../assets/frontend_ecommerce.png";

export default function ProjectsCards() {
    const projects = [
        {
            title: "Ecommerce Backend API",
            category: "Java Spring Boot Backend",
            description: "Sistema robusto de comercio electrónico diseñado bajo Arquitectura Hexagonal. Incluye gestión de inventario, pasarela de pago simulada y seguridad avanzada.",
            tech: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "JUnit 5"],
            image: backend_ecommerce,
            github: "https://github.com/ayoubMO19/e-commerce-backend",
            live: "https://e-commerce-backend-lny2.onrender.com/swagger-ui/index.html"
        },
        {
            title: "Ecommerce Frontend",
            category: "React Frontend",
            description: "Interfaz de usuario reactiva y moderna. Consumo de API REST, gestión de estado global y diseño totalmente responsive con Tailwind CSS.",
            tech: ["React", "Tailwind CSS", "React Query", "Context API"],
            image: frontend_ecommerce,
            github: "https://github.com/ayoubMO19/e-commerce-frontend",
            live: "https://e-commerce-frontend-mu-five.vercel.app/"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">

                    {/* Image Container */}
                    <div className="relative h-52 overflow-hidden">
                        <img
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            src={project.image}
                            alt={project.title}
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-green-600 rounded-full shadow-sm">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-2 py-1 text-[10px] font-mono font-semibold bg-gray-100 text-gray-500 rounded border border-gray-200">
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-green-600 transition-colors"
                            >
                                <Code2 size={18} /> Ver Código
                            </a>
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-green-600 transition-colors"
                                    title={project.title.includes("Backend") ? "Ver Swagger UI" : "Ver Live Demo"}
                                >
                                    <span className="hidden sm:inline">
                                        {project.title.includes("Backend") ? "Swagger UI" : "Live Demo"}
                                    </span>
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}