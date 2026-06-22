'use client';

import {
  useId,
  useState,
  type CSSProperties,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'style'> & {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
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
  style,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const [focused, setFocused] = useState(false);
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : generatedId);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
            color: error ? 'var(--danger-500)' : 'var(--text-strong)',
            letterSpacing: 'var(--tracking-wide)',
          }}
        >
          {label}
          {required && <span style={{ color: 'var(--terracotta-500)', marginLeft: 3 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        {icon && (
          <span
            style={{
              position: 'absolute',
              left: 11,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
              display: 'flex',
              pointerEvents: 'none',
            }}
          >
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
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-base)',
            color: 'var(--text-strong)',
            background: disabled ? 'var(--papyrus-200)' : 'var(--white)',
            border: `1px solid ${error ? 'var(--danger-500)' : focused ? 'var(--aegean-500)' : 'var(--border-default)'}`,
            borderRadius: 'var(--radius-input)',
            padding: icon ? '10px 14px 10px 36px' : '10px 14px',
            outline: 'none',
            boxShadow: focused ? '0 0 0 3px rgba(69,123,157,0.22)' : 'none',
            transition: 'border-color 0.15s, box-shadow 0.15s',
            opacity: disabled ? 0.6 : 1,
          }}
          {...rest}
        />
      </div>
      {(error || hint) && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-sm)',
            color: error ? 'var(--danger-500)' : 'var(--text-muted)',
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
