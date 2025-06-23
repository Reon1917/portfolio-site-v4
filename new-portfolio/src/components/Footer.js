// src/components/Footer.js
import { portfolioData } from '@/data/portfolioData';

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        {/* Optional: Add social links or other footer content here */}
      </div>
    </footer>
  );
}
