import { Monitor } from "lucide-react";

export default function HeroTitle() {
    return (
        <div className="flex-1 space-y-8 z-10 text-center md:text-left">
          <header className="space-y-3">
            <p className="text-[11px] tracking-[0.3em] font-mono text-green-600 font-bold uppercase">
              Full Stack Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Soy <span className="text-green-600">Ayoub Morghi.</span><br />
              <span className="text-slate-800">Ofreciendo soluciones tecnológicas.</span>
            </h1>
          </header>
          
          <p className="max-w-md mx-auto md:mx-0 text-lg text-slate-600 leading-relaxed">
            Especializado en crear aplicaciones robustas, escalables y con una experiencia de usuario impecable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2">
              <Monitor size={20} /> Ver Proyectos
            </a>
            <a href="#contact" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-md font-bold hover:bg-slate-50 transition-all">
              Contactar
            </a>
          </div>
        </div>
    );
}