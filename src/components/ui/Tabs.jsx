'use client';

import { useState } from 'react';

export default function Tabs({ tabs = [], activeIndex = 0, onChange, variant = 'line', style }) {
  const [hover, setHover] = useState(null);
  const isPill = variant === 'pill';
  const isLine = variant === 'line';

  return (
    <div
      role="tablist"
      style={{
        display: 'flex',
        gap: isPill ? 4 : 0,
        borderBottom: isLine ? '1px solid var(--border-subtle)' : 'none',
        background: isPill ? 'var(--papyrus-200)' : 'transparent',
        borderRadius: isPill ? 'var(--radius-full)' : 0,
        padding: isPill ? '4px' : 0,
        ...style,
      }}
    >
      {tabs.map((tab, i) => {
        const active = i === activeIndex;
        const isHover = hover === i;
        return (
          <button
            key={i}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-base)',
              fontWeight: active ? 700 : 500,
              color: active ? 'var(--aegean-700)' : isHover ? 'var(--text-strong)' : 'var(--text-muted)',
              background: isPill && active ? 'var(--white)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: isPill ? '7px 16px' : '10px 16px',
              borderRadius: isPill ? 'var(--radius-full)' : 0,
              borderBottom: isLine ? `2px solid ${active ? 'var(--aegean-700)' : 'transparent'}` : 'none',
              transition: 'color 0.15s, border-color 0.15s, background 0.15s',
              boxShadow: isPill && active ? 'var(--shadow-sm)' : 'none',
              whiteSpace: 'nowrap',
              outline: 'none',
            }}
          >
            {tab.icon && <span style={{ display: 'flex' }}>{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
