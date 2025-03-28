import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto flex justify-between items-center">
        <button 
          className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

          <div className="hidden md:flex justify-center w-full">
            <div className="bg-white/10 backdrop-blur-lg rounded-full px-4 sm:px-6 py-2 border border-white/20">
              <ul className="flex space-x-4 sm:space-x-6 md:space-x-8">
                <li><Link href="#accueil">Accueil</Link></li>
                <li><Link href="#apropos">À propos</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </div>
          </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-white/10 border border-white/20 rounded-lg p-4">
            <ul className="flex flex-col space-y-4">
              <li><Link href="#accueil" onClick={() => setIsOpen(false)}>Accueil</Link></li>
              <li><Link href="#apropos" onClick={() => setIsOpen(false)}>À propos</Link></li>
              <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
