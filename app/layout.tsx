import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kaitlynstennett.github.io"),
  title: "Kaitlyn Stennett | Medical Student",
  description:
    "Kaitlyn Stennett is a medical student at the University of St Andrews, interested in thoughtful science, compassionate care, and community.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Kaitlyn Stennett | Medical Student",
    description:
      "Medical student at the University of St Andrews, learning at the intersection of thoughtful science, compassionate care, and human connection.",
    url: "https://kaitlynstennett.github.io",
    siteName: "Kaitlyn Stennett",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kaitlyn Stennett — Medical Student at the University of St Andrews" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaitlyn Stennett | Medical Student",
    description: "Medicine, curiosity, and community at the University of St Andrews.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
