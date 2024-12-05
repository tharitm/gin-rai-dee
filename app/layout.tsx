import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const font = IBM_Plex_Sans_Thai({ subsets: ["thai"], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Gin Rai Dee ?",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <div className="relative w-screen min-h-[100dvh] flex flex-col flex-shrink-0">
          {children}
        </div>
        <div className="fixed bottom-0 left-0 w-full text-white py-4 text-center text-sm font-sans">
          <a href="https://github.com/tharitm" className="hover:underline">
            Fun for everyone, created with love by Georgie 🎮
          </a>
        </div>
      </body>
    </html>
  );
}
