import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  // Existing variants preserved for compatibility; "mint", "sky", "white" and "yellow" are new.
  variant?:
    | "blue"
    | "story"
    | "modern"
    | "default"
    | "navy"
    | "gold"
    | "mint"
    | "sky"
    | "white"
    | "yellow";
  /**
   * Opt-in: the card fills gold while touched / hovered and switches its text to dark navy.
   * Leave it off if the children set their own text colours.
   */
  goldOnTouch?: boolean;
}

// Palette shared with Home.tsx:
//   green #4CA771, yellow #F9CE69, light blue #D9EFF7, mint #C0E6BA, navy #123B63, ink #14213D
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  variant = "default",
  goldOnTouch = false,
}) => {
  // Shared styling for all cards.
  // Lift/shadow only apply on hover-capable devices (md:hover:) so tapping on
  // mobile doesn't leave the card stuck in a "hovered" state; active: gives
  // mobile a quick tap-press feel instead.
  const baseClass =
    "rounded-2xl overflow-hidden transition-all duration-300 ease-out active:scale-[0.98] md:hover:-translate-y-1 md:hover:shadow-xl";

  let variantClass = "";

  switch (variant) {
    // Navy: white text on the brand navy
    case "blue":
    case "navy":
      variantClass = "bg-[#123B63] text-white border border-white/15 shadow-xl";
      break;

    // Yellow: dark text on the card yellow
    case "story":
    case "gold":
    case "yellow":
      variantClass = "bg-[#F9CE69] text-[#14213D] border border-[#F2B84B] shadow-md";
      break;

    // Mint
    case "modern":
    case "mint":
      variantClass = "bg-[#C0E6BA] text-[#14213D] border border-white/40 shadow-md";
      break;

    // Light blue
    case "sky":
      variantClass = "bg-[#D9EFF7] text-[#14213D] border border-white/40 shadow-md";
      break;

    // White
    case "white":
      variantClass = "bg-white text-[#14213D] border border-neutral-200 shadow-md";
      break;

    // Default: white "pop" card on the green page (same as the pricing cards)
    default:
      variantClass = "bg-white text-[#14213D] border border-neutral-200 shadow-md";
  }

  const touchClass = goldOnTouch
    ? "md:hover:bg-[#F9CE69] active:bg-[#F9CE69] md:hover:text-[#14213D] active:text-[#14213D]"
    : "";

  return <div className={`${baseClass} ${variantClass} ${touchClass} ${className}`}>{children}</div>;
};
