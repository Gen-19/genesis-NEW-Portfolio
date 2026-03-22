'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onResize = () => {
      if (mq.matches) setOpen(false)
    }
    mq.addEventListener('change', onResize)
    return () => mq.removeEventListener('change', onResize)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          Genesis Obando
        </Link>

        <div className="nav-links-desktop">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link">
              {label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-burger-bar ${open ? 'nav-burger-bar--t' : ''}`} />
          <span className={`nav-burger-bar ${open ? 'nav-burger-bar--m' : ''}`} />
          <span className={`nav-burger-bar ${open ? 'nav-burger-bar--b' : ''}`} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`nav-mobile-panel ${open ? 'nav-mobile-panel--open' : ''}`}
        aria-hidden={!open}
      >
        <div className="nav-mobile-panel-inner">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {open ? (
        <button
          type="button"
          className="nav-mobile-backdrop"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </nav>
  )
}
