
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="thankyou-page">
      <div className="thankyou-card">
        <Link
          href="/"
          className="thankyou-logo"
          aria-label="Mehta Insights homepage"
        >
          <img
            src="/mehta-insights-logo.png"
            alt="Mehta Insights"
          />
        </Link>

        <div className="thankyou-divider" />

        <h1>Thank You!</h1>

        <p className="thankyou-description">
          Thank you for your interest in Mehta Insights.
          We appreciate your time and look forward to
          connecting with you.
        </p>

        <Link href="/" className="thankyou-button">
          Return to Homepage →
        </Link>

        <p className="thankyou-footer">
          LEARN. ANALYSE. TRADE WITH DISCIPLINE.
        </p>
      </div>
    </main>
  );
}
