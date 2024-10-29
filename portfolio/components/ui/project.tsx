// project.tsx

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Project = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth } = carouselRef.current;
      const isScrollable = scrollWidth > clientWidth;
      setShowRightArrow(isScrollable); // Show right arrow if scrollable
    }
  };

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0); // Show left arrow if not at start
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); // Show right arrow if not at end
    }
  };

  useEffect(() => {
    // Observer for resizing, so arrows appear/disappear based on container width
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
      tech: "React Native & Firebase",
      imageUrl: "/images/csm.png",
      slug: "what-to-eat",
      description: "A mobile application that helps users decide what to eat by providing personalized restaurant recommendations based on their preferences and location.",
      features: [
        "Personalized restaurant recommendations",
        "Location-based search",
        "User preference tracking",
        "Restaurant details and reviews",
        "Bookmark favorite restaurants"
      ],
      technologies: [
        "React Native",
        "Firebase",
        "Google Maps API",
        "Expo",
        "JavaScript"
      ],
      demoUrl: "https://chi-se-mo.web.app/",
      githubUrl: "https://github.com/woshijay/chi-she-m"
    },
    {
      id: 2,
      title: "Land Use Prediction",
      tech: "Python & TensorFlow",
      imageUrl: "/images/landio.png",
      slug: "land-use-prediction",
      description: "An AI-powered system that predicts land use patterns using satellite imagery and machine learning techniques.",
      features: [
        "Satellite image analysis",
        "Machine learning predictions",
        "Data visualization",
        "Historical pattern analysis"
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "NumPy",
        "Pandas"
      ],
      githubUrl: "https://github.com/username/land-use-FYP"
    },
    {
      id: 3,
      title: "Wordle Clone",
      tech: "React & TypeScript",
      imageUrl: "/images/wdlclone.png",
      slug: "wordle-clone",
      description: "A web-based clone of the popular word game Wordle, built with React and TypeScript.",
      features: [
        "Daily word challenges",
        "Keyboard input support",
        "Score tracking",
        "Share results feature",
        "Dark mode support"
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Local Storage"
      ],
      demoUrl: "https://example.com/wordle-clone",
      githubUrl: "https://github.com/woshijay/wordle-clone"
    }
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-center bg-white dark:bg-neutral-950">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
            Projects
          </h2>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 snap-x snap-mandatory px-4"
            onScroll={checkScroll}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
{projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.id}
                className="min-w-[280px] w-[calc(100vw-2rem)] sm:w-[320px] lg:w-[320px] flex-shrink-0 snap-start group cursor-pointer mx-auto"
              >
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <div className="w-full h-full relative">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-101"
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
                  </div>
                </div>
              </Link>
            ))}          
          </div>

          {/* Navigation buttons */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 -ml-6 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300 border border-neutral-200 dark:border-neutral-700 z-10"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-neutral-700 dark:text-neutral-200" />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 -mr-6 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300 border border-neutral-200 dark:border-neutral-700 z-10"
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