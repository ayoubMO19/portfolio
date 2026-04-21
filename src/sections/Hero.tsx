import { useHeroData } from '../hooks/usePortfolioData';

export default function Hero() {
  const {
    title,
    subtitle,
    description,
    profileImage,
    socialLinks,
    technologies,
    ctaButtons
  } = useHeroData();
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center overflow-hidden" id="home">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-16 pb-12 md:pt-24 md:pb-16 gap-16">
        <div className="flex-1 space-y-8 z-10 text-center md:text-left">
          <header className="space-y-3">
            <p className="text-[11px] tracking-[0.3em] font-mono text-green-600 font-bold uppercase">
              Full Stack Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              <span className="text-green-600">{title}</span><br />
              <span className="text-slate-800">{subtitle}</span>
            </h1>
          </header>

          <p className="max-w-md mx-auto md:mx-0 text-lg text-slate-600 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={ctaButtons.projects.href} className="bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2">
              <ctaButtons.projects.icon size={20} /> {ctaButtons.projects.text}
            </a>
            <a href={ctaButtons.contact.href} className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-md font-bold hover:bg-slate-50 transition-all">
              {ctaButtons.contact.text}
            </a>
          </div>
        </div>

        <div className="relative group mt-8 md:mt-0">
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-slate-300 group-hover:border-green-500 transition-all duration-300" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-green-500/50 group-hover:border-green-600 transition-all duration-300" />
          <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px] bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
            <img
              src={profileImage}
              alt="Ayoub Morghi"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="bg-white p-3 rounded-full shadow-xl text-slate-800 hover:text-green-600 hover:scale-110 transition-all"
                  aria-label={link.name}
                >
                  <link.icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
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
      </div>
    </section>
  );
}