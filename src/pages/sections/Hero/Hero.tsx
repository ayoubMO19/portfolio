import { SiGithub, SiX } from "react-icons/si";
import { Monitor } from "lucide-react";
import { FaLinkedin} from "react-icons/fa";
import profileImage from "../../../assets/profile.png";

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "...", icon: FaLinkedin },
  { name: "GitHub", href: "...", icon: SiGithub },
  { name: "X", href: "...", icon: SiX },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-20 gap-16">
        
        {/* Texto */}
        <div className="flex-1 space-y-8 z-10 text-center md:text-left">
          <header className="space-y-3">
            <p className="text-[11px] tracking-[0.3em] font-mono text-green-600 font-bold uppercase">
              Full Stack Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              I am <span className="text-green-600">Ayoub Morghi.</span><br />
              <span className="text-slate-800">Building the digital future.</span>
            </h1>
          </header>
          
          <p className="max-w-md mx-auto md:mx-0 text-lg text-slate-600 leading-relaxed">
            Especializado en crear aplicaciones robustas, escalables y con una experiencia de usuario impecable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2">
              <Monitor size={20} /> VIEW WORKSPACE
            </button>
            <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-md font-bold hover:bg-slate-50 transition-all">
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Imagen */}
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
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
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
    </section>
  );
}