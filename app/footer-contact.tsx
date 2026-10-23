
export default function FooterContact() {
  return (
    <section
      className="footer-contact"
      aria-label="Contact information"
    >
      <p className="footer-registration">
        SEBI Registered Research Analyst
        <br />
        Reg. No. INH000025577
      </p>

      <address>
        <strong>Address:</strong> Shop No S-11, Plot No 9, Sector No 17,
        Sanpada 400705, Mumbai, Maharashtra, 400705
      </address>

      <div className="footer-contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:ankit@mehtainsights.com">
            ankit@mehtainsights.com
          </a>
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+919619898777">9619898777</a>
        </p>
      </div>
    </section>
  );
}
