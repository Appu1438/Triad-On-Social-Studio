import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import './serviceDetail.css'
import Reveal from '../../components/reveal/Reveal.jsx'
import SERVICES_DATA, { getServiceBySlug } from '../../data/servicesData.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const [openFaq, setOpenFaq] = useState(0)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug)

  return (
    <>
      {/* HEADER */}
      <section className="page-header service-detail-header">
        <div className="container">
          <Reveal as="div" className="breadcrumb">
            <Link to="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span>{service.title}</span>
          </Reveal>

          <Reveal as="div" delay={1} className="service-hero-row">
            <div className="service-hero-copy">
              <span className="eyebrow">Service</span>
              <h1>{service.title}</h1>
              <p className="page-header-sub">{service.heroDesc}</p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/services" className="btn btn-outline">
                  All Services
                </Link>
              </div>
            </div>
            <div className="service-hero-icon" aria-hidden="true">
              {service.icon}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section-tight stats-strip">
        <div className="container stats-grid">
          {service.stats.map((s, i) => (
            <Reveal as="div" key={s.label} delay={(i % 3) + 1} className="stat-item">
              <span className="stat-number">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container overview-grid">
          <Reveal as="div" className="overview-copy">
            <span className="eyebrow">Overview</span>
            <h2>How we approach {service.title.toLowerCase()}</h2>
            {service.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal as="div" delay={2} className="included-panel glass-panel">
            <h4>What's Included</h4>
            <ul className="triad-list">
              {service.included.map((item, idx) => (
                <li key={item}>
                  <span className="triad-dot" data-n={String((idx % 3) + 1)} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section benefits-section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Why It Works</span>
            <h2>Built for results, not just activity</h2>
          </Reveal>

          <div className="grid grid-4">
            {service.benefits.map((b, i) => (
              <Reveal as="div" key={b.title} delay={(i % 4) + 1} className="card benefit-card">
                <span className="triad-dot" data-n={String((i % 3) + 1)} />
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Our Process</span>
            <h2>How a {service.title.toLowerCase()} engagement runs</h2>
          </Reveal>

          <div className="grid grid-4 process-grid">
            {service.process.map((p, i) => (
              <Reveal as="div" key={p.step} delay={(i % 4) + 1} className="process-step">
                <span className="process-number">{p.step}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="card case-study-banner">
            <div className="case-study-banner-text">
              <span className="badge badge-secondary">{service.caseStudy.tag}</span>
              <h3>{service.caseStudy.client}</h3>
              <p>{service.caseStudy.desc}</p>
            </div>
            <div className="case-study-banner-result">
              <span className="stat-number">{service.caseStudy.result}</span>
              <Link to="/portfolio" className="btn btn-outline btn-sm">
                View Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions about this service</h2>
          </Reveal>

          <div className="faq-accordion service-faq">
            {service.faqs.map((item, i) => {
              const isOpen = openFaq === i
              return (
                <Reveal as="div" key={item.q} delay={(i % 3) + 1} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button className="faq-question" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : i)}>
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div className="faq-answer" style={{ maxHeight: isOpen ? '240px' : '0px' }}>
                    <p>{item.a}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="cta-panel">
            <h2>Ready to get started with {service.title}?</h2>
            <p>Tell us about your goals and we'll map out exactly how this service fits your growth plan.</p>
            <Link to="/contact" className="btn btn-accent">
              Talk to a Strategist
            </Link>
          </Reveal>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section-tight other-services-section">
        <div className="container">
          <Reveal as="div" className="section-heading text-center">
            <span className="eyebrow">Explore More</span>
            <h2>Other services that pair well</h2>
          </Reveal>

          <div className="other-services-row">
            {otherServices.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="other-service-chip">
                <span className="other-service-icon">{s.icon}</span>
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}