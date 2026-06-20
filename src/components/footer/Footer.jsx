import { Link } from 'react-router-dom'
import logo from '/favicon.svg'
import './footer.css'

const SERVICE_LINKS = [
  { label: 'Social Media Marketing', slug: 'social-media-marketing' },
  { label: 'SEO Optimization', slug: 'seo-optimization' },
  { label: 'Google Ads', slug: 'google-ads' },
  { label: 'Meta Ads', slug: 'meta-ads' },
  { label: 'Branding', slug: 'branding' },
  { label: 'Web Design', slug: 'web-design' },
]

const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
        <circle cx="7.5" cy="7.2" r="0.4" fill="currentColor" />
        <path d="M11.5 16.5v-3.7a2.2 2.2 0 0 1 4.4 0v3.7" />
        <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M15 4h-2.4A3.6 3.6 0 0 0 9 7.6V10H7v3h2v7h3v-7h2.4l.6-3H12V8a1 1 0 0 1 1-1h2z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="4" y1="4" x2="20" y2="20" />
        <line x1="20" y1="4" x2="4" y2="20" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="container footer-top">
        <div className="footer-col footer-brand-col">
          <Link to="/" className="brand">
            <img src={logo} alt="TRIAD — On Social Studio" className="footer-logo" />
          </Link>
          <p>
            A full-service digital marketing studio blending strategy, creative and performance to help
            ambitious brands grow online.
          </p>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {SERVICE_LINKS.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul className="footer-contact">
            <li>
              <span className="triad-dot" data-n="1" /> hello@triadsocial.studio
            </li>
            <li>
              <span className="triad-dot" data-n="2" /> +1 (555) 204-7890
            </li>
            <li>
              <span className="triad-dot" data-n="3" /> 120 Bayfront Ave, Suite 4, San Diego, CA
            </li>
          </ul>
          <Link to="/contact" className="btn btn-outline btn-sm" style={{ marginTop: '1rem' }}>
            Start a Project
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} TRIAD — On Social Studio. All rights reserved.</p>
        <p className="footer-tagline">We help your brand grow.</p>
      </div>
    </footer>
  )
}