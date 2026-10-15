import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Book a Consultation | Mehta Insights",
  description:
    "Schedule a personal consultation to discuss the Mehta Insights live mentored stock market program.",
};

export default function CalendarLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}