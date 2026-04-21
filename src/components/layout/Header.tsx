import { useState } from "react";
import { X, Menu, Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8">
        <a href="/" className="text-xl font-bold tracking-tight hover:text-green-600 transition-colors">
          Ayoub Morghi<span className="text-green-600">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-500 hover:text-green-600 uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/cv.pdf" 
            download="CV_Ayoub_Morghi.pdf"
            className="bg-green-600 text-white flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold hover:bg-green-700 transition-all"
          >
            <Download size={18} /> <p>CV</p>
          </a>
        </nav>
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden p-2 text-gray-600 transition-transform active:scale-90"
        >
          {showMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div 
        className={`
          md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out
          ${showMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setShowMenu(false)} 
              className="text-base font-semibold text-gray-800 border-b border-gray-50 pb-2 hover:text-green-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/cv.pdf" 
            download="CV_Ayoub_Morghi.pdf"
            className="flex items-center justify-center gap-2 bg-green-600 text-white p-3 rounded-xl font-bold mt-2"
          >
            <Download size={18} /> Descargar CV
          </a>
        </nav>
      </div>
    </header>
  );
}