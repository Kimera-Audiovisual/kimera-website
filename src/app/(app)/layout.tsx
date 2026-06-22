import Sidebar from '@/components/Sidebar';
import type { ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--ink-950)' }}>
      <Sidebar />
      {children}
    </div>
  );
}
