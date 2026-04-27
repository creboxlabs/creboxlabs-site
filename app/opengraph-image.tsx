import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Crebox Labs — Digital Studio for Emerging Markets";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAFAFA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 96,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: "#6E3AFF",
              borderRadius: 18,
            }}
          />
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: "#0A0A0A",
              letterSpacing: -1,
            }}
          >
            Crebox Labs
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              color: "#0A0A0A",
              letterSpacing: -2.5,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Digital products for emerging markets.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#6B6B6B",
              marginTop: 8,
            }}
          >
            A digital studio · creboxlabs.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
