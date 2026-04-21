import { ExternalLink, Code2 } from 'lucide-react';
import { useProjectsData } from '../hooks/usePortfolioData';

export default function Projects() {
    const { sectionLabel, title, description, projects, techIcons } = useProjectsData();
    return (
        <section className="relative w-full bg-gray-100 py-12 md:py-20" id="projects">
            <div className="max-w-7xl w-full mx-auto flex flex-col px-6 gap-12 lg:gap-16">

                <div className="flex flex-col gap-4">
                    <span className="text-sm font-mono text-green-600 font-bold uppercase tracking-tighter">
                        {sectionLabel}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            <div className="relative h-64 overflow-hidden bg-gray-200">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                    src={project.image}
                                    alt={project.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-green-600 px-4 py-2 rounded-full">
                                        Ver Repositorio
                                    </span>
                                </div>
                            </div>
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="mb-6">
                                    <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em] mb-1">
                                        {project.category}
                                    </p>
                                    <h3 className="text-3xl font-black text-gray-900 tracking-tighter">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-5 mb-10">
                                    {project.tech.map((t, i) => (
                                        <div key={i} className="relative group/icon">
                                            <img
                                                src={techIcons[t as keyof typeof techIcons]}
                                                alt={t}
                                                className="w-7 h-7 filter hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all duration-300"
                                            />
                                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap font-bold">
                                                {t}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-8 mt-auto pt-6 border-t border-gray-50">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-green-600 transition-colors"
                                    >
                                        <Code2 size={20} strokeWidth={2.5} />
                                        <span>GitHub</span>
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-green-600 transition-colors"
                                        >
                                            <ExternalLink size={20} strokeWidth={2.5} />
                                            <span>{project.title.includes("Backend") ? "Swagger UI" : "Live Demo"}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}