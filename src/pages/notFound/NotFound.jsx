import { Link } from 'react-router-dom'
import './notFound.css'
import Reveal from '../../components/reveal/Reveal'

const QUICK_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound-orbit" aria-hidden="true">
        <span className="nf-node nf-node-1" />
        <span className="nf-node nf-node-2" />
        <span className="nf-node nf-node-3" />
        <svg className="nf-lines" viewBox="0 0 600 600">
          <line x1="300" y1="120" x2="120" y2="460" />
          <line x1="300" y1="120" x2="480" y2="460" />
          <line x1="120" y1="460" x2="480" y2="460" />
        </svg>
      </div>

      <div className="container notfound-inner">
        <Reveal as="div">
          <span className="notfound-code text-gradient">404</span>
          <h1>This page wandered off the growth path</h1>
          <p className="page-header-sub text-center">
            The page you're looking for doesn't exist, was moved, or never made it past the strategy
            phase.
          </p>

          <div className="flex-center" style={{ marginTop: '2rem' }}>
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
          </div>

          <ul className="notfound-links">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}