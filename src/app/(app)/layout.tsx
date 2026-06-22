'use client';

import Sidebar from '@/components/Sidebar';
import type { ReactNode } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        minHeight: '100vh',
        height: isMobile ? 'auto' : '100vh',
        overflow: isMobile ? 'visible' : 'hidden',
        background: 'var(--ink-950)',
      }}
    >
      <Sidebar />
      {isMobile ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingBottom: 64 }}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
}
