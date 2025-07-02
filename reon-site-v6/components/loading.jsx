"use client";

const LoadingSpinner = ({ size = "md", color = "primary" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const colorClasses = {
    primary: "border-[var(--interactive-primary)]",
    secondary: "border-[var(--text-secondary)]",
    white: "border-white",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-transparent ${colorClasses[color]} border-t-transparent`}
      ></div>
    </div>
  );
};

const LoadingSkeleton = ({ className = "", children }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {children || (
        <div className="space-y-4">
          <div className="h-4 bg-[var(--background-accent)] rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-[var(--background-accent)] rounded"></div>
            <div className="h-4 bg-[var(--background-accent)] rounded w-5/6"></div>
          </div>
        </div>
      )}
    </div>
  );
};

const LoadingCard = () => {
  return (
    <div className="bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg p-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-48 bg-[var(--background-accent)] rounded"></div>
        <div className="h-6 bg-[var(--background-accent)] rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-[var(--background-accent)] rounded"></div>
          <div className="h-4 bg-[var(--background-accent)] rounded w-5/6"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-8 bg-[var(--background-accent)] rounded w-20"></div>
          <div className="h-8 bg-[var(--background-accent)] rounded w-24"></div>
        </div>
      </div>
    </div>
  );
};

const LoadingSection = ({ title, cards = 3 }) => {
  return (
    <section className="section-padding bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <LoadingSkeleton className="max-w-md mx-auto">
            <div className="h-8 bg-[var(--background-accent)] rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-[var(--background-accent)] rounded w-96 mx-auto"></div>
          </LoadingSkeleton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: cards }).map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export {
  LoadingSpinner,
  LoadingSkeleton,
  LoadingCard,
  LoadingSection,
};
