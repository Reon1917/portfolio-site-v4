"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export function Footer({ data }) {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">{data.name}</h3>
            <p className="text-muted-foreground mt-1">{data.role}</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a 
              href={`mailto:linmaytphyo03@gmail.com`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <MailIcon size={20} />
            </a>
          </div>
          
          <div className="mt-6 md:mt-0 text-sm text-muted-foreground">
            <p>Built with Next.js and TailwindCSS</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 