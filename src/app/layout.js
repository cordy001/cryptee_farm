import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Creeptee Farm",
  description: "A Next.js app with Phaser 3 integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="game-container">
          {children}
        </div>
        
      </body>
    </html>
  );
}
