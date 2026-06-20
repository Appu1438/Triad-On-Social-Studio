import { useEffect, useState } from 'react'
import './backToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
      setVisible(scrollTop > 420)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const circumference = 2 * Math.PI * 19

  return (
    <button
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <svg className="ring" viewBox="0 0 44 44">
        <circle className="ring-track" cx="22" cy="22" r="19" />
        <circle
          className="ring-progress"
          cx="22"
          cy="22"
          r="19"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference - (progress / 100) * circumference,
          }}
        />
      </svg>
      <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 19V5" strokeLinecap="round" />
        <path d="M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}