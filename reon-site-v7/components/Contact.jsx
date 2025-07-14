"use client";
import { useState } from "react";
import myInfo from "@/data/myinfo.json";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: myInfo.contacts.email,
      href: `mailto:${myInfo.contacts.email}`,
    },
    {
      icon: "📍",
      label: "Location",
      value: myInfo.personalInfo.currentLocation,
      href: "#",
    },
    {
      icon: "📱",
      label: "Phone",
      value: myInfo.contacts.phone,
      href: `tel:${myInfo.contacts.phone}`,
    },
  ];

  const socialLinks = [
    {
      icon: "💼",
      name: "LinkedIn",
      href: myInfo.contacts.linkedin,
    },
    {
      icon: "👨‍💻",
      name: "GitHub",
      href: myInfo.contacts.github,
    },
    {
      icon: "📸",
      name: "Instagram",
      href: myInfo.contacts.instagram,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about web development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center space-x-4 p-4 bg-background/60 rounded-xl border border-border hover:bg-background/80 transition-all duration-300 group"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{method.label}</p>
                    <p className="text-foreground/70">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-background/60 rounded-lg border border-border hover:bg-background/80 transition-all duration-300"
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span className="text-sm font-medium text-foreground">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/60 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}