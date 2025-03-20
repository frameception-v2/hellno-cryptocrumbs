import React from "react";
import { BRAND_COLORS, PROJECT_TITLE } from "~/lib/constants";

interface FrameProps {
  children: React.ReactNode;
  title?: string;
}

export function Frame({ children, title = PROJECT_TITLE }: FrameProps) {
  return (
    <div 
      className="relative rounded-xl overflow-visible border-2 animate-pulse"
      style={{ 
        borderColor: BRAND_COLORS.primary,
        background: `linear-gradient(160deg, ${BRAND_COLORS.background} 30%, #1A0F24 100%)`,
        boxShadow: `0 0 40px ${BRAND_COLORS.accent}40`
      }}
    >
      <div 
        className="p-4 font-semibold text-white"
        style={{ backgroundColor: BRAND_COLORS.background }}
      >
        <h2 className="text-xl bg-clip-text text-transparent" style={{ 
          backgroundImage: BRAND_COLORS.gradient,
          textShadow: `0 0 20px ${BRAND_COLORS.primary}`
        }}>{title}</h2>
      </div>
      <div className="p-6">
        {children}
      </div>
      <div 
        className="absolute top-2 right-2 flex space-x-1 hover:space-x-2 transition-all duration-300 cursor-pointer"
        style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' }}
      >
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BRAND_COLORS.accent }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BRAND_COLORS.primary }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BRAND_COLORS.secondary }}></div>
      </div>
    </div>
  );
}
