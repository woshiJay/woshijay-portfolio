import React from 'react';
import { Mailbox, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 bg-background border-t">
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
    </footer>
  );
};