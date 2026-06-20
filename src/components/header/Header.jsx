import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logo from '/favicon.svg'
import './header.css'
import SERVICES_DATA from '../../data/servicesData'

const SERVICES_SUBMENU = SERVICES_DATA.map((s) => ({
    label: s.title,
    to: `/services/${s.slug}`,
    icon: s.icon,
}))

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services', children: SERVICES_SUBMENU },
    { label: 'Packages', to: '/packages' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

    const servicesRef = useRef(null)
    const location = useLocation()
    const isServicesActive = location.pathname.startsWith('/services')

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

    // Close the mobile services accordion whenever the drawer itself closes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (!menuOpen) setMobileServicesOpen(false)
    }, [menuOpen])

    // Close the desktop dropdown on outside click
    useEffect(() => {
        const onClick = (e) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target)) {
                setServicesOpen(false)
            }
        }
        document.addEventListener('mousedown', onClick)
        return () => document.removeEventListener('mousedown', onClick)
    }, [])

    // Close the desktop dropdown on Escape
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setServicesOpen(false)
        }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [])

    // Close any open menus on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setServicesOpen(false)
        setMenuOpen(false)
    }, [location.pathname])

    const closeTimeout = useRef(null)

    const openDropdown = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current)
        }
        setServicesOpen(true)
    }

    const closeDropdown = () => {
        closeTimeout.current = setTimeout(() => {
            setServicesOpen(false)
        }, 150)
    }

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
                            {NAV_LINKS.map((link) =>
                                link.children ? (
                                    <li
                                        key={link.to}
                                        ref={servicesRef}
                                        className={`nav-item has-dropdown ${servicesOpen ? 'is-open' : ''}`}
                                        onMouseEnter={openDropdown}
                                        onMouseLeave={closeDropdown}                                    >
                                        <button
                                            type="button"
                                            className={`nav-link dropdown-trigger ${isServicesActive ? 'active' : ''}`}
                                            aria-haspopup="true"
                                            aria-expanded={servicesOpen}
                                            onClick={() => setServicesOpen((o) => !o)}
                                        >
                                            {link.label}
                                            {/* <svg
                                                className="dropdown-chevron"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                aria-hidden="true"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg> */}
                                        </button>

                                        <div className="dropdown-menu" role="menu">
                                            <div className="dropdown-grid">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.to}
                                                        to={child.to}
                                                        role="menuitem"
                                                        className="dropdown-item"
                                                        onClick={() => setServicesOpen(false)}
                                                    >
                                                        <span className="dropdown-item-icon">{child.icon}</span>
                                                        <span>{child.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                            <Link
                                                to={link.to}
                                                role="menuitem"
                                                className="dropdown-viewall"
                                                onClick={() => setServicesOpen(false)}
                                            >
                                                View All Services
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </li>
                                ) : (
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
                                )
                            )}
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
                    {NAV_LINKS.map((link, index) =>
                        link.children ? (
                            <li
                                key={link.to}
                                className="mobile-has-children"
                                style={{ transitionDelay: `${index * 0.05}s` }}
                            >
                                <div className="mobile-nav-row">
                                    <NavLink
                                        to={link.to}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? 'active' : ''
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                    <button
                                        type="button"
                                        className={`mobile-submenu-toggle ${mobileServicesOpen ? 'is-open' : ''}`}
                                        aria-expanded={mobileServicesOpen}
                                        aria-label="Toggle services submenu"
                                        onClick={() => setMobileServicesOpen((o) => !o)}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                </div>

                                <ul className={`mobile-submenu ${mobileServicesOpen ? 'is-open' : ''}`}>
                                    {link.children.map((child) => (
                                        <li key={child.to}>
                                            <NavLink
                                                to={child.to}
                                                onClick={() => setMenuOpen(false)}
                                                className={({ isActive }) =>
                                                    isActive ? 'active' : ''
                                                }
                                            >
                                                {child.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
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
                        )
                    )}
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