import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

interface CarouselProps {
  projects: Array<{
    title: string;
    description: string;
    image: string;
    tags: string[];
  }>;
}

export function Carousel({ projects }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Mobile
        setProjectsPerPage(1);
      } else if (window.innerWidth < 1024) { // Tablet
        setProjectsPerPage(2); 
      } else { // Desktop
        setProjectsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage < projects.length ? prevIndex + 1 : 0
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : projects.length - projectsPerPage
    );
  };

  const containerRef = useRef<HTMLDivElement>(null);

  // Effet 3D au hover
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current && window.innerWidth >= 768) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      containerRef.current.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${-x * 5}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };

  // Génération des étoiles
  const stars = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 5
  }));

  return (
    <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4">
      {/* Étoiles (uniquement sur desktop) */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative transition-transform duration-300 ease-out"
      >
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100/projectsPerPage)}%)` }}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-2"
                style={{ width: `${100/projectsPerPage}%`, minWidth: `${100/projectsPerPage}%` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={prev}
          className="absolute left-1 sm:left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 backdrop-blur-lg p-1.5 sm:p-2 md:p-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 z-10"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        <button 
          onClick={next}
          className="absolute right-1 sm:right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 backdrop-blur-lg p-1.5 sm:p-2 md:p-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 z-10"
          aria-label="Next project"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}
