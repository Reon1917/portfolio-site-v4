"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, MessageSquare, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "#",
      color: "#333",
      description: "Check out my repositories"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "#",
      color: "#0077B5",
      description: "Connect professionally"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "#",
      color: "#E4405F",
      description: "Follow my journey"
    }
  ];

  return (
    <section id="contact" className="section-spacing" ref={sectionRef}>
      <div className="container-spacing">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading mb-4 text-[var(--text-primary)]">
            Let's Work Together
          </h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you. 
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div 
              className="paper-card p-8"
              style={{
                animation: isVisible ? "slideInLeft 0.6s ease-out forwards" : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)"
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-[var(--accent)]20">
                  <MessageSquare className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--paper-border)] rounded-lg bg-[var(--paper-bg)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors mobile-touch"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--paper-border)] rounded-lg bg-[var(--paper-bg)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors mobile-touch"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--paper-border)] rounded-lg bg-[var(--paper-bg)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors mobile-touch"
                    placeholder="Project Collaboration"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[var(--paper-border)] rounded-lg bg-[var(--paper-bg)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors resize-none mobile-touch"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-light)] focus-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed mobile-touch"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus === "success" 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    {submitStatus === "success" ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span className="text-sm font-medium">
                      {submitStatus === "success" 
                        ? "Message sent successfully! I'll get back to you soon." 
                        : "Failed to send message. Please try again."}
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div 
              className="space-y-8"
              style={{
                animation: isVisible ? "slideInRight 0.6s ease-out forwards" : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(30px)"
              }}
            >
              {/* Direct Contact */}
              <div className="paper-card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-lg bg-[var(--accent)]20">
                    <Mail className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Direct Contact
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-1">Email</h4>
                    <a 
                      href="mailto:lin@example.com" 
                      className="text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors"
                    >
                      lin@example.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-1">Location</h4>
                    <p className="text-[var(--text-secondary)]">Bangkok, Thailand</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-1">Response Time</h4>
                    <p className="text-[var(--text-secondary)]">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="paper-card p-8">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
                  Connect With Me
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-[var(--paper-border)] hover:border-[var(--accent)] hover:bg-[var(--paper-border)] transition-all duration-200 group focus-ring"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${social.color}20`, color: social.color }}
                      >
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="paper-card p-6 text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Open to freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
