import { useContactData } from '../hooks/usePortfolioData';
import { useState } from 'react';
import { Phone, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { sectionLabel, subtitle, email, socialLinks } = useContactData();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full bg-white py-12 md:py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <span className="text-sm font-mono text-green-600 font-bold uppercase tracking-[0.3em] mb-4 block">
          {sectionLabel}
        </span>
        
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8">
          ¿Hablamos de tu <br /> <span className="text-green-600">próximo proyecto?</span>
        </h2>
        
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16">
          {subtitle}
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

          {/* Botonera de redes sociales */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-2xl text-gray-600 hover:text-green-600 hover:border-green-600 hover:shadow-md transition-all"
              >
                <img 
                  src={link.icon} 
                  alt={link.name}
                  className="w-5 h-5"
                />
                <span className="font-bold text-sm uppercase tracking-widest">{link.name}</span>
              </a>
            ))}
            
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