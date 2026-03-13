import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mumtaz Dental Care | Modern Dentistry With Gentle Care",
  description: "Expert dental services in Karachi by Dr. Ahsan Mumtaz. Root Canal, Scaling, Crowns, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
