export const size = { width: 32, height: 32 };
export const contentType = "image/svg+xml";

export default function Icon() {
  const { width, height } = size;
  const padding = 4;
  const fontSize = 22;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="G">
      <rect width="${width}" height="${height}" rx="7" fill="#0f172a" />
      <text
        x="${width / 2}"
        y="${height / 2 + padding / 2}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Geist, ui-sans-serif, system-ui"
        font-size="${fontSize}"
        font-weight="700"
        fill="#f8fafc"
      >G</text>
    </svg>
  `.trim();

  return new Response(svg, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
