import React from "react";
import { BRAND_COLORS, PROJECT_TITLE } from "~/lib/constants";

interface FrameProps {
  children: React.ReactNode;
  title?: string;
}

export default function Frame({ children, title = PROJECT_TITLE }: FrameProps) {
  return (
    <div 
      className="relative rounded-xl overflow-hidden border-2"
      style={{ borderColor: BRAND_COLORS.primary }}
    >
      <div 
        className="p-4 font-semibold text-white"
        style={{ backgroundColor: BRAND_COLORS.background }}
      >
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className="p-6">
        {children}
      </div>
      <div 
        className="absolute top-2 right-2 flex space-x-1"
      >
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BRAND_COLORS.accent }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BRAND_COLORS.primary }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BRAND_COLORS.secondary }}></div>
      </div>
    </div>
  );
}
