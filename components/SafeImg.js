'use client'

export default function SafeImg({ src, alt, className, style }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={(e) => {
        e.target.style.background = '#ede7d9'
        e.target.src = ''
      }}
    />
  )
}
