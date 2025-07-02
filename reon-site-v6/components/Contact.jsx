"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, MessageSquare, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Phone, Globe } from "lucide-react";
import personalInfo from "@/app/personal-info/myinfo.json";

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

  const contactMethods = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      value: personalInfo.contacts.email,
      href: `mailto:${personalInfo.contacts.email}`,
      color: "#f59e0b",
      description: "Send me an email"
    },
    {
      name: "Phone",
      icon: <Phone className="h-5 w-5" />,
      value: personalInfo.contacts.phone,
      href: `tel:${personalInfo.contacts.phone}`,
      color: "#10b981",
      description: "Give me a call"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      value: "Professional Profile",
      href: personalInfo.contacts.linkedin,
      color: "#0077B5",
      description: "Connect professionally"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      value: "Code Repository",
      href: personalInfo.contacts.github,
      color: "#333",
      description: "View my projects"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      value: "Social Profile",
      href: personalInfo.contacts.instagram,
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
            Ready to bring your next project to life? I'm always excited to discuss new opportunities 
            and collaborate on innovative solutions. Let's connect and make something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div 
              className="space-y-8"
              style={{
                animation: isVisible ? "slideInLeft 0.6s ease-out forwards" : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)"
              }}
            >
              <div className="paper-card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-lg bg-[var(--accent)]20">
                    <MessageSquare className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Get In Touch
                  </h3>
                </div>

                <p className="text-body text-[var(--text-secondary)] mb-6">
                  I'm currently seeking full-time opportunities and interesting projects. 
                  Whether you have a specific role in mind or just want to connect, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.name}
                      href={method.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[var(--paper-border)] transition-colors group"
                    >
                      <div 
                        className="p-2 rounded-lg flex-shrink-0"
                        style={{ 
                          backgroundColor: `${method.color}20`,
                          color: method.color 
                        }}
                      >
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {method.name}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)]">{method.value}</p>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">{method.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="paper-card p-6">
                <h4 className="font-semibold text-[var(--text-primary)] mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-secondary)]">Response Time</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-secondary)]">Availability</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">Open to opportunities</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-secondary)]">Location</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{personalInfo.personalInfo.currentLocation}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className="paper-card p-8"
              style={{
                animation: isVisible ? "slideInRight 0.6s ease-out forwards" : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(30px)"
              }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-[var(--accent)]20">
                  <Send className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  Send a Message
                </h3>
              </div>

              {/* Success/Error Message */}
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                  submitStatus === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
                }`}>
                  {submitStatus === "success" ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  <span className="text-sm font-medium">
                    {submitStatus === "success" 
                      ? "Message sent successfully! I'll get back to you soon." 
                      : "There was an error sending your message. Please try again."
                    }
                  </span>
                </div>
              )}

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
                    placeholder="Job Opportunity / Project Collaboration"
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
                    placeholder="I'd like to discuss a potential opportunity..."
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
              </form>
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
