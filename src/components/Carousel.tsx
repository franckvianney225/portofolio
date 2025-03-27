import React, { useState } from 'react';
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
  const projectsPerPage = 3;

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

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100/projectsPerPage)}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4" style={{ width: `${100/projectsPerPage}%` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prev}
        className="absolute -left-20 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 backdrop-blur-lg p-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button 
        onClick={next}
        className="absolute -right-20 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 backdrop-blur-lg p-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 z-10"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
