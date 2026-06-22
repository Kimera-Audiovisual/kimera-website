'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { IC } from '@/components/icons';

const ITEMS = [
  { href: '/home', label: 'Início', icon: IC.home },
  { href: '/catalogo', label: 'Catálogo', icon: IC.film },
  { href: '/rede', label: 'Rede', icon: IC.network },
  { href: '/perfil', label: 'Perfil', icon: IC.user },
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Mobile: barra inferior fixa */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 z-50 flex justify-around items-stretch bg-aegean-950 border-t border-t-[rgba(233,216,166,0.12)] md:hidden">
        {ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={[
                'flex-1 flex flex-col items-center justify-center gap-[3px] border-0 cursor-pointer bg-transparent',
                'font-sans text-[10px] tracking-[0.03em] py-[6px]',
                active ? 'text-papyrus-300 font-bold' : 'text-ink-300 font-medium',
              ].join(' ')}
            >
              <span className={['flex', active ? 'opacity-100' : 'opacity-70'].join(' ')}>{item.icon()}</span>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Desktop: barra lateral */}
      <nav className="hidden md:flex w-60 shrink-0 h-screen flex-col bg-aegean-950 border-r border-r-[rgba(233,216,166,0.10)] sticky top-0 overflow-y-auto">
        <div className="px-5 pt-6 pb-5 border-b border-b-[rgba(233,216,166,0.12)]">
          <div className="font-display text-[22px] font-black tracking-[0.18em] text-papyrus-400">KIMERA</div>
          <div className="font-sans text-[10px] tracking-[0.16em] text-aegean-300 mt-[2px]">AUDIOVISUAL</div>
        </div>

        <div className="flex-1 px-3 py-4 flex flex-col gap-1">
          {ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className={[
                  'flex items-center gap-3 w-full px-[14px] py-[10px] rounded-md border-0 cursor-pointer',
                  'font-sans text-[14px] tracking-[0.03em] transition-all duration-150 text-left',
                  active
                    ? 'bg-[rgba(69,123,157,0.22)] text-papyrus-300 font-bold'
                    : 'bg-transparent text-ink-300 font-medium hover:bg-white/[0.06]',
                ].join(' ')}
              >
                <span className={active ? 'opacity-100' : 'opacity-70'}>{item.icon()}</span>
                {item.label}
                {active && <span className="ml-auto w-1 h-1 rounded-full bg-aegean-400" />}
              </button>
            );
          })}
        </div>

        <div className="px-[14px] py-4 border-t border-t-[rgba(233,216,166,0.10)] flex items-center gap-[10px]">
          <div className="w-9 h-9 rounded-full bg-aegean-600 flex items-center justify-center shrink-0 overflow-hidden relative">
            <Image src="/assets/perfil.png" alt="Marina Martins" fill sizes="36px" className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-sans text-[13px] font-bold text-papyrus-300 overflow-hidden text-ellipsis whitespace-nowrap">
              Marina Martins
            </div>
            <div className="text-[11px] text-ink-400 tracking-[0.03em]">@marinamartins</div>
          </div>
          <button
            onClick={() => router.push('/')}
            title="Sair"
            className="bg-none border-0 cursor-pointer text-ink-500 p-1 flex rounded-sm transition-colors duration-150 hover:text-ink-300"
          >
            {IC.logout()}
          </button>
        </div>
      </nav>
    </>
  );
}
