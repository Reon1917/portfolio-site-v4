"use client";

import Dock, { useDockNavigation } from "@/components/ui/dock";

export default function DockNavigation() {
  const { activeSection, scrollToSection } = useDockNavigation();

  const dockItems = [
    {
      id: "hero",
      label: "Home",
      icon: "🏠"
    },
    {
      id: "about", 
      label: "About",
      icon: "👨‍💻"
    },
    {
      id: "skills",
      label: "Skills", 
      icon: "⚡"
    },
    {
      id: "projects",
      label: "Projects",
      icon: "🚀"
    },
    {
      id: "contact",
      label: "Contact",
      icon: "💬"
    }
  ];

  const handleItemClick = (item) => {
    scrollToSection(item.id);
  };

  return (
    <Dock 
      items={dockItems}
      onItemClick={handleItemClick}
      activeItem={activeSection}
    />
  );
}