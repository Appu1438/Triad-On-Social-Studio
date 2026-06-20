import { Link } from 'react-router-dom'
import Reveal from '../../components/reveal/Reveal.jsx'
import './services.css'

const ICONS = {
  social: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="6" r="2.6" />
      <circle cx="18" cy="18" r="2.6" />
      <line x1="8.2" y1="11" x2="15.8" y2="7" />
      <line x1="8.2" y1="13" x2="15.8" y2="17" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="6.5" />
      <line x1="20" y1="20" x2="15.8" y2="15.8" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5v17M3.5 12h17" />
    </svg>
  ),
  meta: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 20V10.5C7 7 9.2 4.5 12 4.5s5 2.5 5 6V20" />
      <path d="M4.5 13.2C6 9.5 8.8 9.5 10.3 13.2M13.7 13.2c1.5-3.7 4.3-3.7 5.8 0" />
    </svg>
  ),
  branding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l2.4 5.1 5.6.8-4 4 1 5.6L12 16l-5 2.5 1-5.6-4-4 5.6-.8z" />
    </svg>
  ),
  content: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 4h9l3 3v13H6z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
    </svg>
  ),
  leads: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 9.5l2 2 4-4.2" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4v16h16" />
      <path d="M8 15l3-4 3 2 4-6" />
    </svg>
  ),
}

const SERVICES = [
  {
    icon: ICONS.social,
    title: 'Social Media Marketing',
    desc: 'Always-on content, community management and influencer partnerships that turn followers into customers.',
    features: ['Content calendars & creative production', 'Community management', 'Influencer & creator partnerships'],
  },
  {
    icon: ICONS.seo,
    title: 'SEO Optimization',
    desc: 'Technical fixes, content strategy and link building that compound your organic traffic over time.',
    features: ['Technical & on-page audits', 'Keyword & content strategy', 'Authority & link building'],
  },
  {
    icon: ICONS.google,
    title: 'Google Ads',
    desc: 'Search, shopping and display campaigns built around cost-efficient, high-intent conversions.',
    features: ['Search & Shopping campaigns', 'Conversion-rate optimization', 'Bid strategy & budget pacing'],
  },
  {
    icon: ICONS.meta,
    title: 'Meta Ads',
    desc: 'Facebook and Instagram media buying with creative testing built into every sprint.',
    features: ['Full-funnel campaign structure', 'Creative testing frameworks', 'Audience & retargeting strategy'],
  },
  {
    icon: ICONS.branding,
    title: 'Branding',
    desc: 'Identity systems, messaging and guidelines that make your brand instantly recognizable.',
    features: ['Logo & visual identity', 'Brand voice & messaging', 'Brand guideline systems'],
  },
  {
    icon: ICONS.content,
    title: 'Content Marketing',
    desc: 'Articles, video and lifecycle content that build trust long before the sales conversation starts.',
    features: ['Editorial strategy & SEO content', 'Video & short-form production', 'Email & lifecycle content'],
  },
  {
    icon: ICONS.web,
    title: 'Web Design',
    desc: 'Conversion-focused websites and landing pages, designed and shipped fast.',
    features: ['UX-led website design', 'Landing page systems', 'Speed & accessibility optimization'],
  },
  {
    icon: ICONS.leads,
    title: 'Lead Generation',
    desc: 'Funnels, forms and outreach systems engineered to fill your pipeline with qualified leads.',
    features: ['Funnel & landing page builds', 'Lead magnets & gated content', 'CRM & nurture automation'],
  },
  {
    icon: ICONS.analytics,
    title: 'Analytics & Reporting',
    desc: 'Dashboards and attribution models that show exactly which channels drive growth.',
    features: ['Custom dashboards', 'Multi-touch attribution', 'Monthly performance reviews'],
  },
]

const PROCESS = [
  { step: '01', title: 'Discover', desc: 'Audit your market, funnel and data to find the biggest growth levers.' },
  { step: '02', title: 'Plan', desc: 'Build a channel roadmap with clear targets and timelines.' },
  { step: '03', title: 'Launch', desc: 'Ship creative and campaigns in fast, testable sprints.' },
  { step: '04', title: 'Scale', desc: 'Double down on what works and report results in plain language.' },
]

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Services</span>
            <h1>Every growth lever, engineered to work together</h1>
            <p className="page-header-sub">
              Pick a single service or a full-funnel program — every engagement is built on the same
              foundation of strategy, creative and data.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3 services-grid">
            {SERVICES.map((s, i) => (
              <Reveal as="article" key={s.title} delay={(i % 4) + 1} className="card service-card">
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="triad-list">
                  {s.features.map((f, idx) => (
                    <li key={f}>
                      <span className="triad-dot" data-n={String((idx % 3) + 1)} />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">How We Work</span>
            <h2>A simple process behind every campaign</h2>
          </Reveal>

          <div className="grid grid-4 process-grid">
            {PROCESS.map((p, i) => (
              <Reveal as="div" key={p.step} delay={(i % 4) + 1} className="process-step">
                <span className="process-number">{p.step}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="cta-panel">
            <h2>Not sure which service is right for you?</h2>
            <p>Tell us about your goals and we'll recommend the fastest path to growth.</p>
            <Link to="/contact" className="btn btn-accent">
              Talk to a Strategist
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}