import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduFlow - Modern School Platform",
  description: "AI-powered learning management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}><AuthProvider>
          {children}
        </AuthProvider></body>
    </html>
  );
}