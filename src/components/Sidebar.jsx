'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IC } from '@/components/icons';

const ITEMS = [
  { href: '/home',     label: 'Início',   icon: IC.home },
  { href: '/catalogo', label: 'Catálogo', icon: IC.film },
  { href: '/rede',     label: 'Rede',     icon: IC.network },
  { href: '/perfil',   label: 'Perfil',   icon: IC.user },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [hover, setHover] = useState(null);

  return (
    <nav
      style={{
        width: 240,
        flexShrink: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--aegean-950)',
        borderRight: '1px solid rgba(233,216,166,0.10)',
        position: 'sticky',
        top: 0,
        overflowY: 'auto',
      }}
    >
      {/* Logo */}
      <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid rgba(233,216,166,0.12)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, letterSpacing: '0.18em', color: 'var(--papyrus-400)' }}>
          KIMERA
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--aegean-300)', marginTop: 2 }}>
          AUDIOVISUAL
        </div>
      </div>

      {/* Nav items */}
      <div style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {ITEMS.map((item) => {
          const active = pathname === item.href;
          const isHover = hover === item.href;
          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              onMouseEnter={() => setHover(item.href)}
              onMouseLeave={() => setHover(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                cursor: 'pointer',
                background: active ? 'rgba(69,123,157,0.22)' : isHover ? 'rgba(255,255,255,0.06)' : 'transparent',
                color: active ? 'var(--papyrus-300)' : 'var(--ink-300)',
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: active ? 700 : 500,
                letterSpacing: '0.03em',
                transition: 'all 0.15s',
                textAlign: 'left',
              }}
            >
              <span style={{ opacity: active ? 1 : 0.7 }}>{item.icon()}</span>
              {item.label}
              {active && <span style={{ marginLeft: 'auto', width: 4, height: 4, borderRadius: '50%', background: 'var(--aegean-400)' }} />}
            </button>
          );
        })}
      </div>

      {/* User + logout */}
      <div style={{ padding: '16px 14px', borderTop: '1px solid rgba(233,216,166,0.10)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'var(--aegean-600)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://i.pravatar.cc/72?img=3" alt="Maria Oliveira" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, color: 'var(--papyrus-300)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Maria Oliveira
          </div>
          <div style={{ fontSize: 11, color: 'var(--ink-400)', letterSpacing: '0.03em' }}>@mariaoliveira</div>
        </div>
        <button
          onClick={() => router.push('/')}
          title="Sair"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--ink-500)',
            padding: 4,
            display: 'flex',
            borderRadius: 'var(--radius-sm)',
            transition: 'color 0.15s',
          }}
        >
          {IC.logout()}
        </button>
      </div>
    </nav>
  );
}
