import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  // Existing variants preserved for compatibility
  variant?: "blue" | "story" | "modern" | "default" | "navy" | "gold";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  // Shared styling for all cards
  const baseClass =
    "rounded-xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl";

  let variantClass = "";

  switch (variant) {
    // Navy
    case "blue":
    case "navy":
      variantClass =
        "bg-brand-navy text-white border border-brand-navy/80 shadow-xl";
      break;

    // Gold / Story
    case "story":
    case "gold":
      variantClass =
        "bg-white text-brand-navy border-t-4 border-primary border-x border-b border-neutral-200 shadow-md";
      break;

    // Modern Black
    case "modern":
      variantClass =
        "bg-neutral-900 text-white border border-neutral-700 shadow-lg";
      break;

    // Default
    default:
      variantClass =
        "bg-white text-slate-800 border border-neutral-200 shadow-md";
  }

  return (
    <div className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </div>
  );
};
