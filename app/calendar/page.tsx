"use client";

import Link from "next/link";

export default function CalendarPage() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">M</span>
            <span className="brand-copy">
              <strong>MEHTA INSIGHTS</strong>
              <small>LEARN. ANALYSE. TRADE.</small>
            </span>
          </Link>

          <Link href="/" className="btn btn-green">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="booking-page">
        <div className="container booking-layout">
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
                <p>Discuss your goals and learning requirements.</p>
              </div>
            </div>

            <div className="booking-info">
              <div className="booking-info-icon">▣</div>
              <div>
                <strong>Choose Your Preferred Time</strong>
                <p>View the available dates and times in our calendar.</p>
              </div>
            </div>

            <div className="booking-info">
              <div className="booking-info-icon">✓</div>
              <div>
                <strong>Program Guidance</strong>
                <p>Learn about the curriculum and program structure.</p>
              </div>
            </div>
          </section>

          <section className="booking-card ghl-booking-card">
            <div className="section-label">SCHEDULE A CALL</div>

            <h2>Select a Date &amp; Time</h2>

            <p className="booking-note">
              Choose an available appointment in the booking calendar below.
            </p>

            <iframe
              src="https://crm.mehtainsights.com/widget/booking/n6bLYfrWGOmBZVLYHGKv"
              title="Mehta Insights Consultation Booking"
              style={{
                width: "100%",
                minHeight: "750px",
                border: "none",
                overflow: "hidden",
              }}
              scrolling="no"
              allow="payment"
            />

            <script
              src="https://crm.mehtainsights.com/js/form_embed.js"
              async
            />
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom">
         <span>© 2026 Mehta Insights</span>
          <Link href="/">Return to Home</Link>
        </div>
      </footer>
    </>
  );
}