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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight hover:text-green-600 transition-colors">
          Ayoub Morghi
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-green-600 uppercase transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-all shadow-sm">
            CV
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Toggle Menu"
        >
          {showMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMenu && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col p-6 gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setShowMenu(false)} className="text-lg font-semibold text-gray-800 border-b border-gray-50 pb-2">
              {link.name}
            </a>
          ))}
          <button className="flex items-center justify-center gap-2 bg-green-600 text-white p-3 rounded-xl font-bold">
            <Download size={18} /> Download CV
          </button>
        </nav>
      )}
    </header>
  );
}