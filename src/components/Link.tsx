import { motion } from 'framer-motion';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Link({ href, children, onClick }: LinkProps) {
  return (
    <motion.a
      href={href}
      className="text-white/80 hover:text-white transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}
