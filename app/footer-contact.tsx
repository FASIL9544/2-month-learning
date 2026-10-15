export default function FooterContact() {
  return (
    <section className="footer-contact" aria-label="Contact information">
      <p className="footer-registration">
        SEBI Registered Research Analyst
        <br />
        Reg. No. INH000025577
      </p>

      <address>
        <strong>Address:</strong> Shop No S-11, Plot No 9, Sector No 17,
        Sanpada 400705, Mumbai, Maharashtra, 400705
      </address>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:ankit@mehtainsights.com">ankit@mehtainsights.com</a>
      </p>

      <p>
        <strong>Phone:</strong> <a href="tel:+919619898777">9619898777</a>
      </p>

      <nav className="footer-social" aria-label="Social media">
        <a
          href="https://www.facebook.com/profile.php?id=61592554326854"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mehta Insights on Facebook"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="currentColor" />
            <path
              d="M13.4 20v-7h2.35l.35-2.73H13.4V8.53c0-.79.22-1.33 1.36-1.33h1.45V4.76c-.25-.03-1.1-.11-2.1-.11-2.08 0-3.5 1.27-3.5 3.6v2.02H8.26V13h2.35v7h2.79Z"
              fill="#071b2e"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/mehtainsights?psln=MTE2eXcyMTJoODVzbw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mehta Insights on Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </nav>
    </section>
  );
}
