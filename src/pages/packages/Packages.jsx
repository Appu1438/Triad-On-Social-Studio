import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../../components/reveal/Reveal.jsx'
import './packages.css'

const PLANS = [
  {
    name: 'Starter',
    tagline: 'For new brands building their first audience',
    monthly: 799,
    annual: 679,
    popular: false,
    features: [
      'Social media management (2 platforms)',
      'Monthly content calendar',
      'Basic SEO setup',
      'Monthly performance report',
    ],
  },
  {
    name: 'Growth',
    tagline: 'For brands ready to scale acquisition',
    monthly: 1799,
    annual: 1529,
    popular: true,
    features: [
      'Social media management (4 platforms)',
      'Google & Meta Ads management',
      'Ongoing SEO & content strategy',
      'Dedicated account strategist',
      'Bi-weekly reporting calls',
    ],
  },
  {
    name: 'Premium',
    tagline: 'For established brands wanting full-funnel growth',
    monthly: 3200,
    annual: 2720,
    popular: false,
    features: [
      'Everything in Growth',
      'Website & landing page design',
      'Email & lifecycle marketing',
      'Conversion rate optimization',
      'Weekly strategy sessions',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For multi-market or high-volume brands',
    monthly: null,
    annual: null,
    popular: false,
    features: [
      'Everything in Premium',
      'Custom channel mix & team',
      'Dedicated creative pod',
      'Custom attribution modeling',
      'Priority SLA support',
    ],
  },
]

const COMPARISON_ROWS = [
  { label: 'Social media management', values: ['2 platforms', '4 platforms', 'Unlimited', 'Unlimited'] },
  { label: 'Paid ads management', values: [false, true, true, true] },
  { label: 'SEO & content strategy', values: ['Basic', 'Ongoing', 'Advanced', 'Advanced'] },
  { label: 'Web design & development', values: [false, false, true, true] },
  { label: 'Dedicated strategist', values: [false, true, true, true] },
  { label: 'Email & lifecycle marketing', values: [false, false, true, true] },
  { label: 'Reporting cadence', values: ['Monthly', 'Bi-weekly', 'Weekly', 'Custom'] },
  { label: 'Priority support', values: [false, false, false, true] },
]

export default function Packages() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">Packages &amp; Pricing</span>
            <h1>Plans built around how brands actually grow</h1>
            <p className="page-header-sub">
              Transparent pricing, no lock-in surprises. Upgrade, downgrade or customize as your needs
              change.
            </p>
          </Reveal>

          <Reveal as="div" delay={1} className="billing-toggle">
            <span className={!annual ? 'is-active' : ''}>Monthly</span>
            <button
              role="switch"
              aria-checked={annual}
              aria-label="Toggle annual billing"
              className={`toggle-switch ${annual ? 'is-on' : ''}`}
              onClick={() => setAnnual((a) => !a)}
            >
              <span className="toggle-knob" />
            </button>
            <span className={annual ? 'is-active' : ''}>
              Annual <span className="badge badge-accent toggle-badge">Save 15%</span>
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-4 pricing-grid">
            {PLANS.map((p, i) => (
              <Reveal
                as="div"
                key={p.name}
                delay={(i % 4) + 1}
                className={`card pricing-card ${p.popular ? 'is-popular' : ''}`}
              >
                {p.popular && <span className="popular-badge">Most Popular</span>}
                <h3>{p.name}</h3>
                <p className="pricing-tagline">{p.tagline}</p>

                <div className="pricing-amount">
                  {p.monthly ? (
                    <>
                      <span className="price-currency">$</span>
                      <span className="price-value">{annual ? p.annual : p.monthly}</span>
                      <span className="price-period">{annual ? '/ yearly':'/ monthly'}</span>
                    </>
                  ) : (
                    <span className="price-custom">Custom</span>
                  )}
                </div>

                <ul className="triad-list">
                  {p.features.map((f, idx) => (
                    <li key={f}>
                      <span className="triad-dot" data-n={String((idx % 3) + 1)} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn btn-block ${p.popular ? 'btn-accent' : 'btn-outline'}`}
                >
                  {p.monthly ? 'Get Started' : 'Contact Sales'}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section comparison-section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Compare Plans</span>
            <h2>See exactly what's included</h2>
          </Reveal>

          <Reveal as="div" className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.name}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label}>
                    <td className="row-label">{row.label}</td>
                    {row.values.map((v, idx) => (
                      <td key={idx}>
                        {typeof v === 'boolean' ? (
                          v ? (
                            <span className="check-yes" aria-label="Included">
                              ✓
                            </span>
                          ) : (
                            <span className="check-no" aria-label="Not included">
                              —
                            </span>
                          )
                        ) : (
                          v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="cta-panel">
            <h2>Still deciding on the right plan?</h2>
            <p>Book a free strategy call and we'll recommend the package that matches your goals.</p>
            <Link to="/contact" className="btn btn-accent">
              Book a Free Call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}