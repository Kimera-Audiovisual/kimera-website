import type { CSSProperties, ReactNode } from 'react';

type BadgeVariant =
  | 'brand'
  | 'gold'
  | 'terracotta'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default'
  | 'cinema';

const VARIANTS: Record<BadgeVariant, CSSProperties> = {
  brand: { background: 'var(--aegean-700)', color: 'var(--papyrus-100)' },
  gold: { background: 'var(--papyrus-500)', color: 'var(--aegean-900)' },
  terracotta: { background: 'var(--terracotta-500)', color: '#fff' },
  success: { background: 'var(--laurel-100)', color: 'var(--laurel-500)' },
  warning: { background: 'var(--amber-100)', color: 'var(--amber-500)' },
  danger: { background: 'var(--danger-100)', color: 'var(--danger-500)' },
  info: { background: 'var(--info-100)', color: 'var(--info-500)' },
  default: { background: 'var(--ink-100)', color: 'var(--ink-600)' },
  cinema: { background: 'var(--ink-800)', color: 'var(--ink-200)' },
};

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  style?: CSSProperties;
};

export default function Badge({ children, variant = 'default', dot = false, style }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-widest)',
        padding: '3px 10px',
        borderRadius: 'var(--radius-badge)',
        textTransform: 'uppercase',
        lineHeight: 1.4,
        ...VARIANTS[variant],
        ...style,
      }}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
