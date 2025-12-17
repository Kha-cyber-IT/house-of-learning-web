import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'blue' | 'story' | 'modern' | 'default';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  let variantClass = "bg-card text-card-foreground border-border";
  
  // Mapping variants to new design system classes
  if (variant === 'blue') variantClass = "glass-card-blue text-white";
  if (variant === 'story') variantClass = "glass-card-story text-white";
  if (variant === 'modern') variantClass = "bg-neutral-900/80 border border-white/10 backdrop-blur-xl text-white";
  
  // Default fallback if just using standard card
  if (variant === 'default') variantClass = "bg-card/50 backdrop-blur-md border border-border/50";

  return (
    <div className={`rounded-2xl shadow-sm ${variantClass} ${className}`}>
      {children}
    </div>
  );
};