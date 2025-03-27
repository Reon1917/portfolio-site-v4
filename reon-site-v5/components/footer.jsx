"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Instagram } from "lucide-react";

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
              href="https://github.com/Reon1917" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/lin-myat-phyo-b872b1217/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
            <a 
              href="https://www.instagram.com/re0n1917/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
          
          <div className="mt-6 md:mt-0 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 