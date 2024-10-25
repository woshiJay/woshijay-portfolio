import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Project = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current instanceof HTMLDivElement) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
    { id: 4, title: "Project 4" },
    { id: 5, title: "Project 5" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-4 my-2">
        <div className="relative">
          <h2 className="text-4xl font-bold px-5 text-neutral-900 dark:text-neutral-200">Projects</h2>
        </div>
      </div>
      
      <div className="relative mt-8">
        {/* Carousel container */}
        <div 
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide flex gap-8 snap-x snap-mandatory"
          onScroll={checkScroll}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] h-[400px] flex-shrink-0 snap-start bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-200">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - Moved further from the edges */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors duration-300"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-900 dark:text-neutral-200" />
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900 p-2 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors duration-300"
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6 text-neutral-900 dark:text-neutral-200" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Project;