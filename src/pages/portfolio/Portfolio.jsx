import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'
import Reveal from '../../components/reveal/Reveal.jsx'

const CATEGORIES = ['All', 'Social Media', 'SEO', 'Paid Ads', 'Branding', 'Web Design']

const PROJECTS = [
  { title: 'Lumen Skincare', client: 'E-Commerce', category: 'Paid Ads', result: '+312% revenue' },
  { title: 'Northbeam Analytics', client: 'SaaS', category: 'SEO', result: '4.1x demo signups' },
  { title: 'Coastline Hotels', client: 'Hospitality', category: 'Social Media', result: '+86k sessions/mo' },
  { title: 'Forge Fitness App', client: 'Health Tech', category: 'Branding', result: 'Full rebrand launch' },
  { title: 'Mintly Finance', client: 'FinTech', category: 'Web Design', result: '+47% conversion rate' },
  { title: 'Solace Home Goods', client: 'E-Commerce', category: 'Social Media', result: '210k new followers' },
  { title: 'Pivot Legal Group', client: 'Professional Services', category: 'SEO', result: '#1 ranking, 6 keywords' },
  { title: 'Verdant Coffee Co.', client: 'Retail', category: 'Paid Ads', result: '2.9x ROAS' },
]

const CASE_STUDIES = [
  {
    client: 'Lumen Skincare',
    challenge: 'Stagnant ad performance and rising acquisition costs across paid social.',
    before: { label: 'Cost per acquisition', value: '$58' },
    after: { label: 'Cost per acquisition', value: '$24' },
  },
  {
    client: 'Northbeam Analytics',
    challenge: 'Strong product, weak organic visibility for a crowded SaaS category.',
    before: { label: 'Organic demo signups', value: '38 / mo' },
    after: { label: 'Organic demo signups', value: '156 / mo' },
  },
  {
    client: 'Mintly Finance',
    challenge: 'High site traffic that wasn\u2019t converting into qualified leads.',
    before: { label: 'Landing page conversion', value: '1.4%' },
    after: { label: 'Landing page conversion', value: '6.1%' },
  },
]

const TEAM = [
  { name: 'Aria Sol', role: 'Founder & Strategy Lead' },
  { name: 'Kabir Mehta', role: 'Head of Performance Media' },
  { name: 'Noor Idris', role: 'Creative Director' },
  { name: 'Lena Park', role: 'SEO Lead' },
  { name: 'Theo Bramwell', role: 'Senior Designer' },
  { name: 'Sofia Marchetti', role: 'Content Strategist' },
  { name: 'Jamal Whitfield', role: 'Paid Media Manager' },
  { name: 'Ines Andrade', role: 'Analytics Lead' },
]

const CLIENTS = ['Lumen', 'Northbeam', 'Coastline', 'Forge', 'Mintly', 'Solace', 'Pivot', 'Verdant']

const ACHIEVEMENTS = [
  { value: '180+', label: 'Projects Delivered' },
  { value: '14', label: 'Industry Awards' },
  { value: '96%', label: 'On-time Delivery' },
  { value: '4.9/5', label: 'Avg. Client Rating' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  )

  return (
    <>
      <section className="page-header">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Portfolio &amp; Team</span>
            <h1>Work that speaks in numbers, not adjectives</h1>
            <p className="page-header-sub">
              A look at the campaigns, case studies and the people behind every result on this page.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="filter-bar" role="tablist" aria-label="Filter projects by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`filter-chip ${active === c ? 'is-active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="grid grid-4 project-grid">
            {filtered.map((p, i) => (
              <Reveal as="article" key={p.title} delay={(i % 4) + 1} className="card project-card">
                <span className="badge badge-secondary">{p.category}</span>
                <h4>{p.title}</h4>
                <p className="project-client">{p.client}</p>
                <p className="project-result">{p.result}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section case-studies-section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Case Studies</span>
            <h2>Before and after, side by side</h2>
          </Reveal>

          <div className="grid grid-3">
            {CASE_STUDIES.map((c, i) => (
              <Reveal as="div" key={c.client} delay={(i % 3) + 1} className="card case-study-card">
                <h4>{c.client}</h4>
                <p className="case-challenge">{c.challenge}</p>
                <div className="before-after">
                  <div className="ba-block">
                    <span className="ba-label">Before</span>
                    <span className="ba-value ba-before">{c.before.value}</span>
                    <span className="ba-metric">{c.before.label}</span>
                  </div>
                  <div className="ba-arrow" aria-hidden="true">
                    →
                  </div>
                  <div className="ba-block">
                    <span className="ba-label">After</span>
                    <span className="ba-value ba-after">{c.after.value}</span>
                    <span className="ba-metric">{c.after.label}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Our Team</span>
            <h2>The people behind your growth</h2>
          </Reveal>

          <div className="grid grid-4 team-grid">
            {TEAM.map((m, i) => (
              <Reveal as="div" key={m.name} delay={(i % 4) + 1} className="card team-card">
                <div className="leader-avatar" aria-hidden="true">
                  {m.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section-tight achievements-strip">
        <div className="container stats-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal as="div" key={a.label} delay={(i % 4) + 1} className="stat-item">
              <span className="stat-number">{a.value}</span>
              <span className="stat-label">{a.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="section-tight clients-section">
        <div className="container">
          <Reveal as="p" className="clients-label text-center">
            Trusted by brands across e-commerce, SaaS and hospitality
          </Reveal>
          <Reveal as="div" delay={1} className="clients-row">
            {CLIENTS.map((c) => (
              <span className="client-logo" key={c}>
                {c}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="cta-panel">
            <h2>Want results like these for your brand?</h2>
            <p>Let's map out what growth could look like for you in the next 90 days.</p>
            <Link to="/contact" className="btn btn-accent">
              Start the Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}