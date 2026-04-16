export default function Cards() {
    const specializations = [
        {
            title: "Backend Architecture",
            description: "Especializado en Java 17/21 y Spring Boot. Aplicando Arquitectura Hexagonal y principios SOLID para sistemas desacoplados.",
            icon: "🏗️"
        },
        {
            title: "Software Quality",
            description: "Testing riguroso con JUnit 5 y Mockito. Enfoque en Clean Code para garantizar la mantenibilidad a largo plazo.",
            icon: "🧪"
        },
        {
            title: "Data and Infrastructure",
            description: "Gestión de bases de datos SQL/NoSQL y despliegues con Docker. Experiencia optimizando rendimiento en entornos reales.",
            icon: "⚙️"
        }
    ];

    return (
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
            {specializations.map((spec, index) => (
                <div key={index}
                    className="p-6 rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-md hover:border-green-500/50 transition-all duration-300 group">
                    <div className="flex items-start gap-5">
                        <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-green-50 transition-colors shrink-0">
                            <span className="text-2xl">{spec.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-gray-900 font-bold text-xl mb-1 group-hover:text-green-600 transition-colors">
                                {spec.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                {spec.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}