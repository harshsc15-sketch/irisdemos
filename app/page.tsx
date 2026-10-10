
"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const markets = [
  {
    number: "01",
    name: "India",
    location: "A legacy rooted in place",
    description:
      "Lutyens' Delhi, NCR farmhouses, South Mumbai, Goa and the Himalayan hills.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    name: "Dubai",
    location: "A world without boundaries",
    description:
      "Waterfront villas, contemporary residences and distinguished city addresses.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    name: "London",
    location: "Timeless by design",
    description:
      "Mayfair, Knightsbridge, the Cotswolds and the Surrey countryside.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    name: "Scotland",
    location: "Space to see things differently",
    description:
      "Highland estates, lochside homes and distinguished rural retreats.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
  },
];

const services = [
  {
    n: "01",
    title: "Property Portfolio Management",
    text: "A considered view of your assets, performance, leasing and long-term potential.",
  },
  {
    n: "02",
    title: "Acquisition & Investment Advisory",
    text: "Research, due diligence, valuation and negotiation before a decision is made.",
  },
  {
    n: "03",
    title: "Global Indian Advisory",
    text: "A coordinated approach to property ownership across borders and markets.",
  },
  {
    n: "04",
    title: "Holiday Homes & Lifestyle Estates",
    text: "Distinctive homes selected around the way you want to live.",
  },
  {
    n: "05",
    title: "Private Opportunities",
    text: "A discreet approach to selected residential, land and off-market opportunities.",
  },
  {
    n: "06",
    title: "Land Development & Value",
    text: "Explore development potential, feasibility and the right route to realisation.",
  },
];

const residences = [
  {
    name: "The Skyline Residencies",
    place: "Gurugram, India",
    type: "CONTEMPORARY LIVING",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "The Palm Address",
    place: "Dubai, UAE",
    type: "WATERFRONT LIVING",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "The Coastal House",
    place: "Goa, India",
    type: "PRIVATE RETREAT",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
];

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="iris-page">
      {/* Navigation */}
      <header className="iris-nav">
        <Link href="#home" className="iris-logo">
          IRIS
          <span>LIVING SPACES</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {[
            ["Advisory", "#advisory"],
            ["Global Markets", "#markets"],
            ["Residences", "#residences"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <Link
              href={href}
              key={label}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Speak to an Advisor <ArrowUpRight size={15} />
          </Link>
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Hero */}
      <section className="iris-hero" id="home">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90"
          alt="Contemporary luxury residence surrounded by greenery"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />

        <div className="hero-shade" />

        <div className="hero-topline">
          <span>PRIVATE REAL ESTATE ADVISORY</span>
          <span>INDIA · DUBAI · LONDON · SCOTLAND</span>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="eyebrow light-eyebrow">
            PROPERTY. PLACE. PERSPECTIVE.
          </p>

          <h1>
            Legacy defined.
            <br />
            <em>Wealth preserved.</em>
          </h1>

          <p className="hero-description">
            A more considered approach to property, ownership
            and the legacy you leave behind.
          </p>

          <Link href="#markets" className="hero-button">
            Explore IRIS <ArrowUpRight size={17} />
          </Link>
        </motion.div>

        <div className="hero-bottom">
          <span>01 — A GLOBAL PERSPECTIVE</span>
          <Link href="#intro">
            DISCOVER OUR APPROACH <ArrowDownRight size={15} />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section section-pad" id="intro">
        <Reveal>
          <p className="eyebrow">A DIFFERENT KIND OF PROPERTY PARTNER</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="intro-grid">
            <h2>
              Property is personal.
              <br />
              <em>Legacy, even more so.</em>
            </h2>

            <div className="intro-copy">
              <p>
                The right property decision is about more than an
                address. It is about the life you want to lead,
                the wealth you want to preserve and the future
                you want to create.
              </p>
              <p>
                IRIS brings a considered, relationship-led
                perspective to real estate across markets.
              </p>
              <Link href="#advisory" className="text-link">
                Discover our approach <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Markets */}
      <section className="markets-section section-pad" id="markets">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">A WORLD OF POSSIBILITY</p>
              <h2>
                Distinctive places.
                <br />
                <em>One discerning perspective.</em>
              </h2>
            </div>
            <span className="section-index">01 / GLOBAL MARKETS</span>
          </div>
        </Reveal>

        <div className="markets-grid">
          {markets.map((market, index) => (
            <Reveal key={market.name} delay={index * 0.08}>
              <Link
                href="#contact"
                className="market-card image-hover"
              >
                <div className="market-image-wrap">
                  <Image
                    src={market.image}
                    alt={`${market.name} real estate market`}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    className="hover-image"
                  />
                  <div className="image-overlay" />
                  <span className="market-number">
                    {market.number}
                  </span>
                  <span className="image-arrow">
                    <ArrowUpRight size={21} />
                  </span>
                  <div className="market-image-caption">
                    <span>{market.location}</span>
                    <h3>{market.name}</h3>
                  </div>
                </div>
                <p className="market-description">{market.description}</p>
                <span className="market-link">
                  EXPLORE MARKET <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Advisory */}
      <section className="advisory-section section-pad" id="advisory">
        <Reveal>
          <div className="section-heading advisory-heading">
            <div>
              <p className="eyebrow">WHAT WE ADVISE ON</p>
              <h2>
                Thoughtful strategy.
                <br />
                <em>Meaningful outcomes.</em>
              </h2>
            </div>
            <p className="heading-note">
              From your first acquisition to a multi-market
              portfolio, every decision starts with understanding
              what matters to you.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.n} delay={(index % 3) * 0.08}>
              <Link href="#contact" className="service-card">
                <span className="service-number">{service.n}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ArrowUpRight className="service-arrow" size={20} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial statement */}
      <section className="statement-section">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85"
          alt="Quiet, thoughtfully designed luxury interior"
          fill
          sizes="100vw"
          className="statement-image"
        />
        <div className="statement-overlay" />
        <Reveal>
          <div className="statement-content">
            <p className="eyebrow light-eyebrow">THE IRIS PERSPECTIVE</p>
            <h2>
              The finest luxury
              <br />
              is <em>clarity.</em>
            </h2>
            <p>
              Fewer distractions. Better decisions.
              A perspective that sees beyond the transaction.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Residences */}
      <section className="residences-section section-pad" id="residences">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">A PRIVATE VIEW</p>
              <h2>
                Residencies of
                <br />
                <em>rare distinction.</em>
              </h2>
            </div>
            <p className="heading-note">
              An illustrative selection of places and possibilities
              that shape our conversations.
            </p>
          </div>
        </Reveal>

        <div className="residences-grid">
          {residences.map((home, index) => (
            <Reveal key={home.name} delay={index * 0.1}>
              <Link href="#contact" className="residence-card">
                <div className="residence-image-wrap image-hover">
                  <Image
                    src={home.image}
                    alt={home.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    className="hover-image"
                  />
                  <div className="residence-overlay" />
                  <span className="residence-type">{home.type}</span>
                  <span className="residence-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <p className="residence-place">{home.place}</p>
                <h3>{home.name}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="disclaimer">
          Illustrative concepts only. Final property details,
          availability and specifications require verification.
        </p>
      </section>

      {/* Founder */}
      <section className="founder-section section-pad" id="about">
        <div className="founder-grid">
          <Reveal>
            <div className="founder-image-wrap">
              <Image
                src="/sahil-verma-founder.png"
                alt="Professional portrait representing the founder's desk"
                fill
                sizes="(max-width: 1000px) 120vw, 42vw"
                className="founder-image"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="founder-copy">
              <p className="eyebrow">FROM THE FOUNDER&apos;S DESK</p>
              <h2>
                Every property tells a story.
                <br />
                <em>Every decision shapes one.</em>
              </h2>
              <p>
                At IRIS, our role begins with listening. We take
                the time to understand your ambitions, assess
                the possibilities and help you make decisions
                with a longer view.
              </p>
              <p>
                Because exceptional property advice is not just
                about finding the right place. It is about
                understanding what that place means to you.
              </p>
              <div className="founder-signature">
                <span>Sahiil Verma</span>
                <small>CO-FOUNDER, IRIS LIVING SPACES</small>
              </div>
              <Link href="#contact" className="text-link">
                Get to know IRIS <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <Reveal>
            <p className="eyebrow light-eyebrow">A PRIVATE CONVERSATION</p>
            <h2>
              Exceptional decisions
              <br />
              begin <em>in confidence.</em>
            </h2>
            <p className="contact-description">
              Tell us what you are considering.
              Let&apos;s start with a conversation.
            </p>
            <Link
              href="https://wa.me/919871518237"
              target="_blank"
              rel="noreferrer"
              className="contact-button"
            >
              Speak to an Advisor <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="iris-footer">
        <div className="footer-top">
          <Link href="#home" className="iris-logo footer-logo">
            IRIS
            <span>LIVING SPACES</span>
          </Link>
          <p>Property. Place. Perspective.</p>
          <Link href="#home" className="back-top">
            BACK TO TOP ↑
          </Link>
        </div>

        <div className="footer-bottom">
          <span>© 2026 IRIS LIVING SPACES</span>
          <span>INDIA · DUBAI · LONDON · SCOTLAND</span>
          <span>DESIGNED WITH INTENTION.</span>
        </div>
      </footer>
    </main>
  );
}
