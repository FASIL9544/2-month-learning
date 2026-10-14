
"use client";

import Image from "next/image";
import Link from "next/link";

export default function CalendarPage() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-inner">
          <Link
            href="/"
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

          <Link href="/" className="btn btn-green">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Booking Page */}
      <main className="booking-page">
        <div className="container booking-layout">
          {/* Left: Introduction */}
          <section className="booking-intro">
            <div className="section-label">MEHTA INSIGHTS</div>

            <h1>Book a Zoom Consultation</h1>

            <p>
              Take the first step towards structured learning.
              Schedule a consultation to discuss the 3-Month Live
              Mentored Program, curriculum, and your learning goals.
            </p>

            <div className="booking-info">
              <div className="booking-info-icon">◷</div>

              <div>
                <strong>Personal Consultation</strong>
                <p>
                  Discuss your goals and learning requirements.
                </p>
              </div>
            </div>

            <div className="booking-info">
              <div className="booking-info-icon">▣</div>

              <div>
                <strong>Choose Your Preferred Time</strong>
                <p>
                  View the available dates and times in our calendar.
                </p>
              </div>
            </div>

            <div className="booking-info">
              <div className="booking-info-icon">✓</div>

              <div>
                <strong>Program Guidance</strong>
                <p>
                  Learn about the curriculum and program structure.
                </p>
              </div>
            </div>
          </section>

          {/* Right: Booking Calendar */}
          <section className="booking-card ghl-booking-card">
            <div className="section-label">SCHEDULE A CALL</div>

            <h2>Select a Date &amp; Time</h2>

            <p className="booking-note">
              Choose an available appointment in the booking
              calendar below.
            </p>

            <div className="booking-iframe-wrapper">
              <iframe
                src="https://crm.mehtainsights.com/widget/booking/n6bLYfrWGOmBZVLYHGKv"
                title="Mehta Insights Consultation Booking"
                className="booking-iframe"
                loading="lazy"
                scrolling="no"
                allow="payment"
              />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-bottom">
          <span>© 2026 Mehta Insights. All rights reserved.</span>

          <Link href="/">Return to Home</Link>
        </div>
      </footer>

      {/* GoHighLevel Booking Embed Script */}
      <script
        src="https://crm.mehtainsights.com/js/form_embed.js"
        async
      />
    </>
  );
}
