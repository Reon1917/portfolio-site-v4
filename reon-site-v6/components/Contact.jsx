"use client"

import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  MapPin, 
  Github, 
  Linkedin,
  Instagram,
  Phone
} from 'lucide-react';

const Contact = ({ contacts }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just create a mailto link
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                color: 'var(--text-primary)'
              }}
            >
              Let's Work Together
            </h2>
            <div 
              className="w-24 h-1 mx-auto rounded-full mb-6"
              style={{ backgroundColor: 'var(--interactive-primary)' }}
            ></div>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card 
              className={`p-8 shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)'
              }}
            >
              <div className="flex items-center mb-6">
                <div 
                  className="p-3 rounded-full mr-4"
                  style={{ backgroundColor: 'var(--interactive-primary)' }}
                >
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 
                  className="text-2xl font-semibold"
                  style={{ 
                    fontFamily: 'var(--font-playfair)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Send Me a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--interactive-primary)',
                    color: 'white',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--interactive-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--interactive-primary)';
                  }}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div 
              className={`space-y-8 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <Card 
                className="p-6"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-full mr-4"
                    style={{ backgroundColor: 'var(--interactive-primary)' }}
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 
                    className="text-xl font-semibold"
                    style={{ 
                      fontFamily: 'var(--font-playfair)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Email Me
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Prefer to send a direct email? Drop me a line and I'll get back to you as soon as possible.
                </p>
                <a 
                  href="mailto:your-email@example.com"
                  className="inline-block mt-4 font-medium transition-colors hover:opacity-80"
                  style={{ color: 'var(--interactive-primary)' }}
                >
                  your-email@example.com
                </a>
              </Card>

              <Card 
                className="p-6"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-full mr-4"
                    style={{ backgroundColor: '#10B981' }}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 
                    className="text-xl font-semibold"
                    style={{ 
                      fontFamily: 'var(--font-playfair)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Location
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Currently based in Bangkok, Thailand
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Originally from Myanmar
                </p>
              </Card>

              {/* Social Links */}
              <Card 
                className="p-6"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <h3 
                  className="text-xl font-semibold mb-6"
                  style={{ 
                    fontFamily: 'var(--font-playfair)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {contacts.github && (
                    <a
                      href={contacts.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: 'var(--bg-accent)' }}
                    >
                      <Github className="h-6 w-6" style={{ color: 'var(--text-primary)' }} />
                    </a>
                  )}
                  {contacts.linkedin && (
                    <a
                      href={contacts.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: 'var(--bg-accent)' }}
                    >
                      <Linkedin className="h-6 w-6" style={{ color: 'var(--text-primary)' }} />
                    </a>
                  )}
                  {contacts.instagram && (
                    <a
                      href={contacts.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: 'var(--bg-accent)' }}
                    >
                      <Instagram className="h-6 w-6" style={{ color: 'var(--text-primary)' }} />
                    </a>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
