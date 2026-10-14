
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#071323",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <img
          src="/mehta-insights-logo.png"
          alt="Mehta Insights"
          style={{
            width: "220px",
            maxWidth: "100%",
            marginBottom: "35px",
          }}
        />

        <div style={{ fontSize: "54px", color: "#D7B04B" }}>
          ✓
        </div>

        <h1 style={{ color: "#D7B04B", fontSize: "48px" }}>
          Thank You!
        </h1>

        <h2>Your request has been received.</h2>

        <p style={{ lineHeight: 1.8, color: "#D4DCE6" }}>
          Thank you for your interest in the Mehta Insights
          3-month live mentored stock market program.
          Our team will follow up with you regarding your
          consultation and program details.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            marginTop: "24px",
            padding: "15px 25px",
            background: "#D7B04B",
            color: "#071323",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Back to Homepage →
        </Link>
      </div>
    </main>
  );
}
