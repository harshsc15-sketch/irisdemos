
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRIS Living Spaces | Private Real Estate Advisory",
  description:
    "A considered approach to real estate across India, Dubai, London and Scotland. Property. Place. Perspective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
