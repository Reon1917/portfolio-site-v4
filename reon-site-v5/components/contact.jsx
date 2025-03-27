"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "Thank you for your message. I'll get back to you soon.",
        });
        reset();
      } else {
        const error = await response.json();
        throw new Error(error.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: error.message || "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 apple-accent pb-3">Get In Touch</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Fill out the form below and I'll get back to you as soon as possible.
          </p>

          <div className="apple-card apple-accent-shadow overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-6 bg-card rounded-lg">
              <div className="space-y-3">
                <div className="form-group">
                  <Label htmlFor="name" className="block mb-2 text-sm font-medium">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className={`mt-1 bg-secondary/30 border-border/40 focus-visible:ring-primary focus-visible:border-primary/40 transition-all duration-300 ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    {...register("name", { 
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters"
                      },
                      maxLength: {
                        value: 50,
                        message: "Name must be less than 50 characters"
                      }
                    })}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="form-group">
                  <Label htmlFor="email" className="block mb-2 text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className={`mt-1 bg-secondary/30 border-border/40 focus-visible:ring-primary focus-visible:border-primary/40 transition-all duration-300 ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="form-group">
                  <Label htmlFor="message" className="block mb-2 text-sm font-medium">Message</Label>
                  <textarea
                    id="message"
                    className={`flex w-full rounded-md border border-input bg-secondary/30 border-border/40 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px] resize-none mt-1 transition-all duration-300 ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    placeholder="Your message..."
                    {...register("message", { 
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters"
                      },
                      maxLength: {
                        value: 1000,
                        message: "Message must be less than 1000 characters"
                      }
                    })}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <Button 
                type="submit" 
                className="apple-button mt-4 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span> : 
                  "Send Message"
                }
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 