"use client";
import { useState } from "react";
import myInfo from "@/data/myinfo.json";
import { useResponsiveSpacing, useDeviceType } from "@/lib/hooks";

export default function Contact() {
  const spacing = useResponsiveSpacing();
  const deviceType = useDeviceType();
  
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
    <section id="contact" className={`${spacing.section} ${spacing.container} bg-secondary/10`}>
      <div className={`${deviceType === 'desktop' ? 'max-w-7xl' : 'max-w-6xl'} mx-auto`}>
        <div className={`text-center ${deviceType === 'mobile' ? 'mb-8' : deviceType === 'tablet' ? 'mb-12' : 'mb-16'}`}>
          <h2 className={`${deviceType === 'mobile' ? 'text-3xl' : deviceType === 'tablet' ? 'text-4xl' : deviceType === 'laptop' ? 'text-4xl' : 'text-5xl'} font-semibold ${deviceType === 'mobile' ? 'mb-3' : 'mb-4'} text-foreground tracking-tight`}>
            Let's Connect
          </h2>
          <p className={`${deviceType === 'mobile' ? 'text-base' : deviceType === 'tablet' ? 'text-lg' : 'text-xl'} text-muted-foreground ${deviceType === 'desktop' ? 'max-w-3xl' : 'max-w-2xl'} mx-auto`}>
            Ready to collaborate on your next project? I'd love to hear from you.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 ${deviceType === 'mobile' ? 'gap-8' : deviceType === 'tablet' ? 'gap-10' : 'gap-12'}`}>
          {/* Contact Information */}
          <div className={`${deviceType === 'mobile' ? 'space-y-6' : 'space-y-8'}`}>
            <div>
              <h3 className={`${deviceType === 'mobile' ? 'text-xl' : 'text-2xl'} font-semibold ${deviceType === 'mobile' ? 'mb-4' : 'mb-6'} text-foreground`}>Get in Touch</h3>
              <p className={`${deviceType === 'mobile' ? 'text-base mb-6' : 'text-lg mb-8'} text-foreground/80 leading-relaxed`}>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about web development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className={`${deviceType === 'mobile' ? 'space-y-3' : 'space-y-4'}`}>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className={`flex items-center ${deviceType === 'mobile' ? 'space-x-3 p-3' : 'space-x-4 p-4'} bg-background/60 rounded-xl border border-border hover:bg-background/80 transition-all duration-300 group`}
                >
                  <div className={`${deviceType === 'mobile' ? 'text-xl' : 'text-2xl'} group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className={`font-medium text-foreground ${deviceType === 'mobile' ? 'text-sm' : ''}`}>{method.label}</p>
                    <p className={`text-foreground/70 ${deviceType === 'mobile' ? 'text-xs' : 'text-sm'}`}>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`${deviceType === 'mobile' ? 'text-base' : 'text-lg'} font-semibold ${deviceType === 'mobile' ? 'mb-3' : 'mb-4'} text-foreground`}>Follow Me</h4>
              <div className={`flex ${deviceType === 'mobile' ? 'space-x-3' : 'space-x-4'}`}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 ${deviceType === 'mobile' ? 'px-3 py-1.5' : 'px-4 py-2'} bg-background/60 rounded-lg border border-border hover:bg-background/80 transition-all duration-300`}
                  >
                    <span className={`${deviceType === 'mobile' ? 'text-base' : 'text-lg'}`}>{social.icon}</span>
                    <span className={`${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} font-medium text-foreground`}>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-background/60 backdrop-blur-sm rounded-xl ${deviceType === 'mobile' ? 'p-6' : 'p-8'} border border-border`}>
            <h3 className={`${deviceType === 'mobile' ? 'text-xl' : 'text-2xl'} font-semibold ${deviceType === 'mobile' ? 'mb-4' : 'mb-6'} text-foreground`}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className={`${deviceType === 'mobile' ? 'space-y-4' : 'space-y-6'}`}>
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${deviceType === 'mobile' ? 'gap-3' : 'gap-4'}`}>
                <div>
                  <label htmlFor="name" className={`block ${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} font-medium text-foreground ${deviceType === 'mobile' ? 'mb-1.5' : 'mb-2'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full ${deviceType === 'mobile' ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'} bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors`}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block ${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} font-medium text-foreground ${deviceType === 'mobile' ? 'mb-1.5' : 'mb-2'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full ${deviceType === 'mobile' ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'} bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className={`block ${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} font-medium text-foreground ${deviceType === 'mobile' ? 'mb-1.5' : 'mb-2'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full ${deviceType === 'mobile' ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'} bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors`}
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block ${deviceType === 'mobile' ? 'text-xs' : 'text-sm'} font-medium text-foreground ${deviceType === 'mobile' ? 'mb-1.5' : 'mb-2'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={deviceType === 'mobile' ? 4 : 6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full ${deviceType === 'mobile' ? 'px-3 py-2.5 text-sm' : 'px-4 py-3'} bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none`}
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>
              
              <button
                type="submit"
                className={`w-full bg-primary text-primary-foreground ${deviceType === 'mobile' ? 'px-4 py-2.5 text-sm' : 'px-6 py-3'} rounded-lg font-medium hover:bg-primary/90 transition-colors`}
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