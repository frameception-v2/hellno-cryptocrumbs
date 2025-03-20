import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION, BRAND_COLORS } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col items-center justify-center bg-black text-white"
        style={{
          fontFamily: 'sans-serif',
          background: `radial-gradient(circle at 50% 100%, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.background} 100%)`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* 3D Text with Holographic Effect */}
        <div tw="text-8xl font-bold mb-4" style={{ 
          transform: 'rotate3d(1, 2, 1, 15deg)',
          color: 'transparent',
          backgroundImage: BRAND_COLORS.gradient,
          backgroundClip: 'text',
          textShadow: `
            0 0 40px ${BRAND_COLORS.primary},
            0 0 80px ${BRAND_COLORS.secondary},
            0 0 100px ${BRAND_COLORS.accent}
          `,
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))',
          animation: 'pulse 3s ease-in-out infinite'
        }}>{PROJECT_TITLE}</div>
        {/* Cyberpunk-style Description with Motion Trail */}
        <div tw="text-4xl font-bold relative" style={{ 
          color: BRAND_COLORS.accent,
          textShadow: `
            0 0 30px ${BRAND_COLORS.accent},
            0 0 60px ${BRAND_COLORS.accent},
            0 0 90px ${BRAND_COLORS.accent}
          `,
          transform: 'skew(-15deg) rotate(-2deg)',
          filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.8))',
          animation: 'scanline 4s linear infinite'
        }}>
          <div tw="absolute inset-0 bg-current mix-blend-overlay opacity-20" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 70%)',
            animation: 'glitch 2s infinite linear'
          }}></div>
          {PROJECT_DESCRIPTION}
        </div>
        
        {/* Animated background elements */}
        <div tw="absolute inset-0 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <div key={i} tw="absolute w-2 h-2 rounded-full" style={{
              background: BRAND_COLORS.gradient,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + i % 3}s infinite`,
              opacity: 0.3
            }} />
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
