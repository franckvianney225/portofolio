import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PlusPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto py-20 px-4"
      >
        <h1 className="text-4xl font-bold mb-8 text-always-white">Contenu Additionnel</h1>
        
        <div className="space-y-6">
          <p className="text-lg">
            Voici des informations supplémentaires sur mon parcours et mes compétences.
          </p>
          
          <div className="bg-white/10 dark:bg-black/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-always-white">Expériences Professionnelles</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-xl font-medium">Développeur Python/Odoo - Entreprise XYZ</h3>
                <p className="text-gray-600 dark:text-gray-400">2022-2025</p>
                <p>Développement de modules Odoo personnalisés, maintenance et optimisation.</p>
              </li>
            </ul>
          </div>

          <Link 
            to="/" 
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
