import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARC/ONE — Landing Page",
  description: "ARC ONE is a precision spatial-audio headset engineered to turn any desk, flight, or late-night session into your private listening room.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
