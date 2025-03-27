"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function Hero({ data }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm {data.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          {data.role} from {data.origin}, based in {data.location}
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-muted-foreground">
          Passionate about crafting robust web applications with modern technologies.
          Currently pursuing {data.education.degree} with a focus on {data.education.concentration} at {data.education.university}.
          I specialize in building scalable solutions that deliver exceptional user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#skills">
              View My Skills
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
} 