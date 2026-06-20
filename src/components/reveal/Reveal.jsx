// import { useEffect, useRef } from 'react'

// /**
//  * Reveal — wraps content and fades/slides it in once it enters the viewport.
//  * Used throughout the site to drive scroll-triggered animation.
//  */
// export default function Reveal({ children, as = 'div', delay = 0, className = '', ...rest }) {
//   const ref = useRef(null)
//   const Tag = as

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return

//     if (typeof IntersectionObserver === 'undefined') {
//       el.classList.add('is-visible')
//       return
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('is-visible')
//             observer.unobserve(entry.target)
//           }
//         })
//       },
//       { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
//     )

//     observer.observe(el)
//     return () => observer.disconnect()
//   }, [])

//   const delayClass = delay ? `reveal-delay-${delay}` : ''

//   return (
//     <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()} {...rest}>
//       {children}
//     </Tag>
//   )
// }







import { useEffect, useRef, useState } from 'react'

/**
 * Reveal — wraps content and fades/slides it in once it enters the viewport.
 * Used throughout the site to drive scroll-triggered animation.
 *
 * Fully self-contained: timing is applied via inline styles, so it no longer
 * depends on the .reveal-delay-N helper classes in global.css and is safe to
 * drop in anywhere without extra setup.
 *
 * Props:
 *  - as: element/tag to render (default 'div')
 *  - delay: stagger step (0, 1, 2, 3...) — each step adds `staggerStep` ms
 *  - duration: fade/slide duration in ms (default 1000ms — slow and smooth)
 *  - distance: how far (px) the element travels while fading in (default 40)
 *  - threshold / rootMargin: forwarded to IntersectionObserver to tune when
 *    the reveal fires relative to the viewport
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  duration = 1000,
  distance = 40,
  staggerStep = 140,
  threshold = 0.12,
  rootMargin = '0px 0px -80px 0px',
  className = '',
  style: styleProp,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const Tag = as

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const delayMs = delay ? delay * staggerStep : 0

  // A gentle, evenly-weighted ease (easeOutCubic) reads as slower and
  // smoother than an ease-out-expo curve, which front-loads motion and
  // tends to look like a "snap" even at longer durations.
  const easing = 'cubic-bezier(0.33, 1, 0.68, 1)'

  const baseStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : `translateY(${distance}px)`,
    transition: `opacity ${duration}ms ${easing} ${delayMs}ms, transform ${duration}ms ${easing} ${delayMs}ms`,
    willChange: 'opacity, transform',
  }

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...baseStyle, ...styleProp }}
      {...rest}
    >
      {children}
    </Tag>
  )
}