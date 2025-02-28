"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const courses = [
  {
    name: "Web Application Development",
    description: "Comprehensive study of modern web technologies, frameworks, and best practices for building responsive and interactive web applications.",
  },
  {
    name: "Data Structures and Algorithms",
    description: "In-depth exploration of fundamental data structures and algorithms, focusing on efficiency, optimization, and practical implementation.",
  },
  {
    name: "Database Systems",
    description: "Study of database design, implementation, and management with focus on relational and NoSQL databases.",
  },
  {
    name: "Software Engineering",
    description: "Learning software development lifecycle, project management, and industry best practices for building robust applications.",
  },
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("education");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="education" className="section-padding">
      <div className="container">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with both theoretical knowledge and practical skills
            in software development and information technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-3xl text-blue-600 dark:text-blue-400 font-bold">
                    AU
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Assumption University of Thailand
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Bachelor of Science in Information Technology
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Software Development Concentration
                  </p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    <span>2022 - Present</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <h3 className="heading-md text-gray-800 dark:text-gray-200 mb-6">
              Key Courses
            </h3>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div 
                  key={course.name}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {course.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
