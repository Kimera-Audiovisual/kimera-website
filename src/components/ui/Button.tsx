import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'ghost-dark';
type ButtonSize = 'sm' | 'md' | 'lg';

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-aegean-700 hover:bg-aegean-600 text-papyrus-100 border border-transparent',
  secondary: 'bg-papyrus-500 hover:bg-papyrus-400 text-aegean-900 border border-transparent',
  ghost: 'bg-transparent hover:bg-aegean-100 text-aegean-700 border border-transparent',
  outline: 'bg-transparent hover:bg-aegean-100 text-aegean-700 border border-aegean-700',
  danger: 'bg-terracotta-500 hover:bg-terracotta-600 text-white border border-transparent',
  'ghost-dark': 'bg-transparent hover:bg-white/[0.09] text-papyrus-300 border border-transparent',
};

const SIZES: Record<ButtonSize, string> = {
  sm: 'text-sm px-[14px] py-[6px]',
  md: 'text-base px-5 py-[9px]',
  lg: 'text-md px-7 py-3',
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
  className,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      className={[
        'inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide',
        'whitespace-nowrap cursor-pointer outline-none no-underline leading-[1.4] rounded-btn',
        'transition-[background,transform,opacity] duration-150',
        'active:scale-[0.97] disabled:opacity-45 disabled:cursor-not-allowed',
        VARIANTS[variant],
        SIZES[size],
        fullWidth ? 'w-full' : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {loading && (
        <span className="w-[13px] h-[13px] rounded-full border-2 border-current border-t-transparent animate-spin" />
      )}
      {icon && !loading && <span className="flex">{icon}</span>}
      {children}
      {iconRight && <span className="flex">{iconRight}</span>}
    </button>
  );
}
