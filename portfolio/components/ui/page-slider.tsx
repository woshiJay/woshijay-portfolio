"use client";

import React, { useState, useEffect, useRef } from 'react';
import { TypewriterEffectJanky } from "@/components/ui/typewriter-effect";
import ThreeElement from '@/components/ui/three-element';
import About from '@/components/ui/about';
import Project from '@/components/ui/project';
import Contact from '@/components/ui/contact';
import { Github, Linkedin, Mailbox } from 'lucide-react';

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

  const Footer = () => (
    <div className="w-full py-4 px-4 bg-background">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/woshijay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:sengkit100@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <Mailbox size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sengkit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
        <p className="text-xs font-mono font-bold text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} woshiJay
        </p>
      </div>
    </div>
  );

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