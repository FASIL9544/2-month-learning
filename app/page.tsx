"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

const audience = [

  {

    icon: "♙",

    title: "Beginners",

    text: "Looking to understand the stock market from scratch.",

  },

  {

    icon: "▥",

    title: "Working Professionals",

    text: "Who want to build a secondary income source through trading.",

  },

  {

    icon: "◈",

    title: "Investors",

    text: "Who want to upgrade their technical analysis and trading skills.",

  },

  {

    icon: "♧",

    title: "Aspiring Traders",

    text: "Who want a structured learning path with mentorship.",

  },

];

const learningAreas = [

  {

    icon: "⌁",

    title: "5 Defined Strategies",

    text: "For each time frame, including swing, positional and intraday trading.",

  },

  {

    icon: "▤",

    title: "Technical Analysis",

    text: "From basic to advanced tools, indicators and chart patterns.",

  },

  {

    icon: "♢",

    title: "Risk Management",

    text: "Position sizing, stop loss, capital allocation and practical application.",

  },

  {

    icon: "◎",

    title: "Trading Psychology",

    text: "Develop discipline, manage emotions and build a trader's mindset.",

  },

  {

    icon: "▧",

    title: "Practical Application",

    text: "Real market examples, assignments and practice sessions.",

  },

];

const curriculum = [

  {

    weeks: "Weeks 1–2",

    title: "Market Foundation",

    points: [

      "How the market works",

      "Participants and exchanges",

      "Order types and SEBI basics",

    ],

  },

  {

    weeks: "Weeks 3–5",

    title: "Price Action & Technical Analysis",

    points: [

      "How theory translates to charts",

      "Candlesticks & chart patterns",

      "Indicators and moving averages",

      "Support & resistance",

    ],

  },

  {

    weeks: "Weeks 6–7",

    title: "Trading Strategies & Market Analysis",

    points: [

      "5 trading strategies",

      "For different time frames",

      "Market structure and trends",

      "Breakouts, fakeouts & volume",

    ],

  },

  {

    weeks: "Weeks 8–10",

    title: "Derivatives (F&O)",

    points: [

      "Futures and options basics",

      "Option chain and strategies",

      "Risk-reward and volatility",

      "Trade setup and analysis",

    ],

  },

  {

    weeks: "Weeks 11–12",

    title: "Risk Management, Psychology & Investing",

    points: [

      "Position sizing and trade planning",

      "Trading psychology",

      "Fundamental analysis basics",

      "Building your trading plan",

    ],

  },

];

const outcomes = [

  {

    icon: "◎",

    title: "Apply 5 defined trading strategies",

    text: "For different time frames.",

  },

  {

    icon: "⌁",

    title: "Perform complete technical analysis",

    text: "From basic to advanced.",

  },

  {

    icon: "♢",

    title: "Manage risk effectively",

    text: "With position sizing and stop-loss discipline.",

  },

  {

    icon: "◉",

    title: "Trade with a disciplined mindset",

    text: "With emotional control and consistency.",

  },

  {

    icon: "▥",

    title: "Analyse and select stocks",

    text: "Using technical and long-term investing insights.",

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

      "No. The program is designed to guide beginners from the fundamentals to more advanced trading concepts.",

  },

  {

    question: "What tools or software do I need?",

    answer:

      "You will need a computer or smartphone and a reliable internet connection. Recommended charting tools can be discussed during the program.",

  },

  {

    question: "What is the duration and schedule?",

    answer:

      "The program runs for 12 weeks and includes 24 live sessions. Contact the team for the current batch schedule.",

  },

  {

    question: "Is this a certification program?",

    answer:

      "Please contact the program team for details about any certificate or completion requirements.",

  },

  {

    question: "Will I get recordings of the sessions?",

    answer:

      "Please confirm recording availability and access duration with the program team before enrolling.",

  },

  {

    question: "What is the refund policy?",

    answer:

      "Please review the official refund and cancellation terms with the program team before making payment.",

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

function Footer() {

  return (

    <footer className="site-footer">

      <div className="container footer-inner">

        <a

          href="/"

          className="footer-logo-link"

          aria-label="Mehta Insights home"

        >

          <img

            src="/mehta-insights-logo.png"

            alt="Mehta Insights"

            className="footer-logo"

          />

        </a>

        <p className="footer-tagline">

          Learn. Analyse. Trade with discipline.

        </p>

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

         <span>

  © 2026 Mehta Insights. All rights reserved.

</span>

          <a href="/calendar">

            Book a Consultation →

          </a>

        </div>

      </div>

    </footer>

  );

}

export default function Home() {

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonialsRef = useRef<HTMLDivElement>(null);


useEffect(() => {
  const slider = testimonialsRef.current;
  if (!slider) return;

  let animationFrame = 0;

  const move = () => {
    const rect = slider.getBoundingClientRect();

    // Animate only while the testimonials are on screen
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (maxScroll > 0) {
        slider.scrollLeft += 1;

        if (slider.scrollLeft >= maxScroll - 1) {
          slider.scrollLeft = 0;
        }
      }
    }

    animationFrame = requestAnimationFrame(move);
  };

  animationFrame = requestAnimationFrame(move);

  return () => {
    cancelAnimationFrame(animationFrame);
  };
}, []);


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

          <a href="/calendar" className="btn btn-green nav-cta">

            Book a Consultation →

          </a>

        </div>

      </header>

      <main>

        {/* HERO */}

        <section className="hero" id="program">

          <div className="hero-chart" aria-hidden="true" />

<div className="mobile-mentor-portrait" aria-hidden="true">

  <img

    src="/mentor-hero-bg.png"

    alt=""

  />

</div>

                  <div className="container hero-inner">

            <div className="hero-copy">

              <div className="hero-eyebrow">LIVE MENTORED PROGRAM</div>

              <h1>

                Mastering the

                <br />

                Stock Market

              </h1>

              <h2>From Basics to Pro-Level Trading</h2>

              <p className="hero-description">

                A 3-month, step-by-step program to help you understand,

                analyse and trade the stock market with confidence.

                Learn practical strategies, risk management and a

                disciplined approach from an experienced market mentor.

              </p>

              <div className="hero-features">

                <div>

                  <span className="feature-icon">▣</span>

                  <span>

                    <strong>3 Months</strong>

                    <small>12 Weeks</small>

                  </span>

                </div>

                <div>

                  <span className="feature-icon">◷</span>

                  <span>

                    <strong>24 Live Sessions</strong>

                    <small>2 Per Week</small>

                  </span>

                </div>

                <div>

                  <span className="feature-icon">♧</span>

                  <span>

                    <strong>Live Mentorship</strong>

                    <small>Assignments</small>

                  </span>

                </div>

              </div>

              <div className="hero-actions">

                <a href="/calendar" className="btn btn-green">

                  Book a Consultation →

                </a>

                <a href="#curriculum" className="btn btn-outline">

                  View Detailed Curriculum

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

        </section>

        {/* AUDIENCE */}

        <section className="section audience-section">

          <div className="container">

            <SectionHeading

              label="WHO IS THIS PROGRAM FOR?"

              title="If you want to learn the right way, this program is for you."

            />

            <div className="grid-4 audience-grid">

              {audience.map((item) => (

                <article className="audience-card" key={item.title}>

                  <div className="round-icon">{item.icon}</div>

                  <div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* LEARNING AREAS */}

        <section className="section learning-section" id="learning">

          <div className="container">

            <SectionHeading

              label="KEY LEARNING AREAS"

              title="What You’ll Learn"

              subtitle="A complete learning experience covering the essential pillars of trading and investing."

            />

            <div className="grid-5 learning-grid">

              {learningAreas.map((item) => (

                <article className="learning-card" key={item.title}>

                  <div className="learning-icon">{item.icon}</div>

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

              title="A 12-Week Structured Program (24 Live Sessions)"

              subtitle="Two live sessions per week, each lasting 1.5 to 2 hours, with practical assignments."

            />

            <div className="curriculum-timeline">

              {curriculum.map((module, index) => (

                <article className="curriculum-card" key={module.weeks}>

                  <div className="timeline-marker">

                    {String(index + 1).padStart(2, "0")}

                  </div>

                  <span className="module-weeks">{module.weeks}</span>

                  <div className="module-icon">

                    {["◉", "▥", "▤", "⌁", "♢"][index]}

                  </div>

                  <h3>{module.title}</h3>

                  <ul>

                    {module.points.map((point) => (

                      <li key={point}>{point}</li>

                    ))}

                  </ul>

                </article>

              ))}

            </div>

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

                  <div className="outcome-icon">{item.icon}</div>

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

                src="/mehta%20Blue%20Blazer.png"

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

                An experienced market professional who brings technical

                analysis, practical market knowledge and structured

                learning together to help students develop a disciplined

                approach to trading and investing.

              </p>

              <p>

                Learn market analysis, risk management and trading

                psychology through a structured learning experience.

              </p>

              <div className="mentor-credentials">

                <div>

                  <strong>15+ Years</strong>

                  <span>Market Experience</span>

                </div>

                <div>

                  <strong>CMT, CFTe</strong>

                  <span>Professional Credentials</span>

                </div>

                <div>

                  <strong>Practical</strong>

                  <span>Market Training</span>

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

              title="Real Learning. Real Application."

              subtitle="Experiences shared by learners."

            />

            <div className="testimonials-grid" ref={testimonialsRef}>

              {testimonials.map((item) => (

                <article className="testimonial-card" key={item.name}>

                  <div className="stars" aria-label="Student testimonial">

                    ★★★★★

                  </div>

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

                INVEST IN YOUR TRADING JOURNEY

              </div>

              <h2>3-Month Live Mentored Program</h2>

              <div className="price">₹40,000</div>

              <p className="price-caption">for the complete program</p>

              <div className="pricing-benefits">

                <span>▣ 24 Live Sessions</span>

                <span>♧ Live Mentorship</span>

                <span>▤ Study Materials</span>

                <span>◎ Community Support</span>

              </div>

            </div>

            <div className="pricing-card">

              <h3>What’s Included?</h3>

              <ul>

                <li>24 Live Sessions (1.5–2 Hours Each)</li>

                <li>Live Mentorship &amp; Doubt Solving</li>

                <li>Weekly Assignments &amp; Feedback</li>

                <li>Technical Analysis &amp; Strategy Learning</li>

                <li>Real Market Examples &amp; Practical Insights</li>

                <li>Community Access</li>

              </ul>

              <a href="/calendar" className="btn btn-green pricing-cta">

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

              title="Have Questions? We’ve Got Answers."

            />

            <div className="faq-grid">

              {faqs.map((faq, index) => (

                <article className="faq-item" key={faq.question}>

                  <button

                    className="faq-question"

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

                  {openFaq === index && (

                    <div className="faq-answer">{faq.answer}</div>

                  )}

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* FINAL CTA */}

        <section className="final-cta">

          <div className="container final-cta-inner">

            <div>

              <h2>Ready to Begin Your Learning Journey?</h2>

              <p>

                Discuss the program and find out whether it fits your goals.

              </p>

            </div>

            <a href="/calendar" className="btn btn-green">

              Book a Consultation →

            </a>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

}
