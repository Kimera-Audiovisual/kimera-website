import Sidebar from '@/components/Sidebar';

export default function AppLayout({ children }) {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--ink-950)' }}>
      <Sidebar />
      {children}
    </div>
  );
}
