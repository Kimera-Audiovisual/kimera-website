'use client';

import { useState } from 'react';

export default function PosterCard({ title, genre, year, duration, src, rating, onClick, style }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-poster)',
        overflow: 'hidden',
        cursor: 'pointer',
        width: '100%',
        aspectRatio: '2/3',
        background: 'var(--ink-800)',
        boxShadow: hover
          ? '0 12px 40px rgba(0,0,0,0.55), 0 4px 12px rgba(0,0,0,0.30)'
          : '0 4px 20px rgba(0,0,0,0.40)',
        transform: hover ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
        transition: 'transform 0.22s ease-out, box-shadow 0.22s ease-out',
        ...style,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {src && (
        <img
          src={src}
          alt={title || ''}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(12,15,21,0.92) 0%, rgba(12,15,21,0.4) 50%, transparent 100%)',
          opacity: hover ? 1 : 0.75,
          transition: 'opacity 0.22s',
        }}
      />
      {hover && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 48,
            height: 48,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width={20} height={20} viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </div>
      )}
      {rating && (
        <div
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            background: 'var(--papyrus-600)',
            color: 'var(--aegean-950)',
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            fontWeight: 800,
            padding: '2px 7px',
            borderRadius: 'var(--radius-sm)',
            letterSpacing: '0.06em',
          }}
        >
          ★ {rating}
        </div>
      )}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 10px 10px' }}>
        {genre && (
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 800, letterSpacing: '0.12em', color: 'var(--papyrus-600)', textTransform: 'uppercase', marginBottom: 3 }}>
            {genre}
          </div>
        )}
        {title && (
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--papyrus-100)', lineHeight: 1.25 }}>
            {title}
          </div>
        )}
        {(year || duration) && (
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, color: 'var(--ink-300)', marginTop: 3 }}>
            {[year, duration].filter(Boolean).join(' · ')}
          </div>
        )}
      </div>
    </div>
  );
}
