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
  // Shared styling for all cards.
  // Lift/shadow only apply on hover-capable devices (md:hover:) so tapping on
  // mobile doesn't leave the card stuck in a "hovered" state; active: gives
  // mobile a quick tap-press feel instead.
  const baseClass =
    "rounded-xl overflow-hidden transition-all duration-300 ease-out active:scale-[0.98] md:hover:-translate-y-1 md:hover:shadow-xl";

  let variantClass = "";

  switch (variant) {
    // Ink — dark card matching the site's main background
    case "blue":
    case "navy":
      variantClass =
        "bg-[#20241F] text-[#F7F2E7] border border-[#3A423A] shadow-xl";
      break;

    // Gold-accented dark card
    case "story":
    case "gold":
      variantClass =
        "bg-[#23302A] text-[#F7F2E7] border-t-4 border-[#D9A441] border-x border-b border-[#3A423A] shadow-md";
      break;

    // Modern black
    case "modern":
      variantClass =
        "bg-neutral-900 text-white border border-neutral-700 shadow-lg";
      break;

    // Default — light "pop" card on the dark page (same pattern as the pricing cards)
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
