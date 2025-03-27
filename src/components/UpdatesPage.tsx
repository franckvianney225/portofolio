import { motion } from 'framer-motion';

export function UpdatesPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Mises à jour</h2>
        <p className="text-xl">
          Ce portfolio sera mis à jour à chaque nouveau projet et nouvelle compétence obtenue
        </p>
      </div>
    </motion.section>
  );
}
