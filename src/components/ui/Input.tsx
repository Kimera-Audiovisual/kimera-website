'use client';

import { useId, type CSSProperties, type InputHTMLAttributes, type ReactNode } from 'react';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'style'> & {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  hint,
  required = false,
  disabled = false,
  icon,
  className,
  style,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : generatedId);

  return (
    <div className={['flex flex-col gap-[5px]', className ?? ''].filter(Boolean).join(' ')} style={style}>
      {label && (
        <label
          htmlFor={inputId}
          className={[
            'font-sans text-sm font-semibold tracking-wide',
            error ? 'text-danger-500' : 'text-strong',
          ].join(' ')}
        >
          {label}
          {required && <span className="text-terracotta-500 ml-[3px]">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-[11px] top-1/2 -translate-y-1/2 text-muted flex pointer-events-none">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={[
            'w-full box-border font-sans text-base text-strong rounded-input outline-none border',
            'transition-[border-color,box-shadow] duration-150',
            icon ? 'pl-9 pr-[14px] py-[10px]' : 'px-[14px] py-[10px]',
            disabled ? 'bg-papyrus-200 opacity-60' : 'bg-white',
            error
              ? 'border-danger-500'
              : 'border-default focus:border-aegean-500 focus:shadow-[0_0_0_3px_rgba(69,123,157,0.22)]',
          ]
            .filter(Boolean)
            .join(' ')}
          {...rest}
        />
      </div>
      {(error || hint) && (
        <span className={['font-sans text-sm', error ? 'text-danger-500' : 'text-muted'].join(' ')}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
