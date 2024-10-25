"use client";

import React, { useState, useEffect, useRef } from 'react';
import { TypewriterEffectJanky } from "@/components/ui/typewriter-effect";
import ThreeElement from '@/components/ui/three-element';

const PageSlider = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sections = ['home', 'projects', 'about'];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = container.scrollTop;
        const windowHeight = container.clientHeight;
        const newActiveSection = Math.round(scrollPosition / windowHeight);
        setActiveSection(newActiveSection);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
    <div className="h-[calc(100vh-4rem-4rem)] w-full overflow-hidden"> {/* Adjusted for navbar and footer */}
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-mandatory snap-y"
        style={{
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        {/* Home Section */}
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

        {/* Projects Section */}
        <section className="h-full w-full snap-start relative bg-background">
            <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-center p-5">
                <main className="flex-grow flex items-center justify-start px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-5xl font-bold">Projects</h2>
                        {/* add card here */}
                    </div>
                </main>
            </div>
        </section>

        {/* About Section */}
        <section className="h-full w-full snap-start relative bg-background">
            <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-center p-5">
                <main className="flex-grow flex items-center justify-end px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl"> {/* Add this wrapper div */}
                        <h2 className="text-5xl font-bold">About</h2>
                        {/* Add your about content here */}
                    </div>
                </main>
            </div>
        </section>

        {/* Section Indicators */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
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
  );
};

export default PageSlider;