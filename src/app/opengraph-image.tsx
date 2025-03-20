import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const contentType = "image/png";

// Create options object with default system fonts
const imageOptions = {
  width: 1200,
  height: 800,
  fonts: [
    {
      name: 'Inter',
      data: await fetch(
        new URL('https://fonts.gstatic.com/s/inter/v13/7cHrv4kjgoGqM7E3m-ks6FIPqL8.woff2')
      ).then((res) => res.arrayBuffer()),
      weight: 400 as const,
      style: 'normal' as const,
    },
  ],
};

export default async function Image() {

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
        style={{ 
          background: 'linear-gradient(325deg, #FF69B4, #EC4899 25%, #D946EF 50%, #8B5CF6 75%, #7C3AED)',
          color: 'white'
        }}
      >
        <h1 tw="text-9xl text-center font-semibold">{PROJECT_TITLE}</h1>
        <h3 tw="text-4xl font-normal">{PROJECT_DESCRIPTION}</h3>
      </div>
    ),
    imageOptions
  );
}
