import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://curioventure.xyz"),
  title: {
    default: "Curioventure | Web Engineer Portfolio",
    template: "%s | Curioventure",
  },
  description:
    "Web Engineer portfolio focused on React, Next.js, TypeScript, Vue/Nuxt, Astro, web performance, SEO, SSR/SSG, and production UI development.",
  authors: [{ name: "Chandra Shekhar" }],
  creator: "Chandra Shekhar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
