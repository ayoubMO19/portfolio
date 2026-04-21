import { useAboutMeData } from '../hooks/usePortfolioData';

export default function AboutMe() {
  const { sectionLabel, title, description, specializations } = useAboutMeData();
    return (
        <section className="relative w-full flex bg-gray-100" id="about">
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row px-6 py-12 md:py-20 gap-12 lg:gap-16">
                <div className="flex flex-col gap-6 w-full lg:w-3/5">
                    <span className="text-sm font-mono text-green-600 font-bold uppercase tracking-tighter">
                {sectionLabel}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        {title}
                    </h1>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        {description.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
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
            </div>
        </section>
    );
}