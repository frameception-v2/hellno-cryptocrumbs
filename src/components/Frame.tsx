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
        borderColor: `${BRAND_COLORS.primary}80`,
        background: `
          linear-gradient(160deg, 
            ${BRAND_COLORS.primary}15 0%, 
            ${BRAND_COLORS.secondary}15 50%, 
            ${BRAND_COLORS.accent}15 100%),
          radial-gradient(circle at 50% 0%,
            ${BRAND_COLORS.primary}30 0%,
            transparent 70%
          )
        `,
        boxShadow: `
          0 0 60px ${BRAND_COLORS.accent}80,
          inset 0 0 20px ${BRAND_COLORS.primary}30
        `,
        clipPath: 'polygon(3% 0, 97% 0, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0 97%, 0 3%)',
        backdropFilter: 'blur(8px) saturate(180%)',
        transform: 'perspective(1000px) rotateX(5deg) rotateY(-2deg)',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        className="p-4 font-semibold text-white relative overflow-hidden"
        style={{ 
          backgroundColor: `${BRAND_COLORS.background}cc`,
          backdropFilter: 'blur(12px)',
          borderBottom: `2px solid ${BRAND_COLORS.accent}50`,
          boxShadow: `0 0 40px ${BRAND_COLORS.primary}30`
        }}
      >
        <div className="absolute inset-0 opacity-20" style={{
          background: `linear-gradient(45deg, 
            ${BRAND_COLORS.primary} 0%,
            transparent 50%,
            ${BRAND_COLORS.secondary} 100%)`,
          mixBlendMode: 'overlay',
          animation: 'scanline 8s linear infinite'
        }}></div>
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
