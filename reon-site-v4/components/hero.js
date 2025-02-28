"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16 pb-8"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="heading-xl text-gray-900 dark:text-white mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">
                Lin Myat Phyo
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Full-Stack Web Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              I'm a passionate software developer specializing in creating modern web applications.
              Currently pursuing IT with Software Development Concentration at Assumption University of Thailand,
              I combine academic knowledge with practical skills to build efficient, user-friendly solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="btn-primary"
              >
                Contact Me
              </Link>
              <Link
                href="#skills"
                className="btn-secondary"
              >
                Explore Skills
              </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-7xl sm:text-8xl md:text-9xl text-blue-600 dark:text-blue-400 font-bold">
                LMP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
