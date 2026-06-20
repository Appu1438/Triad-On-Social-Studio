import { useEffect, useRef } from 'react'

/**
 * Reveal — wraps content and fades/slides it in once it enters the viewport.
 * Used throughout the site to drive scroll-triggered animation.
 */
export default function Reveal({ children, as = 'div', delay = 0, className = '', ...rest }) {
  const ref = useRef(null)
  const Tag = as

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}