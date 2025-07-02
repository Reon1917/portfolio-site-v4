"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Instagram, Send, MapPin, Phone } from "lucide-react";

const ContactSection = ({ contacts, moreAboutMe }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent! I'll get back to you soon.");
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:linmyatphyo.dev@gmail.com",
      color: "hover:text-red-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: contacts.github || "#",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: contacts.linkedin || "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: contacts.instagram || "#",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 ${inView ? "fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:'Playfair_Display'] text-[var(--text-primary)] mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className={`${inView ? "slide-in-left" : "opacity-0"}`}>
            <div className="bg-[var(--background-primary)] border border-[var(--border)] rounded-lg p-8 paper-texture">
              <h3 className="text-2xl font-semibold font-[family-name:'Playfair_Display'] text-[var(--text-primary)] mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--interactive-primary)] focus:border-transparent text-[var(--text-primary)] transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--interactive-primary)] focus:border-transparent text-[var(--text-primary)] transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--interactive-primary)] focus:border-transparent text-[var(--text-primary)] transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--interactive-primary)] hover:bg-[var(--interactive-hover)] text-white px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info & Fun Facts */}
          <div className={`space-y-8 ${inView ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            {/* Contact Information */}
            <div className="bg-[var(--background-primary)] border border-[var(--border)] rounded-lg p-8 paper-texture">
              <h3 className="text-2xl font-semibold font-[family-name:'Playfair_Display'] text-[var(--text-primary)] mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[var(--interactive-primary)]" />
                  <span className="text-[var(--text-secondary)]">Bangkok, Thailand</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[var(--interactive-primary)]" />
                  <a 
                    href="mailto:linmyatphyo.dev@gmail.com"
                    className="text-[var(--text-secondary)] hover:text-[var(--interactive-primary)] transition-colors duration-200"
                  >
                    linmyatphyo.dev@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-[var(--text-primary)] mb-4">
                  Follow me on
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-md hover:bg-[var(--background-accent)] transition-all duration-200 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Facts About Me */}
            <div className="bg-[var(--background-primary)] border border-[var(--border)] rounded-lg p-8 paper-texture">
              <h3 className="text-2xl font-semibold font-[family-name:'Playfair_Display'] text-[var(--text-primary)] mb-6">
                More About Me
              </h3>
              
              <div className="space-y-4">
                {moreAboutMe.map((item, index) => (
                  <div key={index} className="border-l-2 border-[var(--interactive-primary)] pl-4">
                    <h4 className="font-medium text-[var(--text-primary)] mb-1">
                      {item.question}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
