export default function TitleDesc() {
    return (
        <div className="flex flex-col gap-6 w-full lg:w-3/5">
            <span className="text-sm font-mono text-green-600 font-bold uppercase tracking-tighter">
                // 01. About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                Engineering Craft
            </h1>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                    Desarrollador Backend con mentalidad de producto y experiencia optimizando sistemas en entornos de startup. Mi base técnica se forjó en <span className="text-gray-900 font-bold border-b-2 border-green-500/30">Node.js</span>, resolviendo retos de rendimiento y escalabilidad real.
                </p>
                <p>
                    Actualmente, mi foco está en <span className="text-green-600 font-bold">Java 17/21 y Spring Boot</span>. No busco solo código que funcione; diseño software bajo <span className="italic text-gray-900">Arquitectura Hexagonal</span>, garantizando que cada pieza sea testeable y evolutiva.
                </p>
            </div>
        </div>
    )
}