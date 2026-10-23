"use client";

import Image from "next/image";
import { useState } from "react";
import SiteFooter from "./site-footer";



const audience = [
  {
    icon: "growth",
    text: "Want to create a second source of income through trading.",
  },
  {
    icon: "work",
    text: "Are working professionals or business owners with limited time.",
  },
  {
    icon: "learn",
    text: "Want a practical, step-by-step approach to learn swing trading.",
  },
  {
    icon: "guidance",
    text: "Are serious about building a long-term market skill with proper guidance.",
  },
];

const learningAreas = [
  {
    icon: "market",
    title: "Stock Market Basics",
    text: "Understand how the market works, key concepts, participants, and how to select stocks.",
  },
  {
    icon: "analysis",
    title: "Technical Analysis",
    text: "Learn price action, chart patterns, indicators, and how to analyse stocks from basic to advanced levels.",
  },
  {
    icon: "strategy",
    title: "Swing Trading Strategies",
    text: "Learn structured, rule-based strategies for identifying swing trading opportunities.",
  },
  {
    icon: "risk",
    title: "Risk Management",
    text: "Understand position sizing, stop loss, capital allocation, and disciplined risk management.",
  },
];

const curriculum = [

  {

    weeks: "Week 1",

    title: "Stock Market Foundation",

    points: [

      "How the market works",

      "Key market participants",

      "Order types and SEBI basics",

    ],

  },

  {

    weeks: "Weeks 2–3",

    title: "Technical Analysis for Trading",

    points: [

      "Trends and price action",

      "Candlestick patterns",

      "Key indicators (MA, RSI, ADX)",

      "Support and resistance",

    ],

  },

  {

    weeks: "Weeks 4–5",

    title: "Swing Trading Strategies",

    points: [

      "Trend following",

      "Breakout trading",

      "Pullback trading",

      "Sector rotation",

      "Multi-timeframe confirmation",

    ],

  },

  {

    weeks: "Week 6",

    title: "Stock Selection Process",

    points: [

      "Chart and basic fundamental filters",

      "Relative strength analysis",

      "Creating a swing trading watchlist",

    ],

  },

  {

    weeks: "Weeks 7–8",

    title: "Risk Management & Trading Plan",

    points: [

      "Position sizing",

      "Stop-loss and target setting",

      "Trade management",

      "Trading psychology",

      "Building your own trading plan",

    ],

  },

];

const outcomes = [
  {
    icon: "strategy",
    title: "Apply structured swing strategies",
    text: "Use structured setups to evaluate swing trading opportunities.",
  },
  {
    icon: "charts",
    title: "Analyse charts and opportunities",
    text: "Read chart patterns and indicators to assess potential setups.",
  },
  {
    icon: "analysis",
    title: "Conduct disciplined market analysis",
    text: "Use a structured process to evaluate market conditions.",
  },
  {
    icon: "protect",
    title: "Manage risk and protect capital",
    text: "Apply position sizing and stop-loss principles to manage exposure.",
  },
  {
    icon: "plan",
    title: "Develop a personal trading plan",
    text: "Bring strategy, risk management, and trading habits into one process.",
  },
];

const testimonials = [

  {

    quote:

      "The concepts were explained in a very simple way with real market examples. The live sessions and assignments helped me apply what I learned.",

    name: "Rohan S.",

    role: "Working Professional",

  },

  {

    quote:

      "The structured approach and focus on risk management made a big difference to my trading journey.",

    name: "Priya M.",

    role: "Individual Trader",

  },

  {

    quote:

      "Ankit's teaching style is practical, clear and based on real market experience. Highly recommended!",

    name: "Karan T.",

    role: "Finance Professional",

  },

  {

    quote:

      "The program helped me understand market analysis and risk management in a more structured way.",

    name: "Amit R.",

    role: "Aspiring Trader",

  },

  {

  quote:

    "The practical examples helped me understand market concepts more clearly and systematically.",

  name: "Rahul K.",

  role: "Individual Investor",

},

{

  quote:

    "The structured sessions made technical analysis and risk management easier to understand.",

  name: "Neha S.",

  role: "Working Professional",

},

];

const faqs = [

  {

    question: "Do I need prior trading experience?",

    answer:

      "No prior experience is required. The curriculum starts with market fundamentals and builds toward more advanced trading concepts.",

  },

  {

    question: "What tools or software do I need?",

    answer:

      "A computer or smartphone and a reliable internet connection are sufficient to attend. The team can advise you on charting tools during your consultation.",

  },

  {

    question: "What is the duration and schedule?",

    answer:

      "The program runs for 8 weeks (2 months) and includes 16 live sessions, with two sessions each week. Contact the team for current batch timings.",

  },

  {

    question: "Is this a certification program?",

    answer:

      "Please contact the program team to confirm whether a certificate is offered and what completion requirements apply.",

  },

  {

    question: "Will I get recordings of the sessions?",

    answer:

      "Recording availability and access periods may vary by batch. Please confirm the current details with the program team before enrolling.",

  },

  {

    question: "What is the refund policy?",

    answer:

      "Refund and cancellation terms are provided by the program team. Please review the current policy before making a payment.",

  },

];

function SectionHeading({

  label,

  title,

  subtitle,

}: {

  label: string;

  title: string;

  subtitle?: string;

}) {

  return (

    <>

      <div className="section-label">{label}</div>

      <h2 className="section-title">{title}</h2>

      {subtitle && <p className="section-subtitle">{subtitle}</p>}


    </>

  );

}

function CurriculumIcon({ index }: { index: number }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    focusable: false,
  };

  switch (index) {
    case 0:
      return <svg {...common}><path d="M4 5.5c3-.7 5.7-.1 8 1.6v13c-2.3-1.7-5-2.3-8-1.6v-13Zm16 0c-3-.7-5.7-.1-8 1.6v13c2.3-1.7 5-2.3 8-1.6v-13Z" /></svg>;
    case 1:
      return <svg {...common}><path d="M4 19V5m0 14h17" /><path d="m6 15 4-4 3 2 6-7" /></svg>;
    case 2:
      return <svg {...common}><path d="M4 18h4l3-5 3 2 6-9" /><path d="M16 6h4v4" /></svg>;
    case 3:
      return <svg {...common}><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5M8 10.5h5" /></svg>;
    default:
      return <svg {...common}><path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
  }
}
function OutcomeIcon({ type }: { type: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    focusable: false,
  };

  switch (type) {
    case "strategy":
      return <svg {...common}><path d="M4 18h4l3-5 3 2 6-9" /><path d="M16 6h4v4" /></svg>;
    case "charts":
      return <svg {...common}><path d="M4 19V5m0 14h17" /><path d="m6 15 4-4 3 2 6-7" /></svg>;
    case "analysis":
      return <svg {...common}><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5M8 10.5h5M10.5 8v5" /></svg>;
    case "protect":
      return <svg {...common}><path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
    default:
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8M8 12h5M8 16h3m5-4v5m-2.5-2.5H19" /></svg>;
  }
}
function AudienceIcon({ type }: { type: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    focusable: false,
  };

  switch (type) {
    case "growth":
      return <svg {...common}><path d="M4 18h16M6 15l4-4 3 3 6-7" /><path d="M15 7h4v4" /></svg>;
    case "work":
      return <svg {...common}><rect x="3.5" y="7" width="17" height="13" rx="2" /><path d="M8 7V5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 5v2M3.5 12h17M10 12v2h4v-2" /></svg>;
    case "learn":
      return <svg {...common}><path d="M3.5 5.5c3.2-.8 6-.2 8.5 1.7v13c-2.5-1.9-5.3-2.5-8.5-1.7v-13Zm17 0c-3.2-.8-6-.2-8.5 1.7v13c2.5-1.9 5.3-2.5 8.5-1.7v-13Z" /></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="m14.8 9.2-1.7 4-3.9 1.6 1.6-3.9 4-1.7Z" /></svg>;
  }
}
function LearningIcon({ type }: { type: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    focusable: false,
  };

  switch (type) {
    case "market":
      return <svg {...common}><path d="M4 20V9l4-3 4 3v11M12 11l4-3 4 3v9M3 20h18" /><path d="M7 12h2m-2 3h2m7-1h2" /></svg>;
    case "analysis":
      return <svg {...common}><path d="M4 19V5m0 14h17" /><path d="m6 15 4-4 3 2 6-7" /><path d="M16 6h3v3" /></svg>;
    case "strategy":
      return <svg {...common}><path d="M4 18h4l3-5 3 2 6-9" /><path d="M16 6h4v4" /><circle cx="7" cy="18" r="1.3" /></svg>;
    default:
      return <svg {...common}><path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
  }
}
export default function Home() {

  const [openFaq, setOpenFaq] = useState<number | null>(null);





return (
    <>

      {/* NAVIGATION */}

      <header className="navbar">

        <div className="container nav-inner">

       <a href="/" className="brand" aria-label="Mehta Insights home">

  <Image

    src="/mehta-insights-logo.png"

    alt="Mehta Insights"

    width={420}

    height={120}

    priority

    className="brand-logo"

  />

</a>

          <nav className="nav-links">

            <a href="#program">Program</a>

            <a href="#curriculum">Curriculum</a>

            <a href="#mentor">About</a>

            <a href="#outcomes">Outcomes</a>

            <a href="#testimonials">Testimonials</a>

            <a href="#faqs">FAQs</a>

          </nav>

          <a href="/calendar" className="btn btn-gold nav-cta">

            Book a Consultation →

          </a>

        </div>

      </header>

      <main>

        {/* HERO */}

        <section className="hero" id="program">

          <div className="hero-chart" aria-hidden="true" />

                  <div className="container hero-inner">

            <div className="hero-copy">

              <div className="hero-eyebrow">

                LIVE GROUP COACHING • MENTOR-LED PROGRAM

              </div>

              <h1>

                Create a

                <br />

                <span className="hero-accent">Second Source</span>

                <br />

                <span className="hero-accent">of Income</span> through

                <br />

                Trading

              </h1>

              <p className="hero-description">

                Learn a structured approach to swing trading and build your
                market skills with practical guidance and disciplined execution.
              </p>

              <div className="hero-features">

                <div>

                  <span className="feature-icon">▣</span>

                  <span>

                    <strong>8 Weeks of Structured Learning</strong>

                  </span>

                </div>

                <div>

                  <span className="feature-icon">◷</span>

                  <span>

                    <strong>Live Sessions &amp; Mentorship</strong>

                  </span>

                </div>

                <div>

                  <span className="feature-icon">♧</span>

                  <span>

                    <strong>Certificate of Completion</strong>

                  </span>

                </div>

                <div>

                  <span className="feature-icon">▧</span>

                  <span>

                    <strong>Practical Market Education</strong>

                  </span>

                </div>

              </div>

              <div className="hero-actions">

                <a href="/calendar" className="btn btn-gold">

                  Book a Consultation →

                </a>

                <a href="#curriculum" className="btn btn-outline">

                  View Program Details

                </a>

              </div>

            </div>

            <div className="hero-portrait">

              <div className="hero-signature">

                <strong>Ankit Mehta</strong>

                <span>Market Mentor</span>

                <small>

                  CMT, CFTe, QPFP

                  <br />

                  SEBI Registered Research Analyst

                </small>

              </div>

            </div>

          </div>
<div className="mobile-mentor-portrait">
  <img
    src="/3%20month%202.png"
    alt="Ankit Mehta, market mentor"
  />
</div>

        </section>

        {/* AUDIENCE */}

        <section className="section audience-section">

          <div className="container">

            <SectionHeading

              label="WHO IS THIS PROGRAM FOR?"

              title="This program is designed for individuals who:"

            />

            <div className="grid-4 audience-grid">

              {audience.map((item) => (

                <article className="audience-card" key={item.text}>

                  <div className="round-icon" aria-hidden="true"><AudienceIcon type={item.icon} /></div>

                  <div>

                    <p>{item.text}</p>

                  </div>

                </article>

              ))}

            </div>

            <a href="/calendar" className="section-booking-cta">
              Book a Consultation
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </section>

        {/* LEARNING AREAS */}

        <section className="section learning-section" id="learning">

          <div className="container">

            <SectionHeading

              label="KEY HIGHLIGHTS"

              title="What You’ll Learn"

              subtitle="A focused, practical program covering the essential skills to become a confident swing trader."

            />

            <div className="grid-4 learning-grid">

              {learningAreas.map((item) => (

                <article className="learning-card" key={item.title}>

                  <div className="learning-icon" aria-hidden="true"><LearningIcon type={item.icon} /></div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* CURRICULUM */}

        <section className="section curriculum-section" id="curriculum">

          <div className="container">

            <SectionHeading

              label="PROGRAM CURRICULUM"

              title="8-Week Live Group Program"

              subtitle="Two live sessions per week, each lasting 1.5 to 2 hours, with practical assignments."

            />

            <div className="curriculum-timeline">

              {curriculum.map((module, index) => (

                <article className="curriculum-card" key={module.weeks}>

                  <div className="timeline-marker">

                    {String(index + 1).padStart(2, "0")}

                  </div>

                  <span className="module-weeks">{module.weeks}</span>

                  <div className="module-icon" aria-hidden="true"><CurriculumIcon index={index} /></div>

                  <h3>{module.title}</h3>

                  <ul>

                    {module.points.map((point) => (

                      <li key={point}>{point}</li>

                    ))}

                  </ul>

                </article>

              ))}

            </div>

            <a href="/calendar" className="section-booking-cta">
              Book a Consultation
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </section>

        {/* OUTCOMES */}

        <section

          className="section dark-section outcomes-section"

          id="outcomes"

        >

          <div className="container">

            <SectionHeading

              label="EXPECTED OUTCOMES"

              title="By the end of this program, you will be able to:"

            />

            <div className="grid-5 outcomes-grid">

              {outcomes.map((item) => (

                <article className="outcome-card" key={item.title}>

                  <div className="outcome-icon" aria-hidden="true"><OutcomeIcon type={item.icon} /></div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* MENTOR */}

        <section className="section mentor-section" id="mentor">

          <div className="container mentor-grid">

            <div className="mentor-visual">

              <img

                src="/mehta.jpeg"

                alt="Ankit Mehta - Mentor"

                className="mentor-photo"

              />

            </div>

            <div className="mentor-copy">

              <div className="section-label mentor-label">

                MEET YOUR MENTOR

              </div>

              <h2>Ankit Mehta</h2>

              <h3>CMT, CFTe, QPFP</h3>

              <p>

                An experienced market professional, Ankit brings together

                technical analysis and practical market knowledge in a

                structured learning environment. His approach helps learners

                build a more disciplined foundation in trading and investing.

              </p>

              <p>

                The curriculum focuses on market analysis, risk management,

                and trading psychology, with concepts reinforced through practical examples.

              </p>

              <div className="mentor-credentials">

                <div>

                  <span className="mentor-credential-icon" aria-hidden="true">◷</span>

                  <strong>15+ Years</strong>

                  <span>Market Experience</span>

                </div>

                <div>

                  <span className="mentor-credential-icon" aria-hidden="true">▤</span>

                  <strong>CMT, CFTe</strong>

                  <span>Professional Credentials</span>

                </div>

                <div>

                  <span className="mentor-credential-icon" aria-hidden="true">◎</span>

                  <strong>Practical</strong>

                  <span>Market Training</span>

                </div>

                <div>

                  <span className="mentor-credential-icon" aria-hidden="true">♧</span>

                  <strong>SEBI Registered</strong>

                  <span>Research Analyst</span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* TESTIMONIALS */}

        <section

          className="section testimonials-section"

          id="testimonials"

        >

          <div className="container">

            <SectionHeading

              label="WHAT OUR STUDENTS SAY"

              title="Real Learning. Real Progress."

            />

            <div className="testimonials-grid">

              {testimonials.map((item) => (

                <article className="testimonial-card" key={item.name}>

                  <p>“{item.quote}”</p>

                  <div className="testimonial-person">

                    <span className="avatar">

                      {item.name.charAt(0)}

                    </span>

                    <span>

                      <strong>{item.name}</strong>

                      <small>{item.role}</small>

                    </span>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* PRICING */}

        <section

          className="section dark-section pricing-section"

          id="pricing"

        >

          <div className="container pricing-grid">

            <div className="pricing-copy">

              <div className="section-label">

                INVEST IN A VALUABLE SKILL

              </div>

              <h2>2-Month Live Group Program</h2>

              <p className="pricing-description">
                A practical, mentor-led program focused on building swing trading skills.
              </p>

              <div className="price-panel">

                <div className="price">₹15,000</div>

                <p className="price-caption">for the complete 2-month program</p>

              </div>

              <div className="pricing-benefits">

                <span>▣ 16 Live Sessions</span>

                <span>♧ Live Mentorship</span>

                <span>▤ Study Materials</span>

                <span>◎ Community Support</span>

              </div>

            </div>

            <div className="pricing-card">

              <h3>What’s Included?</h3>

              <ul>

                <li>16 Live Sessions (1.5–2 Hours Each)</li>

                <li>Live Mentorship &amp; Doubt Solving</li>

                <li>Weekly Assignments &amp; Feedback</li>

                <li>Technical Analysis &amp; Strategy Learning</li>

                <li>Risk Management &amp; Trade Planning</li>

                <li>Real Market Examples &amp; Practical Insights</li>

                <li>Community Access</li>

              </ul>

              <a href="/calendar" className="btn btn-gold pricing-cta">

                Book a Consultation →

              </a>

              <small>

                Discuss your learning goals with the program team.

              </small>

            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="section faq-section" id="faqs">

          <div className="container">

            <SectionHeading

              label="FREQUENTLY ASKED QUESTIONS"

              title="Have Questions? We've Got Answers."

            />

            <div className="faq-grid">

              {faqs.map((faq, index) => (

                <article className="faq-item" key={faq.question}>

                  <button

                    className="faq-question"

                    aria-controls={`faq-answer-${index}`}

                    onClick={() =>

                      setOpenFaq(openFaq === index ? null : index)

                    }

                    aria-expanded={openFaq === index}

                  >

                    <span>{faq.question}</span>

                    <span className="faq-toggle">

                      {openFaq === index ? "−" : "+"}

                    </span>

                  </button>

                  <div
                    className="faq-answer"
                    id={`faq-answer-${index}`}
                    hidden={openFaq !== index}
                  >
                    {faq.answer}
                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* FINAL CTA */}

        <section className="final-cta">

          <div className="container final-cta-inner">

            <span className="final-cta-icon" aria-hidden="true">▥</span>

            <div>

              <h2>Take the First Step Towards Your Second Income</h2>

              <p>

                Book a consultation to discuss the program and your learning goals.

              </p>

            </div>

            <a href="/calendar" className="btn btn-gold">

              Book a Consultation →

            </a>

          </div>

        </section>

      </main>

      <SiteFooter />

    </>

  );

}
