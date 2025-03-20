import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col items-center justify-center bg-black text-white"
        style={{
          fontFamily: 'sans-serif',
          background: 'radial-gradient(circle at 50% 100%, #0A0A0A 0%, #000 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div tw="text-8xl font-bold mb-4 bg-clip-text text-transparent" style={{ 
          backgroundImage: BRAND_COLORS.gradient,
          textShadow: `0 0 40px ${BRAND_COLORS.primary}`
        }}>{PROJECT_TITLE}</div>
        <div tw="text-3xl" style={{ 
          color: BRAND_COLORS.secondary,
          textShadow: `0 0 20px ${BRAND_COLORS.secondary}`
        }}>{PROJECT_DESCRIPTION}</div>
        
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
