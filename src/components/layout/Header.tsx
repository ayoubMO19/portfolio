import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2">
      <a
        href="/"
        className="flex items-center text-xl font-semibold hover:text-green-600"
      >
        Ayoub Morghi
      </a>
      <nav className="hidden sm:flex justify-between items-center gap-4">
        <a href="#" className="hover:text-green-600 uppercase">
          Home
        </a>
        <a href="#" className="hover:text-green-600 uppercase">
          About
        </a>
        <a href="#" className="hover:text-green-600 uppercase">
          Contact
        </a>
      </nav>
      <button className="hidden sm:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        Download CV
      </button>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-green-600"
        >
          {showMenu ? <X /> : <Menu />}
        </button>
        {showMenu && (
          <>
            <a href="#" className="hover:text-green-600">
              Home
            </a>
            <a href="#" className="hover:text-green-600">
              About
            </a>
            <a href="#" className="hover:text-green-600">
              Contact
            </a>
          </>
        )}
      </nav>
    </header>
  );
}