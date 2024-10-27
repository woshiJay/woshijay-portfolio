"use client";

import React, { useState, useEffect, useRef } from 'react';
import Home from '@/components/ui/home';
import About from '@/components/ui/about';
import Project from '@/components/ui/project';
import Contact from '@/components/ui/contact';
import Footer from '@/components/ui/footer';

const PageSlider = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showDots, setShowDots] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sections = ['home', 'about', 'projects', 'contact'];

  const resetDotsTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowDots(true);
    timeoutRef.current = setTimeout(() => {
      setShowDots(false);
    }, 500);
  };

  useEffect(() => {
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
        resetDotsTimeout();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
    <div className="h-[calc(100vh-4rem)] w-full overflow-hidden">
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-mandatory snap-y"
        style={{
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        <section className="h-full w-full snap-start relative bg-background">
          <Home />
        </section>

        <section className="h-full w-full snap-start relative bg-background">
          <About />
        </section>

        <section className="h-full w-full snap-start relative bg-background">
          <Project />
        </section>

        <section className="h-full w-full snap-start relative bg-background">
          <div className="h-full flex flex-col">
            <div className="flex-grow">
              <Contact />
            </div>
            <Footer />
          </div>
        </section>

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