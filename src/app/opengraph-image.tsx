import { ImageResponse } from "next/og";
import { site } from "@/lib/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A1A2F",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(201,162,39,0.25), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#C9A227",
            }}
          />
          <span
            style={{
              color: "#C9A227",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {`${site.shortName} Advisory`}
          </span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 64,
            fontWeight: 600,
            color: "#FAF8F4",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {`${site.tagline} for ambitious businesses.`}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            color: "rgba(250,248,244,0.65)",
          }}
        >
          Executive Search · Back-Office · CFO Advisory
        </div>
      </div>
    ),
    { ...size },
  );
}
