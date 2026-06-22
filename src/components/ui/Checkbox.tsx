import { useId, type ChangeEventHandler, type CSSProperties } from 'react';

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
};

export default function Checkbox({ label, checked, onChange, disabled = false, id, className, style }: CheckboxProps) {
  const generatedId = useId();
  const cid = id ?? (label ? `cb-${label.toLowerCase().replace(/\s+/g, '-')}` : generatedId);

  return (
    <label
      htmlFor={cid}
      className={[
        'inline-flex items-center gap-[10px] select-none font-sans text-base text-body',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <input
        type="checkbox"
        id={cid}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="absolute opacity-0 w-0 h-0"
      />
      <span
        className={[
          'w-[18px] h-[18px] rounded-xs shrink-0 border-2 flex items-center justify-center transition-all duration-150',
          checked ? 'border-aegean-700 bg-aegean-700' : 'border-default bg-white',
        ].join(' ')}
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
