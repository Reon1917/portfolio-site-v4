// src/components/Navbar.js
"use client"; // Needed for useState and Sheet component interactivity

import Link from 'next/link';
import { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Briefcase, FolderGit2, MessageSquare } from 'lucide-react'; // Icons for nav items

const navLinks = [
  { href: "/#about", label: "About", icon: <Briefcase className="mr-2 h-4 w-4" /> },
  { href: "/#projects", label: "Projects", icon: <FolderGit2 className="mr-2 h-4 w-4" /> },
  { href: "/#contact", label: "Contact", icon: <MessageSquare className="mr-2 h-4 w-4" /> },
];

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/20">
      <nav className="container mx-auto px-4 sm:px-6 py-3 h-16 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          {portfolioData.initials || portfolioData.name.split(" ").map(n => n[0]).join("")}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
            <Button key={link.label} variant="ghost" asChild>
              <Link href={link.href} className="px-3 py-2 text-sm">
                {/* {link.icon}  Optionally add icons to desktop too */}
                {link.label}
              </Link>
            </Button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left text-lg font-semibold">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-3">
                {navLinks.map(link => (
                  <SheetClose key={link.label} asChild>
                    <Link
                      href={link.href}
                      className="flex items-center px-3 py-3 text-base rounded-md hover:bg-accent transition-colors"
                      onClick={() => setIsSheetOpen(false)} // Close sheet on click
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
