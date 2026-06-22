import Sidebar from '@/components/Sidebar';
import type { ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen overflow-visible md:overflow-hidden bg-ink-950">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 min-h-0 pb-16 md:pb-0">{children}</div>
    </div>
  );
}
