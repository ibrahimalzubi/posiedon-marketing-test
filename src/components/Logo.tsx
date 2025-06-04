// src/components/Logo.tsx
import React from 'react'

/**
 * Poseidon Logo – 45° trident + word-mark
 *
 * • The SVG’s viewBox is wide enough (200 × 40) to fit both icon and text.
 * • All strokes / fills inherit the current text color by default, so
 *   <Logo className="h-10 text-sky-500" /> will tint both elements.
 */
export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 40"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...props}             // lets you pass className, width, height…
    >
      {/* === 45°-rotated trident === */}
      <g transform="rotate(45 20 20)">
        {/* Center shaft */}
        <path d="M20 5 L20 30" />

        {/* Center spearhead */}
        <path d="M20 5 L17 8" />
        <path d="M20 5 L23 8" />

        {/* Left prong */}
        <path d="M10 15 L10 30" />
        <path d="M10 15 L7 18" />
        <path d="M10 15 L13 18" />

        {/* Right prong */}
        <path d="M30 15 L30 30" />
        <path d="M30 15 L27 18" />
        <path d="M30 15 L33 18" />

        {/* Handle cross-guard */}
        <path d="M10 30 L30 30" />
      </g>

      {/* === Word-mark === */}
      <text
        x="55"           /* horizontal offset so it clears the icon */
        y="26"           /* vertical baseline; tweak as needed */
        fontFamily="inherit"
        fontSize="20"
        fontWeight="700"
        letterSpacing="2"
        fill="currentColor"
      >
        POSEIDON
      </text>
    </svg>
  )
}
