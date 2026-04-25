import React from "react";

// Reusable temple motif decorations (om, lotus, mandala, kalash)
export const OmIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 22c-6 2-9 7-9 12s4 10 11 10c8 0 11-6 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M35 28c0-5 4-8 9-8s9 4 9 9-5 9-10 9c-3 0-6-1-7-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M30 12c-2-1-5-1-7 1-2 2-2 5 0 7 2 1 4 1 6 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="46" cy="14" r="2.2" fill="currentColor"/>
    <path d="M40 20c2-2 5-4 8-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const LotusIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12c-3 8-3 14 0 22 3-8 3-14 0-22z" fill="currentColor" opacity=".9"/>
    <path d="M18 20c0 8 4 14 14 14C28 26 22 22 18 20z" fill="currentColor" opacity=".7"/>
    <path d="M46 20c0 8-4 14-14 14 4-8 10-12 14-14z" fill="currentColor" opacity=".7"/>
    <path d="M8 30c4 8 12 12 24 4-6-2-14-2-24-4z" fill="currentColor" opacity=".55"/>
    <path d="M56 30c-4 8-12 12-24 4 6-2 14-2 24-4z" fill="currentColor" opacity=".55"/>
    <path d="M10 38c8 10 36 10 44 0-12 6-32 6-44 0z" fill="currentColor" opacity=".4"/>
  </svg>
);

export const MandalaIcon = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="0.6" fill="none">
      <circle cx="50" cy="50" r="48"/>
      <circle cx="50" cy="50" r="36"/>
      <circle cx="50" cy="50" r="22"/>
      <circle cx="50" cy="50" r="10"/>
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={i} x1="50" y1="2" x2="50" y2="98"
          transform={`rotate(${(360 / 16) * i} 50 50)`} />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <path key={i} d="M50 14 Q56 30 50 46 Q44 30 50 14"
          transform={`rotate(${(360 / 8) * i} 50 50)`} />
      ))}
    </g>
  </svg>
);

export const Divider = () => (
  <div className="flex items-center justify-center gap-4 my-10 text-brass-gold">
    <span className="h-px w-16 sm:w-24 bg-brass-gold/50"/>
    <OmIcon className="w-6 h-6"/>
    <span className="h-px w-16 sm:w-24 bg-brass-gold/50"/>
  </div>
);

export const ArchFrame = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden border border-brass-gold/40 bg-white ${className}`}
       style={{ borderTopLeftRadius: "9999px", borderTopRightRadius: "9999px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
    {children}
  </div>
);
