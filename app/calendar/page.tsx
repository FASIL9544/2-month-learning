
"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { preconnect } from "react-dom";
import FooterContact from "../footer-contact";

export default function CalendarPage() {
  preconnect("https://crm.mehtainsights.com");

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-inner">
          <Link
            href="/#program"
            className="brand"
            aria-label="Mehta Insights Home"
          >
            <Image
              src="/mehta-insights-logo.png"
              alt="Mehta Insights"
              width={220}
              height={70}
              priority
              className="calendar-brand-logo"
            />
          </Link>

          <Link href="/#program" className="btn nav-cta">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Booking Page */}
      <main className="booking-page calendar-page">
        <div className="container booking-layout">
          {/* Left: Introduction */}
          <section className="booking-intro">
            <div className="section-label">PERSONAL PROGRAM GUIDANCE</div>

            <h1>Book a Consultation</h1>

            <p>
              A one-to-one conversation to explore your goals, understand
              the program, and decide whether it is right for you.
            </p>

            <div className="booking-steps" aria-label="What to expect">
              <div className="booking-step">
                <span className="booking-step-number">01</span>
                <span className="booking-step-copy">
                  <strong>Choose a time</strong>
                  <span>Pick a date that suits you.</span>
                </span>
              </div>

              <div className="booking-step">
                <span className="booking-step-number">02</span>
                <span className="booking-step-copy">
                  <strong>Share your goals</strong>
                  <span>Tell us what you want to learn.</span>
                </span>
              </div>

              <div className="booking-step">
                <span className="booking-step-number">03</span>
                <span className="booking-step-copy">
                  <strong>Get clear guidance</strong>
                  <span>Explore the program with a mentor.</span>
                </span>
              </div>
            </div>

            <p className="booking-assurance">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="m4.5 10.2 3.4 3.4 7.6-7.2" />
                <circle cx="10" cy="10" r="8" />
              </svg>
              No pressure — just a focused conversation about your next step.
            </p>
          </section>

          {/* Right: Booking Calendar */}
          <section className="booking-card ghl-booking-card">
            <div className="section-label">YOUR NEXT STEP</div>

            <h2>Choose a time that works for you</h2>

            <p className="booking-note">
              Select an available date and time from the calendar.
            </p>

            <div className="booking-iframe-wrapper">
              <div className="booking-loading" role="status">
                <span className="booking-loading-spinner" aria-hidden="true" />
                <span>Loading available dates and times…</span>
              </div>
              <iframe
                src="https://crm.mehtainsights.com/widget/booking/n6bLYfrWGOmBZVLYHGKv"
                title="Mehta Insights Consultation Booking"
                className="booking-iframe"
                loading="eager"
                scrolling="no"
                allow="payment"
                suppressHydrationWarning
              />
            </div>
            <p className="booking-external-link">
              Calendar taking too long to load?{" "}
              <a
                href="https://crm.mehtainsights.com/widget/booking/n6bLYfrWGOmBZVLYHGKv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open the scheduler in a new tab
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer calendar-footer">
        <div className="container footer-inner">
          <Link
            href="/#program"
            className="footer-logo-link"
            aria-label="Mehta Insights home"
          >
            <Image
              src="/mehta-insights-logo.png"
              alt="Mehta Insights"
              width={220}
              height={70}
              className="footer-logo"
            />
          </Link>
          <p className="footer-tagline">
            Learn. Analyse. Trade with discipline.
          </p>
          <FooterContact />
          <div className="footer-bottom">
            <span>© 2026 Mehta Insights. All rights reserved.</span>

            <Link href="/#program">Return to Home</Link>
          </div>
        </div>
      </footer>

      {/* GoHighLevel Booking Embed Script */}
      <Script
        src="https://crm.mehtainsights.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
