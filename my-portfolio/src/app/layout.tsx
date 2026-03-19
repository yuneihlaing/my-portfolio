import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import Header from "@/components/layout/Header";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yun Ei Hlaing",
  description: "Projects, research, and contact.",
  openGraph: {
    title: "Yun Ei Hlaing",
    description: "Portfolio site. Projects, research, and contact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen relative antialiased bg-neutral-950 text-neutral-100`}
      >
        <ThemeProvider>
          <div className="fixed inset-0 -z-50 hidden dark:block">
            <Image
              src="/starry.jpeg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <Header />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}