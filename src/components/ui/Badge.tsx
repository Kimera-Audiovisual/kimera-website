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

const VARIANTS: Record<BadgeVariant, string> = {
  brand: 'bg-aegean-700 text-papyrus-100',
  gold: 'bg-papyrus-500 text-aegean-900',
  terracotta: 'bg-terracotta-500 text-white',
  success: 'bg-laurel-100 text-laurel-500',
  warning: 'bg-amber-100 text-amber-500',
  danger: 'bg-danger-100 text-danger-500',
  info: 'bg-info-100 text-info-500',
  default: 'bg-ink-100 text-ink-600',
  cinema: 'bg-ink-800 text-ink-200',
};

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function Badge({ children, variant = 'default', dot = false, className, style }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-[5px] font-sans text-xs font-bold tracking-widest',
        'px-[10px] py-[3px] rounded-full uppercase leading-[1.4]',
        VARIANTS[variant],
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {dot && <span className="w-[6px] h-[6px] rounded-full bg-current" />}
      {children}
    </span>
  );
}
