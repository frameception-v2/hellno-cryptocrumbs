import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION, BRAND_COLORS } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        tw="h-full w-full bg-black text-white"
        style={{
          fontFamily: 'sans-serif',
          background: `radial-gradient(circle at 50% 100%, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.background} 100%)`,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Cute Floating Title */}
        <div style={{
          transform: 'rotate(-2deg)',
          filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.5))',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div tw="text-8xl font-bold mr-4" style={{ 
            color: 'transparent',
            backgroundImage: BRAND_COLORS.gradient,
            backgroundClip: 'text',
            textShadow: `
              0 0 40px ${BRAND_COLORS.primary},
              0 0 80px ${BRAND_COLORS.secondary},
              0 0 100px ${BRAND_COLORS.accent}
            `,
            position: 'relative',
            top: '-10px'
          }}>
          <div style={{
            position: 'absolute',
            width: '150%',
            height: '150%',
            background: BRAND_COLORS.gradient,
            mixBlendMode: 'hard-light',
            opacity: 0.3,
            filter: 'blur(60px)'
          }}></div>
          🔥🚫 {PROJECT_TITLE} 🚫🔥
          </div>
        </div>
        {/* Cyberpunk Description */}
        <div style={{
          transform: 'rotate(3deg) skewX(-5deg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '2rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div tw="text-4xl font-bold mb-4" style={{ 
            color: BRAND_COLORS.secondary,
            background: `linear-gradient(45deg, ${BRAND_COLORS.primary}, ${BRAND_COLORS.accent})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            textShadow: `0 0 30px ${BRAND_COLORS.primary}80`,
            padding: '8px 20px',
            borderRadius: '999px',
            border: `3px solid ${BRAND_COLORS.accent}`
          }}>🚫 No Way! 💥</div>
          <div style={{
            color: BRAND_COLORS.primary,
            textShadow: `0 0 20px ${BRAND_COLORS.secondary}`,
            fontSize: '2.5rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 2rem',
            border: `3px solid ${BRAND_COLORS.accent}`,
            background: 'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(20,20,20,0.8) 100%)',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(45deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.secondary} 100%)`,
              opacity: 0.2,
              mixBlendMode: 'overlay'
            }}></div>
            ⚡🛑 {PROJECT_DESCRIPTION} 🛑⚡
          </div>
        </div>
        
        {/* Dynamic Floating Elements */}
        <div style={{ 
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {[...Array(120)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              background: `radial-gradient(circle, ${BRAND_COLORS.secondary} 0%, ${BRAND_COLORS.primary} 100%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              borderRadius: Math.random() > 0.5 ? '50%' : '30%',
              transform: `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 360}deg)`,
              animation: `float ${Math.random() * 10 + 5}s infinite ${Math.random() * 2}s`,
              filter: `blur(${Math.random() * 4}px)`
            }} />
          ))}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to bottom, transparent 0%, ${BRAND_COLORS.background}80 100%)`,
            mixBlendMode: 'overlay'
          }} />
          {/* Animated Glow Border */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '40px',
            boxShadow: `inset 0 0 80px ${BRAND_COLORS.accent}80`,
            animation: 'pulse-glow 6s ease-in-out infinite'
          }} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
