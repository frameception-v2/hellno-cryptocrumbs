import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = PROJECT_TITLE;
export const contentType = "image/png";

// Create options object with default system fonts
const imageOptions = {
  width: 1200,
  height: 800,
};

export default async function Image() {
  const options = imageOptions;

  const BACKGROUND_GRADIENT_STYLE = {
    backgroundImage: `
      linear-gradient(
        325deg,
        #FF69B4 0%,
        #EC4899 25%,
        #D946EF 50%,
        #8B5CF6 75%,
        #7C3AED 100%
      )
    `,
    backgroundSize: '200% 200%',
    animation: 'gradient 10s ease infinite',
    color: "white",
  };


  /*
this Image is rendered using vercel/satori.

Satori supports a limited subset of HTML and CSS features, due to its special use cases. In general, only these static and visible elements and properties that are implemented.
For example, the <input> HTML element, the cursor CSS property are not in consideration. And you can't use <style> tags or external resources via <link> or <script>.
Also, Satori does not guarantee that the SVG will 100% match the browser-rendered HTML output since Satori implements its own layout engine based on the SVG 1.1 spec.
Please refer to Satori’s documentation for a list of supported HTML and CSS features. https://github.com/vercel/satori#css
*/
  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col justify-center items-center relative"
        style={BACKGROUND_GRADIENT_STYLE}
      >
        <h1 tw="text-9xl text-center font-semibold">HELLNO! 🙅♂️💥</h1>
        <h3 tw="text-4xl font-normal">The world's most satisfying rejection</h3>
      </div>
    ),
    options
  );
}
