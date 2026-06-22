import { useId, type ChangeEventHandler, type CSSProperties } from 'react';

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  id?: string;
  style?: CSSProperties;
};

export default function Checkbox({ label, checked, onChange, disabled = false, id, style }: CheckboxProps) {
  const generatedId = useId();
  const cid = id ?? (label ? `cb-${label.toLowerCase().replace(/\s+/g, '-')}` : generatedId);

  return (
    <label
      htmlFor={cid}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        userSelect: 'none',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-body)',
        ...style,
      }}
    >
      <input
        type="checkbox"
        id={cid}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: 'var(--radius-xs)',
          flexShrink: 0,
          border: `2px solid ${checked ? 'var(--aegean-700)' : 'var(--border-default)'}`,
          background: checked ? 'var(--aegean-700)' : 'var(--white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.15s',
        }}
      >
        {checked && (
          <svg width={11} height={9} viewBox="0 0 11 9" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4.5 4 7.5 10 1" />
          </svg>
        )}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
