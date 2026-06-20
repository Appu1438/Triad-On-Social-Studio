import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '/assets/favicon.svg'
import './header.css'

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Packages', to: '/packages' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24)
        }

        onScroll()

        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 880) {
                setMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <header
                className={`site-header ${scrolled ? 'is-scrolled' : ''}`}
            >
                <div className="container header-inner">
                    <Link
                        to="/"
                        className="brand"
                        onClick={() => setMenuOpen(false)}
                    >
                        <img
                            src={logo}
                            alt="TRIAD"
                            className="brand-logo"
                        />
                    </Link>

                    <nav className="primary-nav">
                        <ul>
                            {NAV_LINKS.map((link) => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link
                            to="/contact"
                            className="btn btn-accent btn-sm header-cta"
                        >
                            Get a Quote
                        </Link>

                        <button
                            className={`burger ${menuOpen ? 'is-open' : ''
                                }`}
                            aria-label={
                                menuOpen ? 'Close menu' : 'Open menu'
                            }
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`mobile-overlay ${menuOpen ? 'is-open' : ''
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            <aside
                className={`mobile-nav ${menuOpen ? 'is-open' : ''
                    }`}
            >
                <ul>
                    {NAV_LINKS.map((link, index) => (
                        <li
                            key={link.to}
                            style={{
                                transitionDelay: `${index * 0.05}s`,
                            }}
                        >
                            <NavLink
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="mobile-cta">
                    <Link
                        to="/contact"
                        className="btn btn-accent"
                        onClick={() => setMenuOpen(false)}
                    >
                        Get a Quote
                    </Link>
                </div>
            </aside>
        </>
    )
}