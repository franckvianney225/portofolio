import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code, Globe, Brain, Facebook, Twitter, MessageSquare } from 'lucide-react';
import { Background3D } from './components/Background3D';
import { ThemeToggle, ThemeProvider } from './components/ThemeToggle';
import { Carousel } from './components/Carousel';
import { Navbar } from './components/Navbar';

export { ThemeProvider };

const projects = [
  {
    title: "CV Dynamique",
    description: "CV interactif et responsive développé avec HTML5, CSS3 et JavaScript, hébergé en ligne.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"]
  },
  {
    title: "Noël Card",
    description: "Générateur de cartes de Noël et Nouvel An développé avec Django, HTML, CSS et JavaScript.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=600",
    tags: ["Django", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Anniversaire Employés",
    description: "Module Odoo 17 qui envoie automatiquement un email aux employés et à leur manager pour leur anniversaire.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600",
    tags: ["Odoo 17", "Python", "Automation", "Email"]
  }
];

function App() {
  return (
    <Router>
      <ThemeProvider>
      <div className="min-h-screen text-black dark:text-white overflow-x-hidden bg-white dark:bg-black">
        <Background3D />
        <ThemeToggle />
        <Navbar />
        
        {/* Stars Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          {Array.from({length: 150}).map((_, i) => {
            const size = Math.random() * 4 + 2;
            return (
              <div 
                key={i}
                className="absolute rounded-full bg-white animate-twinkle"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}vw`,
                  top: `${Math.random() * 100}vh`,
                  opacity: 1,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            );
          })}
        </div>

        {/* Hero Section */}
        <motion.div
          id="accueil"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen"
        >
          {/* Full-width hero image */}
          <div className="absolute inset-0 w-full h-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Centered content */}
          <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-7xl font-bold mb-6 text-always-white"
            >
              Diomande Franck Vianney
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl text-always-white mb-8"
            >
              Développeur Python & Odoo
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 text-white"
            >
              <a href="https://github.com/franckvianney" className="transform hover:scale-110 transition-transform">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/franck-vianney-diomande-864b8193/" className="transform hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:diomandefranckvianney@gmail.com" className="transform hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <section id="apropos" className="py-20 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Projets Récents
          </motion.h2>
          <div className="max-w-6xl mx-auto px-8">
            <Carousel projects={projects} />
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 relative">
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Compétences
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Terminal className="w-8 h-8" />, name: "Python Development" },
                { icon: <Code className="w-8 h-8" />, name: "Odoo Development" },
                { icon: <Globe className="w-8 h-8" />, name: "Django Framework" },
                { icon: <Brain className="w-8 h-8" />, name: "Backend Development" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-gray-300 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  {skill.icon}
                  <h3 className="mt-4 text-lg font-semibold">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              IA Maîtriser
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl mb-8"
            >
              Vu qu'en 2025 l'IA est devenu incontournable, l'apprendre fait de nous de meilleurs développeurs
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <MessageSquare className="w-8 h-8" />, name: "ChatGPT" },
                { icon: <MessageSquare className="w-8 h-8" />, name: "Claude AI" },
                { icon: <MessageSquare className="w-8 h-8" />, name: "Bolt AI" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-6 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl border border-gray-300 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  {skill.icon}
                  <h3 className="mt-4 text-lg font-semibold">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8"
            >
              Travaillons Ensemble
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 mb-12"
            >
              Prêt à donner vie à vos idées ? Contactez-moi !
            </motion.p>
            <motion.a
              href="mailto:contact@example.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-gray-300 dark:border-white/10"
            >
              <Mail className="w-5 h-5" />
              Me Contacter
            </motion.a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-black dark:text-gray-400">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://www.facebook.com/share/1AFim2mK7b/?mibextid=wwXIfr" className="text-black dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-black dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/franck-vianney-diomande-864b8193/" className="text-black dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-black dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <MessageSquare className="w-6 h-6" />
            </a>
          </div>
          <p>© 2025 Diomande Franck Vianney. Tous droits réservés.</p>
        </footer>
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
