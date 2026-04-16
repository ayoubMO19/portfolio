import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            title: "Desarrollador Backend Java (Freelance)",
            company: "Proyectos Independientes",
            period: "Abril 2026 — Actualidad",
            location: "Remoto",
            description: "Especialización en el ecosistema Java. Desarrollo de APIs REST robustas utilizando Spring Boot, asegurando la calidad mediante testing unitario y de integración.",
            tech: ["Java 21", "Spring Boot", "PostgreSQL", "JUnit 5", "Mockito"],
        },
        {
            title: "Backend Developer & Automation (Freelance)",
            company: "Sistemas de Automatización",
            period: "Enero 2026 — Abril 2026",
            location: "Remoto",
            description: "Desarrollo de sistemas de extracción de datos masivos mediante crawlers y headless browsers. Automatización de flujos y procesamiento de datos energéticos.",
            tech: ["Node.js", "Playwright", "Crawlee", "Cron Jobs"],
        },
        {
            title: "Backend Developer",
            company: "Pylon Data (Startup)",
            period: "Feb 2024 — Jun 2025",
            location: "Remoto",
            description: "Mantenimiento de servicios críticos en producción. Optimización de rendimiento (~30%) en consultas complejas y diseño de microservicios escalables.",
            tech: ["Node.js", "MySQL", "MongoDB", "InfluxDB", "Docker"],
        },
        {
            title: "Técnico Superior DAM",
            company: "IES Joan Coromines",
            period: "2022 — 2024",
            location: "Benicarló",
            description: "Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma. Especialización en desarrollo de software y gestión de bases de datos.",
            tech: ["Java", "SQL", "Spring Boot", "Arquitectura Software"],
        },
        {
            title: "Técnico Medio SMR",
            company: "IES Joan Coromines",
            period: "2020 — 2022",
            location: "Benicarló",
            description: "Ciclo Formativo de Grado Medio en Sistemas Microinformáticos y Redes. Fundamentos de hardware, redes y soporte técnico.",
            tech: ["Redes", "Hardware", "Sistemas Operativos", "Soporte"],
        }
    ];

    return (
        <section className="relative w-full bg-white py-12 md:py-20" id="experience">
            <div className="max-w-7xl w-full mx-auto px-6">
                
                {/* Header */}
                <div className="flex flex-col gap-4 mb-16">
                    <span className="text-sm font-mono text-green-600 font-bold uppercase tracking-tighter">
                        // 03. History
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Experiencia y Formación
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative border-l-2 border-gray-100 ml-4 md:ml-8 flex flex-col gap-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            
                            {/* Dot on the line */}
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-green-600 group-hover:bg-green-600 transition-colors duration-300" />

                            <div className="flex flex-col gap-3 bg-gray-50 p-6 md:p-8 rounded-3xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-500">
                                
                                {/* Header Exp */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                                    <span className="flex items-center gap-2 text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full w-fit">
                                        <Calendar size={14} /> {exp.period}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
                                    <span className="flex items-center gap-1 font-medium text-gray-700">
                                        <Briefcase size={16} className="text-gray-400" /> {exp.company}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={16} className="text-gray-400" /> {exp.location}
                                    </span>
                                </div>

                                <p className="text-gray-600 leading-relaxed max-w-3xl">
                                    {exp.description}
                                </p>

                                {/* Tech Used */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                                            # {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}