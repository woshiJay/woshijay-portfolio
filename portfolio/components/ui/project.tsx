import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Project = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth } = carouselRef.current;
      const isScrollable = scrollWidth > clientWidth;
      setShowRightArrow(isScrollable);
    }
  };

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      const isAtEnd = Math.abs(scrollWidth - clientWidth - scrollLeft) < 5;
      setShowRightArrow(!isAtEnd && scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      checkScrollability();
      checkScroll();
    });

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    checkScrollability();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 400 : 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      id: 1,
      title: "吃什么 What to Eat",
      description: "A food recommendation app",
      tech: "React Native & Firebase",
      imageUrl: "/images/csm.png"
    },
    {
      id: 2,
      title: "Land Use Prediction",
      description: "ML-based land use analysis",
      tech: "Python & TensorFlow",
      imageUrl: "/images/landio.png"
    },
    {
      id: 3,
      title: "Wordle Clone",
      description: "A recreation of the popular word game",
      tech: "React & TypeScript",
      imageUrl: "/images/wdlclone.png"
    }
  ];

  return (
    <section className="w-full min-h-screen flex items-center bg-white dark:bg-neutral-950">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 my-8">
          <h2 className="text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-8">
            Projects
          </h2>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 snap-x snap-mandatory"
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
                className="min-w-[280px] w-[calc(100vw-2rem)] sm:w-[320px] lg:w-[380px] flex-shrink-0 snap-start group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <div className="w-full h-full relative">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 group-hover:to-black/20 transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 md:mb-4">
                      {project.tech}
                    </p>
                    <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300 border border-neutral-200 dark:border-neutral-700 z-10"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-neutral-700 dark:text-neutral-200" />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300 border border-neutral-200 dark:border-neutral-700 z-10"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-neutral-700 dark:text-neutral-200" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;