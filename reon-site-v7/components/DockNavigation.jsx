"use client";

import Dock, { useDockNavigation } from "@/components/ui/dock";

export default function DockNavigation() {
  const { activeSection, scrollToSection } = useDockNavigation();

  const dockItems = [
    {
      id: "hero",
      label: "Home",
      icon: "Home"
    },
    {
      id: "about", 
      label: "About",
      icon: "About"
    },
    {
      id: "skills",
      label: "Skills", 
      icon: "Skills"
    },
    {
      id: "projects",
      label: "Projects",
      icon: "Work"
    },
    {
      id: "contact",
      label: "Contact",
      icon: "Contact"
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