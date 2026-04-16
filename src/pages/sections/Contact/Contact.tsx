import { Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ayoubmorghiouhda@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full bg-white py-12 md:py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <span className="text-sm font-mono text-green-600 font-bold uppercase tracking-[0.3em] mb-4 block">
          // 04. Contact
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8">
          ¿Hablamos de tu <br /> <span className="text-green-600">próximo proyecto?</span>
        </h2>
        
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16">
          Actualmente estoy abierto a nuevas oportunidades como Desarrollador. Si buscas a alguien comprometido con la calidad y la arquitectura, mi bandeja de entrada está abierta.
        </p>

        <div className="flex flex-col items-center gap-8">
          
          {/* Email Copiable */}
          <div className="group relative flex items-center gap-4 bg-gray-50 border border-gray-100 p-2 pl-6 rounded-full hover:bg-white hover:shadow-xl transition-all duration-300">
            <span className="text-gray-900 font-bold text-sm md:text-lg">{email}</span>
            <button 
              onClick={copyToClipboard}
              className="bg-gray-900 text-white p-3 md:p-4 rounded-full hover:bg-green-600 transition-colors"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
            
            {copied && (
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs py-2 px-4 rounded-lg animate-bounce">
                ¡Copiado!
              </span>
            )}
          </div>

          {/* Botonera con SVGs manuales */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/ayoub-morghi-ouhda" 
              target="_blank" 
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-gray-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-md transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-bold text-sm uppercase tracking-widest">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/ayoubMO19" 
              target="_blank" 
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-gray-600 hover:text-black hover:border-black hover:shadow-md transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="font-bold text-sm uppercase tracking-widest">GitHub</span>
            </a>

            {/* Teléfono */}
            <a 
              href="tel:+34631515999" 
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-gray-600 hover:text-green-600 hover:border-green-600 hover:shadow-md transition-all"
            >
              <Phone size={20} />
              <span className="font-bold text-sm uppercase tracking-widest">+34 631 515 999</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}