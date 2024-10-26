"use client";
import React, { useState, useEffect, useRef } from 'react';
import { TypewriterEffectJanky } from "@/components/ui/typewriter-effect";
import ThreeElement from '@/components/ui/three-element';
import Project from '@/components/ui/project';
import About from '@/components/ui/about';
import Contact from '@/components/ui/contact';

const PageSlider = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showDots, setShowDots] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sections = ['home', 'projects', 'about', 'contact'];

  const resetDotsTimeout = () => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Show dots immediately
    setShowDots(true);

    // Set new timeout to hide dots after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setShowDots(false);
    }, 500);
  };

  useEffect(() => {
    // Cleanup timeout on component unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = container.scrollTop;
        const windowHeight = container.clientHeight;
        const newActiveSection = Math.round(scrollPosition / windowHeight);
        setActiveSection(newActiveSection);
        
        // Reset dots timeout on scroll
        resetDotsTimeout();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Also show dots when hovering over their area
  const handleDotsAreaHover = () => {
    setShowDots(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDotsAreaLeave = () => {
    resetDotsTimeout();
  };

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollTo({
        top: index * container.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="h-[calc(100vh-4rem-4rem)] w-full overflow-hidden">
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-mandatory snap-y"
        style={{
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        <section className="h-full w-full snap-start relative bg-background">
          <div className="max-w-[1200px] mx-auto h-full flex flex-col p-5">
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-1/2">
                  <TypewriterEffectJanky />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
                    <ThreeElement />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>

        <section className="h-full w-full snap-start relative bg-background">
          <Project />
        </section>

        <section className="h-full w-full snap-start relative bg-background">
            <About />
        </section>

        <section className="h-full w-full snap-start relative bg-background">
            <Contact />
        </section>


        {/* Section Indicators with hover area */}
        <div 
          className="fixed right-0 top-1/2 -translate-y-1/2 h-48 w-12 flex items-center justify-center hidden sm:flex"
          onMouseEnter={handleDotsAreaHover}
          onMouseLeave={handleDotsAreaLeave}
        >
          <div className={`flex flex-col gap-4 transition-opacity duration-300 ${showDots ? 'opacity-100' : 'opacity-0'}`}>
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Scroll to ${sections[index]} section`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSlider;