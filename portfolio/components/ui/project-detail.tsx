// project-detail.tsx

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  tech: string;
  imageUrl: string;
  description: string;
  features?: string[];
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectDetail = ({ project }: { project: Project }) => {
  if (!project) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Header */}
      <header className="w-full border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link 
              href="/#projects"
              className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Project Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full">
              {project.tech}
            </span>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 md:mb-12 border border-neutral-200 dark:border-neutral-800">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          {/* Overview Section */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
              Overview
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Features Section */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
              {project.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technologies Section */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full text-sm text-neutral-600 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-neutral-900 dark:border-neutral-50 text-neutral-900 dark:text-neutral-50 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                View Source
              </a>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;