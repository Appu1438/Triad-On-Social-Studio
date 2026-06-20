import { Link } from 'react-router-dom'
import Reveal from '../../components/reveal/Reveal.jsx'
import './about.css'

const VALUES = [
  {
    title: 'Curiosity first',
    desc: 'We ask why before we ask how — every campaign starts with understanding the customer.',
  },
  {
    title: 'Radical clarity',
    desc: 'No jargon, no vanity dashboards. You always know what is happening and why.',
  },
  {
    title: 'Craft over shortcuts',
    desc: 'We sweat the details on every asset, because small things compound into brand trust.',
  },
  {
    title: 'Shared scoreboard',
    desc: 'Our team wins when your pipeline grows — incentives are aligned, always.',
  },
]

const TIMELINE = [
  { year: '2019', title: 'TRIAD founded', desc: 'Started as a two-person social studio working out of a co-working space.' },
  { year: '2021', title: 'Performance media launched', desc: 'Added paid search and paid social as core service lines.' },
  { year: '2023', title: '100th client milestone', desc: 'Crossed 100 active brands and opened a dedicated analytics desk.' },
  { year: '2025', title: 'Full-funnel studio', desc: 'Branding, web and lifecycle marketing joined the roster — one roof, every lever.' },
]

const LEADERSHIP = [
  { name: 'Aria Sol', role: 'Founder & Strategy Lead' },
  { name: 'Kabir Mehta', role: 'Head of Performance Media' },
  { name: 'Noor Idris', role: 'Creative Director' },
]

const ACHIEVEMENTS = [
  { value: '180+', label: 'Brands Served' },
  { value: '$42M', label: 'Client Ad Spend Managed' },
  { value: '14', label: 'Industry Awards' },
  { value: '7', label: 'Years in Business' },
]

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">About TRIAD</span>
            <h1>Built by marketers who got tired of guessing</h1>
            <p className="page-header-sub">
              We started TRIAD to prove that creative and performance marketing don't have to live in
              separate teams — they work best as one connected system.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container story-grid">
          <Reveal as="div" className="story-copy">
            <span className="eyebrow">Our Story</span>
            <h2>From a two-person studio to a full growth team</h2>
            <p>
              TRIAD began in 2019 when our founder, frustrated by agencies that optimized for impressions
              instead of revenue, set out to build something different: a studio where every social post,
              ad and landing page is judged by the same number — growth.
            </p>
            <p>
              Seven years later, that mindset hasn't changed. We've simply added the people, tooling and
              process needed to do it at scale, for brands across e-commerce, SaaS and hospitality.
            </p>
          </Reveal>

          <Reveal as="div" delay={2} className="story-visual" aria-hidden="true">
            <div className="orbit-card">
              <span className="orbit-dot orbit-dot-1" />
              <span className="orbit-dot orbit-dot-2" />
              <span className="orbit-dot orbit-dot-3" />
              <div className="orbit-core">
                <span>TRIAD</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section mission-vision">
        <div className="container grid grid-2">
          <Reveal as="div" className="card mv-card">
            <span className="badge badge-secondary">Mission</span>
            <h3>Make exceptional marketing accessible to ambitious, growing brands.</h3>
            <p>We translate strategy into systems any team can run, scale and trust.</p>
          </Reveal>
          <Reveal as="div" delay={2} className="card mv-card">
            <span className="badge badge-accent">Vision</span>
            <h3>Be the studio brands call before their first hire, not after their last agency fails.</h3>
            <p>A long-term growth partner, not a vendor measured quarter to quarter.</p>
          </Reveal>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">What We Stand For</span>
            <h2>Core values that shape every engagement</h2>
          </Reveal>

          <div className="grid grid-4">
            {VALUES.map((v, i) => (
              <Reveal as="div" key={v.title} delay={(i % 4) + 1} className="card value-card">
                <span className="triad-dot" data-n={String((i % 3) + 1)} />
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section timeline-section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Our Journey</span>
            <h2>Seven years of compounding growth</h2>
          </Reveal>

          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <Reveal as="div" key={t.year} delay={(i % 4) + 1} className="timeline-item">
                <div className="timeline-marker">
                  <span className="triad-dot" data-n={String((i % 3) + 1)} />
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{t.year}</span>
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM INTRO */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Leadership</span>
            <h2>The people steering the ship</h2>
          </Reveal>

          <div className="grid grid-3">
            {LEADERSHIP.map((m, i) => (
              <Reveal as="div" key={m.name} delay={(i % 3) + 1} className="card leader-card">
                <div className="leader-avatar" aria-hidden="true">
                  {m.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </Reveal>
            ))}
          </div>

          <div className="flex-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/portfolio" className="btn btn-outline">
              Meet the Full Team
            </Link>
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
    </>
  )
}