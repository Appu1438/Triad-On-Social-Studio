import { useState } from 'react'
import Reveal from '../../components/reveal/Reveal'
import './contact.css'

const INFO_CARDS = [
    {
        title: 'Email Us',
        value: 'hello@triadsocial.studio',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3.5 6.5l8.5 6 8.5-6" />
            </svg>
        ),
    },
    {
        title: 'Call Us',
        value: '+1 (555) 204-7890',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5.5 4.5h3l1.5 4-2 1.5a13 13 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3.5 6.7a2 2 0 0 1 2-2.2z" />
            </svg>
        ),
    },
    {
        title: 'Visit Us',
        value: '120 Bayfront Ave, Suite 4, San Diego, CA',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.4" />
            </svg>
        ),
    },
]

const HOURS = [
    { day: 'Monday – Thursday', time: '9:00 AM – 6:00 PM' },
    { day: 'Friday', time: '9:00 AM – 4:00 PM' },
    { day: 'Saturday – Sunday', time: 'Closed' },
]

const SOCIALS = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'X', href: 'https://x.com' },
]

const MAP_SRC =
    'https://www.google.com/maps?q=120+Bayfront+Ave+San+Diego+CA&output=embed'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | submitting | sent

    const handleChange = (e) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('submitting')
        setTimeout(() => {
            setStatus('sent')
        }, 900)
    }

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <Reveal as="div">
                        <span className="eyebrow">Contact</span>
                        <h1>Let's talk about where your brand goes next</h1>
                        <p className="page-header-sub">
                            Tell us a bit about your goals and a strategist will get back to you within one business
                            day.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">
                    {/* FORM */}
                    <Reveal as="div" className="card contact-form-card">
                        {status === 'sent' ? (
                            <div className="form-success">
                                <div className="success-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3>Message sent</h3>
                                <p>Thanks for reaching out — we'll be in touch within one business day.</p>
                                <button className="btn btn-outline btn-sm" onClick={() => setStatus('idle')}>
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h3>Send us a message</h3>
                                <div className="grid grid-2">
                                    <div className="field">
                                        <label htmlFor="name">Full Name</label>
                                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">Email Address</label>
                                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="grid grid-2">
                                    <div className="field">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="subject">Subject</label>
                                        <select id="subject" name="subject" required value={form.subject} onChange={handleChange}>
                                            <option value="">Select a topic</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="services">Services &amp; Pricing</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="support">Existing Client Support</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your brand and goals..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </Reveal>

                    {/* INFO SIDEBAR */}
                    <div className="contact-side">
                        {INFO_CARDS.map((c, i) => (
                            <Reveal as="div" key={c.title} delay={(i % 3) + 1} className="card info-card">
                                <div className="card-icon">{c.icon}</div>
                                <div>
                                    <h4>{c.title}</h4>
                                    <p>{c.value}</p>
                                </div>
                            </Reveal>
                        ))}

                        <Reveal as="div" delay={1} className="card hours-card">
                            <h4>Business Hours</h4>
                            <ul className="hours-list">
                                {HOURS.map((h) => (
                                    <li key={h.day}>
                                        <span>{h.day}</span>
                                        <span>{h.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal as="div" delay={2} className="card socials-card">
                            <h4>Follow Along</h4>
                            <ul className="contact-socials">
                                {SOCIALS.map((s) => (
                                    <li key={s.label}>
                                        <a href={s.href} target="_blank" rel="noopener noreferrer">
                                            {s.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="section-tight">
                <div className="container">
                    <Reveal as="div" className="map-embed">
                        <iframe
                            title="TRIAD office location"
                            src={MAP_SRC}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </Reveal>
                </div>
            </section>
        </>
    )
}