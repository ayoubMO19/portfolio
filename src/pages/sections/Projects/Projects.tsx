import ProjectsCards from "../../../components/Projects/ProjectsCards";

export default function Projects() {
    return (
        <section className="relative w-full bg-gray-100 py-12 md:py-20" id="projects">
            <div className="max-w-7xl w-full mx-auto flex flex-col px-6 gap-12 lg:gap-16">
                
                <div className="flex flex-col gap-4">
                    <span className="text-sm font-mono text-green-600 font-bold uppercase tracking-tighter">
                        // 03. Selected Work
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Proyectos destacados
                    </h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Una selección de trabajos donde aplico arquitectura escalable, calidad de código y soluciones centradas en el usuario.
                    </p>
                </div>

                <ProjectsCards />
            </div>
        </section>
    );
}