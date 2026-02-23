import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jathin Jagannath — AI Systems Engineer & Developer Advocate",
  description: "AI Systems Engineer & Developer Advocate with ~5 years building production AI agents, verifiable ML pipelines, and developer ecosystems at the intersection of Gen AI · Web3 · Edge ML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
