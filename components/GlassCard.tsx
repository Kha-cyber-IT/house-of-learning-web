import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  // Note: I added 'navy' and 'gold' for future use, but kept 'blue' and 'story' so your existing code doesn't break!
  variant?: 'blue' | 'story' | 'modern' | 'default' | 'navy' | 'gold';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  let variantClass = "";
  
  // 1. Navy Variant (Replaces the old 'blue' and 'lime' glass)
  if (variant === 'blue' || variant === 'navy') {
      variantClass = "bg-brand-navy text-white border border-brand-navy/80 shadow-lg";
  } 
  // 2. Gold/Story Variant (Clean white card with the rich Gold top border)
  else if (variant === 'story' || variant === 'gold') {
      variantClass = "bg-white text-brand-navy border-t-4 border-primary shadow-md hover:shadow-xl transition-all";
  } 
  // 3. Modern Variant (Strict Black & White style, matches the new footer/nav)
  else if (variant === 'modern') {
      variantClass = "bg-black text-white border border-neutral-800 shadow-md";
  } 
  // 4. Default Fallback (Clean, crisp white card)
  else {
      variantClass = "bg-white text-slate-800 border border-slate-100 shadow-sm";
  }

  return (
    // Changed to rounded-xl to match the tighter, less bulky mobile design
    <div className={`rounded-xl overflow-hidden ${variantClass} ${className}`}>
      {children}
    </div>
  );
};
