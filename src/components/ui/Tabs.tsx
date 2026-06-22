'use client';

import type { CSSProperties, ReactNode } from 'react';

type TabVariant = 'line' | 'pill';

export type TabItem = {
  label: string;
  icon?: ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  activeIndex?: number;
  onChange?: (index: number) => void;
  variant?: TabVariant;
  className?: string;
  style?: CSSProperties;
};

export default function Tabs({ tabs, activeIndex = 0, onChange, variant = 'line', className, style }: TabsProps) {
  const isPill = variant === 'pill';

  return (
    <div
      role="tablist"
      className={[
        'flex font-sans',
        isPill ? 'gap-1 bg-papyrus-200 rounded-full p-1' : 'gap-0 border-b border-subtle',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {tabs.map((tab, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={tab.label}
            role="tab"
            aria-selected={active}
            onClick={() => onChange?.(i)}
            className={[
              'flex items-center gap-[7px] text-base cursor-pointer outline-none whitespace-nowrap border-0',
              'transition-[color,border-color,background] duration-150',
              isPill ? 'px-4 py-[7px] rounded-full' : 'px-4 py-[10px] border-b-2',
              active ? 'font-bold text-aegean-700' : 'font-medium text-muted hover:text-strong',
              isPill
                ? active
                  ? 'bg-white shadow-sm'
                  : 'bg-transparent'
                : active
                  ? 'border-aegean-700'
                  : 'border-transparent',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {tab.icon && <span className="flex">{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
