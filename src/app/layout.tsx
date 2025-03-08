import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jinn ROI Calculator",
  description: "Calculate how Jinn can boost your revenue!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
