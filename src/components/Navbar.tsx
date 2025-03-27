import { motion } from 'framer-motion';
import { Link } from './Link';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 border border-white/20">
          <ul className="flex space-x-8">
            <li><Link href="#accueil">Accueil</Link></li>
            <li><Link href="#apropos">À propos</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
