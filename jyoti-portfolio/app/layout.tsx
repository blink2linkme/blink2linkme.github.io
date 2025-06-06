import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jyoti K C",
  description: "Experienced full stack developer with over a decade of expertise in .NET, AWS, Azure, and Agile methodologies, specializing in designing scalable solutions and leading development teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-NKG0QRC741" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
