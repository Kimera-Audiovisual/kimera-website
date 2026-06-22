'use client';

import { useState, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'ghost-dark';
type ButtonSize = 'sm' | 'md' | 'lg';

type VariantStyles = {
  bg: string;
  bgH: string;
  color: string;
  border: string;
};

const VARIANTS: Record<ButtonVariant, VariantStyles> = {
  primary: { bg: 'var(--aegean-700)', bgH: 'var(--aegean-600)', color: 'var(--papyrus-100)', border: '1px solid transparent' },
  secondary: { bg: 'var(--papyrus-500)', bgH: 'var(--papyrus-400)', color: 'var(--aegean-900)', border: '1px solid transparent' },
  ghost: { bg: 'transparent', bgH: 'var(--aegean-100)', color: 'var(--aegean-700)', border: '1px solid transparent' },
  outline: { bg: 'transparent', bgH: 'var(--aegean-100)', color: 'var(--aegean-700)', border: '1px solid var(--aegean-700)' },
  danger: { bg: 'var(--terracotta-500)', bgH: 'var(--terracotta-600)', color: '#fff', border: '1px solid transparent' },
  'ghost-dark': { bg: 'transparent', bgH: 'rgba(255,255,255,0.09)', color: 'var(--papyrus-300)', border: '1px solid transparent' },
};

const SIZES: Record<ButtonSize, CSSProperties> = {
  sm: { fontSize: 'var(--text-sm)', padding: '6px 14px' },
  md: { fontSize: 'var(--text-base)', padding: '9px 20px' },
  lg: { fontSize: 'var(--text-md)', padding: '12px 28px' },
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  style,
  ...rest
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const isDisabled = disabled || loading;
  const v = VARIANTS[variant];

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        outline: 'none',
        textDecoration: 'none',
        border: v.border,
        borderRadius: 'var(--radius-btn)',
        lineHeight: 1.4,
        background: hover && !isDisabled ? v.bgH : v.bg,
        color: v.color,
        opacity: isDisabled ? 0.45 : 1,
        transform: pressed && !isDisabled ? 'scale(0.97)' : 'scale(1)',
        transition: 'background 0.15s, transform 0.1s, opacity 0.15s',
        width: fullWidth ? '100%' : undefined,
        ...SIZES[size],
        ...style,
      }}
      {...rest}
    >
      {loading && (
        <span
          style={{
            width: 13,
            height: 13,
            borderRadius: '50%',
            border: '2px solid currentColor',
            borderTopColor: 'transparent',
            animation: 'spin 0.6s linear infinite',
          }}
        />
      )}
      {icon && !loading && <span style={{ display: 'flex' }}>{icon}</span>}
      {children}
      {iconRight && <span style={{ display: 'flex' }}>{iconRight}</span>}
    </button>
  );
}
