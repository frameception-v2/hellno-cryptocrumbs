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
          background: '#1A1A1A',
        }}
      >
        <div tw="text-8xl font-bold mb-4">{PROJECT_TITLE}</div>
        <div tw="text-3xl text-gray-300">{PROJECT_DESCRIPTION}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
