import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollReveal from "./scroll-reveal";
import StickyConsultationBar from "./sticky-consultation-bar";
import "./site.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehta Insights | 8-Week Live Stock Market Program",
  description:
    "Build practical stock market, technical analysis, swing trading, and risk management skills in Mehta Insights' 8-week live group program.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollReveal />
        {children}
        <StickyConsultationBar />
      </body>
    </html>
  );
}
<nav className="flex gap-6">
  <a href="/" className="hover:underline">Home</a>
  <a href="/calendar" className="hover:underline">Calendar</a>
  <a href="/thankyou" className="hover:underline">Thank You</a>
</nav>

