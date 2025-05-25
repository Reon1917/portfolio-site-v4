"use client";
import { cn } from "@/lib/utils";

export const CustomAurora = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden",
        // Light mode: Clean white background
        "bg-background",
        className
      )}
      {...props}
    >
      {/* Aurora effect - only visible in dark mode */}
      <div
        className="absolute inset-0 overflow-hidden opacity-0 dark:opacity-100 transition-opacity duration-500"
        style={{
          "--aurora": "repeating-linear-gradient(100deg, var(--aurora-blue-500) 10%, var(--aurora-indigo-300) 15%, var(--aurora-blue-300) 20%, var(--aurora-violet-200) 25%, var(--aurora-blue-400) 30%)",
          "--dark-gradient": "repeating-linear-gradient(100deg, var(--background) 0%, var(--background) 7%, transparent 10%, transparent 12%, var(--background) 16%)",
        }}
      >
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-40 blur-[10px] will-change-transform",
            "[background-image:var(--dark-gradient),var(--aurora)]",
            "[background-size:300%,_200%]",
            "[background-position:50%_50%,50%_50%]",
            "after:absolute after:inset-0",
            "after:[background-image:var(--dark-gradient),var(--aurora)]",
            "after:[background-size:200%,_100%]",
            "after:[background-attachment:fixed]",
            "after:mix-blend-difference",
            "after:content-['']",
            "after:animate-aurora",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_50%_0%,black_10%,transparent_70%)]"
          )}
        />
      </div>
      
      <div className="relative z-10 w-full text-foreground">
        {children}
      </div>
    </div>
  );
}; 