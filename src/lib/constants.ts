export const PROJECT_ID = 'hellno';
export const PROJECT_TITLE = "HELLNO! 🙅♂️💥🙅♀️";
export const BRAND_COLORS = {
  primary: "#FF1F71",
  secondary: "#40F8FF",
  accent: "#FFD700",
  background: "#0A0A0A",
  gradient: "linear-gradient(135deg, #FF1F71 0%, #40F8FF 50%, #FFD700 100%)"
};

export const ANIMATIONS = {
  drip: "drip 0.6s ease-out",
  float: "float 12s ease-in-out infinite",
  glow: "glow 2s ease-in-out infinite",
  scanline: "scanline 8s linear infinite"
};

export const KEYFRAMES = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes glow {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.4; box-shadow: inset 0 0 80px ${BRAND_COLORS.accent}80; }
    50% { opacity: 0.8; box-shadow: inset 0 0 120px ${BRAND_COLORS.accent}; }
  }
  @keyframes scanline {
    0% { background-position: 0 0; }
    100% { background-position: 0 100vh; }
  }
`;
export const PROJECT_DESCRIPTION = "The most emphatic rejection framework in the metaverse!";
