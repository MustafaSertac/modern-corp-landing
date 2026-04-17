import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

 const font= Inter({
  weight : ["100"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Corporate landing Page",
  description: "A corporate landing page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.className} bg-[#1f242c] h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
