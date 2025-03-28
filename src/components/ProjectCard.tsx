import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <div className="p-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-3 sm:p-6 border-2 border-gray-300/50 dark:border-white/20 hover:border-purple-500/70 transition-all duration-300 h-[350px] sm:h-[500px] flex flex-col"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity z-0 overflow-hidden" />
        
        <div className="relative z-10 flex flex-col h-full">
          <img 
            src={image}
            alt={title}
            className="w-full h-32 sm:h-48 object-cover rounded-lg mb-2 sm:mb-4"
          />
          
          <div className="flex-grow">
            <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-center md:text-left">{title}</h3>
            <p className="text-gray-400 mb-2 sm:mb-4 line-clamp-3 text-xs sm:text-base text-center md:text-left">{description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-purple-500/20 rounded-full text-xs sm:text-sm hover:bg-purple-500/30 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
