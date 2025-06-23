export const portfolioData = {
  name: "Lin Myat Phyo",
  initials: "LMP", // Added for potential use in Navbar/Logo
  origin: "Myanmar",
  location: "Thailand",
  role: "Full Stack Web Developer",
  bio: "Passionate about crafting robust web applications with modern technologies. Currently pursuing a Bachelor of Science in IT with a focus on Software Development at Assumption University of Thailand. I specialize in building scalable solutions that deliver exceptional user experiences.", // Combined from hero
  contact: {
    email: "your.email@example.com", // Placeholder
    // Add social links later if needed e.g., github: "..."
  },
  education: {
    university: "Assumption University of Thailand",
    degree: "Bachelor of Science in IT",
    concentration: "Software Development",
    courses: [
      "Web Application Development",
      "Data Structures and Algorithms",
      "Software Testing",
      "Backend Application Development",
    ],
  },
  skills: {
    frontend: ["Next.js", "React", "Tailwind CSS", "JavaScript (ES6+)"], // Changed from TypeScript to JS as per request
    backend: ["Node.js", "Express.js", "MongoDB", "Supabase", "PostgreSQL", "Resend"], // Added Resend, Node/Express
    programming_languages: ["JavaScript", "Python", "Java"], // Kept JS
    tools: ["Git", "Docker", "VS Code"], // Simplified tools
    // Consider adding a 'concepts' array: e.g., ["REST APIs", "Agile Development"]
  },
  dev_environment: { // Simplified this, can be derived or less prominent
    os: "Windows",
    ide: "VS Code / Cursor IDE",
    version_control: "GitHub",
  },
  projects: [
    {
      id: 1,
      name: "Helio Ring",
      description: "Premium ecommerce website for smart health tracking rings. Frontend-only demonstration with sophisticated monochromatic design and gold accents.",
      githubUrl: "https://github.com/Reon1917/ecommerence-mockup",
      demoUrl: "https://helioring.vercel.app/",
      image: "/project-img/helio-ring.png", // Will need to copy images
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      type: "Frontend Portfolio",
      features: ["Shopping Cart", "Product Catalog", "Responsive Design", "Animation System"]
    },
    {
      id: 2,
      name: "Catalyst",
      description: "Enterprise-grade dashboard application showcasing advanced UI/UX patterns. Frontend-focused with complex data visualization and modern design system.",
      githubUrl: "https://github.com/Reon1917/catalyst",
      demoUrl: "https://catalyst-reon-demo.vercel.app/",
      image: "/project-img/catalyst.png", // Will need to copy images
      technologies: ["Next.js", "Tailwind CSS", "Chart.js"], // Removed TS
      type: "Frontend Portfolio",
      features: ["Data Visualization", "Dark Mode", "Component Library", "Enterprise UX"]
    }
    // Add more projects as needed
  ],
};
