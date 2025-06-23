// src/components/Contact.js
"use client"; // Required for react-hook-form and sonner

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card"; // Added Card imports
import { Loader2 } from "lucide-react"; // For loading spinner

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 tracking-tight">
    {children}
  </h2>
);

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

      const result = await response.json();

      if (response.ok) {
        toast.success("Message Sent!", {
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Submission Failed", {
        description: error.message || "An unexpected error occurred.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-center text-muted-foreground mb-10 sm:mb-12">
          Have a question, a project idea, or just want to connect? Feel free to reach out!
        </p>

        <Card className="shadow-lg"> {/* Added Card wrapper */}
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className={errors.name ? "text-destructive" : ""}>Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Name is required.",
                    minLength: { value: 2, message: "Name must be at least 2 characters."}
                  })}
                  className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email" className={errors.email ? "text-destructive" : ""}>Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address."}
                  })}
                  className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="message" className={errors.message ? "text-destructive" : ""}>Message</Label>
                <Textarea
                  id="message"
                  placeholder="Hi there, I'd like to discuss..."
                  rows={5}
                  {...register("message", {
                    required: "Message is required.",
                    minLength: { value: 10, message: "Message must be at least 10 characters."}
                  })}
                  className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
              </div>

              <div>
                <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
