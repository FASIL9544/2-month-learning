import Image from "next/image";
import Link from "next/link";
import FooterContact from "./footer-contact";

export default function SiteFooter() {
  return (
    <>
    <footer className="site-footer">
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

        <div className="footer-disclaimer">
          <h3>Disclaimer</h3>
          <p>
            Investments in securities market are subject to market risks.
            Read all the related documents carefully before investing.
            The educational content on this website is for informational
            and educational purposes only and should not be considered
            investment advice or a recommendation to buy or sell any
            security. Trading involves risk, and past performance does
            not guarantee future results.
          </p>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 Mehta Insights. All rights reserved.</span>

          <Link href="/calendar" className="footer-cta">
            Book a Consultation &rarr;
          </Link>

          <Link href="/#program">
            Return to Home
          </Link>
        </div>
      </div>
    </footer>

    </>
  );
}




