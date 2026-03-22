'use client'

import { useEffect, useRef } from 'react'

const INSTAGRAM_SCRIPT = 'https://www.instagram.com/embed.js'

function ensureInstagramScript() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return
    if (window.instgrm?.Embeds) {
      resolve()
      return
    }
    const existing = document.querySelector(`script[src="${INSTAGRAM_SCRIPT}"]`)
    if (existing) {
      if (window.instgrm?.Embeds) {
        resolve()
        return
      }
      existing.addEventListener('load', () => resolve(), { once: true })
      queueMicrotask(() => {
        if (window.instgrm?.Embeds) resolve()
      })
      return
    }
    const script = document.createElement('script')
    script.src = INSTAGRAM_SCRIPT
    script.async = true
    script.onload = () => resolve()
    document.body.appendChild(script)
  })
}

/**
 * Instagram's embed.js replaces the blockquote subtree. If that blockquote is
 * rendered by React, the DOM no longer matches React's tree → hydration errors.
 * We mount the embed with plain DOM APIs inside a ref so React only owns an
 * empty shell; Instagram can rewrite the contents freely.
 */
export default function InstagramEmbed({ permalink }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const root = mountRef.current
    if (!root) return

    root.textContent = ''

    const blockquote = document.createElement('blockquote')
    blockquote.className = 'instagram-media'
    blockquote.setAttribute('data-instgrm-captioned', '')
    blockquote.setAttribute('data-instgrm-permalink', permalink)
    blockquote.setAttribute('data-instgrm-version', '14')
    Object.assign(blockquote.style, {
      background: 'rgba(245, 240, 232, 0.45)',
      border: '0',
      borderRadius: '4px',
      boxShadow: 'inset 0 0 0 1px rgba(212, 201, 176, 0.5)',
      margin: '1px auto',
      maxWidth: '540px',
      minWidth: '326px',
      padding: '0',
      width: '99.375%',
    })

    const inner = document.createElement('div')
    Object.assign(inner.style, {
      padding: '10px 14px',
      minHeight: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    })
    const a = document.createElement('a')
    a.href = permalink
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    Object.assign(a.style, {
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: '0.65rem',
      fontWeight: '500',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'rgba(90, 90, 90, 0.75)',
      textDecoration: 'none',
    })
    a.textContent = 'Loading'
    inner.appendChild(a)
    blockquote.appendChild(inner)
    root.appendChild(blockquote)

    ensureInstagramScript().then(() => {
      if (window.instgrm?.Embeds) window.instgrm.Embeds.process()
    })

    return () => {
      root.textContent = ''
    }
  }, [permalink])

  return (
    <div className="insta-wrapper flex justify-center">
      <div
        ref={mountRef}
        className="instagram-embed-root"
        style={{ width: '100%', maxWidth: 540 }}
      />
    </div>
  )
}
