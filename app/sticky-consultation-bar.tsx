"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyConsultationBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 80);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [pathname]);

  if (!isVisible || pathname.startsWith("/calendar") || pathname.startsWith("/thankyou")) {
    return null;
  }

  return (
    <aside className="sticky-consultation" aria-label="Book a consultation">
      <div className="sticky-consultation-inner">
        <span className="sticky-consultation-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 19V12m5 7V7m5 12v-5m5 5V4" />
          </svg>
        </span>
        <div className="sticky-consultation-copy">
          <h2>Take the First Step Towards Your Second Income</h2>
          <p>Book a consultation to discuss the program and your learning goals.</p>
        </div>
        <Link href="/calendar" className="sticky-consultation-button">
          Book a Consultation &rarr;
        </Link>
      </div>
    </aside>
  );
}
