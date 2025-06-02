import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const monaSans = Poppins({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Verba",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${monaSans.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
