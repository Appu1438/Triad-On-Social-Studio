import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../../components/reveal/Reveal'
import './faq.css'

const CATEGORIES = ['General', 'Pricing', 'Services', 'Process']

const FAQS = [
  {
    category: 'General',
    q: 'What industries does TRIAD work with?',
    a: 'We specialize in e-commerce, SaaS and hospitality brands, but our process applies to any company that sells online and wants marketing tied directly to revenue.',
  },
  {
    category: 'General',
    q: 'Do you work with brands outside the United States?',
    a: 'Yes. Roughly a third of our current clients are based outside the US, and our reporting and calls are scheduled around your timezone.',
  },
  {
    category: 'General',
    q: 'How long has TRIAD been in business?',
    a: 'TRIAD launched in 2019 and has grown into a full-funnel studio working with over 180 brands across seven years.',
  },
  {
    category: 'Pricing',
    q: 'How is pricing structured?',
    a: 'Pricing is a flat monthly retainer based on the package you choose, with an option to pay annually for a 15% discount. Ad spend is billed separately, directly to your accounts.',
  },
  {
    category: 'Pricing',
    q: 'Is there a minimum contract length?',
    a: 'Most engagements start with a 3-month minimum so strategy has time to compound, then move to month-to-month after that.',
  },
  {
    category: 'Pricing',
    q: 'Can I switch packages later?',
    a: 'Yes, you can upgrade or downgrade your package at the start of any billing cycle as your needs change.',
  },
  {
    category: 'Services',
    q: 'Can I hire TRIAD for a single service instead of a full package?',
    a: 'Absolutely. Many clients start with one service, like SEO or paid ads, and expand into a full package once they see results.',
  },
  {
    category: 'Services',
    q: 'Do you provide the ad spend budget?',
    a: 'No — ad spend is paid by you directly to Google, Meta or other platforms. Our fee covers strategy, management and optimization of that budget.',
  },
  {
    category: 'Services',
    q: 'Will I own the creative assets and accounts?',
    a: 'Yes. All ad accounts, creative files and brand assets remain fully owned by you, even if you decide to part ways.',
  },
  {
    category: 'Process',
    q: 'What happens after I sign up?',
    a: 'You will meet your dedicated strategist for a kickoff call within 3 business days, followed by a 2-week discovery and audit phase before launch.',
  },
  {
    category: 'Process',
    q: 'How often will I hear from my team?',
    a: 'You will get a live dashboard plus a recurring check-in call — cadence depends on your package, ranging from monthly to weekly.',
  },
  {
    category: 'Process',
    q: 'How soon can I expect results?',
    a: 'Paid channels typically show early signals within 2-4 weeks, while SEO and content compound over 3-6 months. We set realistic milestones during onboarding.',
  },
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General')
  const [openIndex, setOpenIndex] = useState(0)

  const visible = FAQS.filter((f) => f.category === activeCategory)

  const handleCategory = (cat) => {
    setActiveCategory(cat)
    setOpenIndex(0)
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">FAQ</span>
            <h1>Answers before you even have to ask</h1>
            <p className="page-header-sub">
              Can't find what you're looking for? Reach out and a real strategist will answer directly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <Reveal as="nav" className="faq-categories" aria-label="FAQ categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`faq-category-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => handleCategory(cat)}
              >
                <span className="triad-dot" data-n={String((CATEGORIES.indexOf(cat) % 3) + 1)} />
                {cat}
              </button>
            ))}
          </Reveal>

          <div className="faq-accordion">
            {visible.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <Reveal as="div" key={item.q} delay={(i % 4) + 1} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div className="faq-answer" style={{ maxHeight: isOpen ? '320px' : '0px' }}>
                    <p>{item.a}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="cta-panel">
            <h2>Still have questions?</h2>
            <p>Send us a message and we'll get back to you within one business day.</p>
            <Link to="/contact" className="btn btn-accent">
              Contact Our Team
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}