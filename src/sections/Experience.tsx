import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useExperienceData } from '../hooks/usePortfolioData';

export default function Experience() {
    const { sectionLabel, title, subtitle, experiences } = useExperienceData();

    return (
        <section className="relative w-full bg-white py-12 md:py-20" id="experience">
            <div className="max-w-7xl w-full mx-auto px-6">
                
                {/* Header */}
                <div className="flex flex-col gap-4 mb-16">
                    <span className="text-sm font-mono text-green-600 font-bold uppercase tracking-tighter">
                        {sectionLabel}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        {subtitle}
                    </p>
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
                                <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 pt-5 border-t border-gray-100/80">
                                    {exp.tech.map((t, i) => (
                                        <span 
                                            key={i} 
                                            className="text-[11px] font-mono font-bold text-green-600 uppercase tracking-[0.15em] flex items-center group/tech"
                                        >
                                            <span className="text-green-400 mr-1.5 transition-transform group-hover/tech:scale-125">
                                                {'>'}
                                            </span>
                                            {t}
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