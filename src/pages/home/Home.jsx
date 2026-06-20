import { Link } from 'react-router-dom'
import Reveal from '../../components/reveal/Reveal.jsx'
import './home.css'

const STATS = [
  { value: '180+', label: 'Brands Grown' },
  { value: '4.6x', label: 'Avg. ROAS' },
  { value: '92%', label: 'Client Retention' },
  { value: '7', label: 'Years Running' },
]

const SERVICES_PREVIEW = [
  {
    title: 'Social Media Marketing',
    desc: 'Strategy-led content and community growth across every platform that matters to your audience.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="6" cy="12" r="2.6" />
        <circle cx="18" cy="6" r="2.6" />
        <circle cx="18" cy="18" r="2.6" />
        <line x1="8.2" y1="11" x2="15.8" y2="7" />
        <line x1="8.2" y1="13" x2="15.8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'SEO Optimization',
    desc: 'Technical, on-page and content SEO that compounds your organic visibility month over month.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="6.5" />
        <line x1="20" y1="20" x2="15.8" y2="15.8" />
      </svg>
    ),
  },
  {
    title: 'Performance Ads',
    desc: 'Google and Meta campaigns engineered around real revenue targets, not vanity metrics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19V10" />
        <path d="M11 19V5" />
        <path d="M18 19v-7" />
      </svg>
    ),
  },
  {
    title: 'Branding & Identity',
    desc: 'Visual systems and brand voice that make your business instantly recognizable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l2.4 5.1 5.6.8-4 4 1 5.6L12 16l-5 2.5 1-5.6-4-4 5.6-.8z" />
      </svg>
    ),
  },
  {
    title: 'Web Design',
    desc: 'Fast, conversion-minded websites built to turn visitors into qualified leads.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Analytics & Reporting',
    desc: 'Clear dashboards that connect every dollar spent to the outcomes that matter.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4v16h16" />
        <path d="M8 15l3-4 3 2 4-6" />
      </svg>
    ),
  },
]

const WHY_US = [
  {
    title: 'Strategy before spend',
    desc: 'Every engagement starts with research and a measurable plan, never a generic template.',
  },
  {
    title: 'One connected team',
    desc: 'Strategists, creatives and analysts work from the same roadmap, so nothing falls through the cracks.',
  },
  {
    title: 'Transparent reporting',
    desc: 'Live dashboards and plain-language monthly reviews — you always know what is working.',
  },
  {
    title: 'Built to scale',
    desc: 'Systems and creative frameworks designed to grow with you, from launch to category leader.',
  },
]

const FEATURED_WORK = [
  { tag: 'E-Commerce', title: 'Lumen Skincare', metric: '+312% revenue in 6 months' },
  { tag: 'SaaS', title: 'Northbeam Analytics', metric: '4.1x increase in demo signups' },
  { tag: 'Hospitality', title: 'Coastline Hotels', metric: '+86k organic sessions / mo' },
]

const TESTIMONIALS = [
  {
    quote:
      'TRIAD rebuilt our entire acquisition funnel in under a quarter. Our cost per lead dropped by half while volume kept climbing.',
    name: 'Maya Chen',
    role: 'Founder, Lumen Skincare',
  },
  {
    quote:
      'The reporting alone is worth it — for the first time we can see exactly which campaigns drive revenue, not just clicks.',
    name: 'Daniel Reyes',
    role: 'VP Growth, Northbeam',
  },
  {
    quote:
      'They feel like an internal team. Fast, honest, and genuinely invested in our numbers every single month.',
    name: 'Priya Anand',
    role: 'CMO, Coastline Hotels',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-constellation" aria-hidden="true">
          <span className="node node-1" />
          <span className="node node-2" />
          <span className="node node-3" />
          <svg className="hero-lines" viewBox="0 0 600 600">
            <line x1="300" y1="120" x2="120" y2="460" />
            <line x1="300" y1="120" x2="480" y2="460" />
            <line x1="120" y1="460" x2="480" y2="460" />
          </svg>
        </div>

        <div className="container hero-inner">
          <Reveal as="div" className="hero-content">
            <span className="eyebrow">On Social Studio</span>
            <h1>
              We help your brand <span className="text-gradient">grow</span>, on purpose.
            </h1>
            <p className="hero-sub">
              TRIAD is a full-service digital marketing studio — strategy, content and performance media
              working as one system to turn attention into revenue.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Growth Plan
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* STATS */}
      <section className="section-tight stats-strip">
        <div className="container stats-grid">
          {STATS.map((s, i) => (
            <Reveal as="div" key={s.label} delay={(i % 4) + 1} className="stat-item">
              <span className="stat-number">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">What We Do</span>
            <h2>Every growth lever, under one roof</h2>
            <p>From the first impression to the final conversion, our services connect into a single growth engine.</p>
          </Reveal>

          <div className="grid grid-3 services-preview-grid">
            {SERVICES_PREVIEW.map((s, i) => (
              <Reveal as="article" key={s.title} delay={(i % 3) + 1} className="card service-preview-card">
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="flex-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-outline">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-us">
        <div className="container why-us-grid">
          <Reveal as="div" className="why-us-copy">
            <span className="eyebrow">Why TRIAD</span>
            <h2>Marketing that is actually accountable to revenue</h2>
            <p>
              We exist to remove the guesswork from marketing. No vanity metrics, no black-box reporting —
              just a team that ties every decision back to growth you can bank on.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Our Story
            </Link>
          </Reveal>

          <div className="why-us-list">
            {WHY_US.map((w, i) => (
              <Reveal as="div" key={w.title} delay={(i % 4) + 1} className="why-us-item">
                <span className={`triad-dot`} data-n={String((i % 3) + 1)} />
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section featured-work">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Featured Work</span>
            <h2>Results our clients talk about</h2>
          </Reveal>

          <div className="grid grid-3">
            {FEATURED_WORK.map((w, i) => (
              <Reveal as="div" key={w.title} delay={(i % 3) + 1} className="card work-card">
                <span className="badge badge-secondary">{w.tag}</span>
                <h3>{w.title}</h3>
                <p className="work-metric">{w.metric}</p>
              </Reveal>
            ))}
          </div>

          <div className="flex-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/portfolio" className="btn btn-outline">
              See Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="section testimonials-preview">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Client Voices</span>
            <h2>Don't take our word for it</h2>
          </Reveal>

          <div className="grid grid-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="figure" key={t.name} delay={(i % 3) + 1} className="card testimonial-card">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <figcaption>
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <Reveal as="div" className="cta-panel">
            <h2>Ready to turn attention into revenue?</h2>
            <p>Tell us where your brand is today — we'll show you the fastest path to where it should be.</p>
            <Link to="/contact" className="btn btn-accent">
              Get Your Free Strategy Call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}