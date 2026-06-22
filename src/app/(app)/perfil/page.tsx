'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Tabs from '@/components/ui/Tabs';
import PosterCard from '@/components/ui/PosterCard';
import PostCard from '@/components/ui/PostCard';
import { IC } from '@/components/icons';
import { POSTERS, POSTS } from '@/lib/data';

const STATS = [['24', 'Obras'], ['348', 'Seguidores'], ['102', 'Seguindo']] as const;

const ABOUT = [
  ['Localização', 'Brasília, DF'],
  ['Área', 'Diretora de Fotografia & Montadora'],
  ['Formação', 'Cinema e Mídias Digitais (UCB) & Produção de Áudio e Vídeo (IFB)'],
  ['Desde', '2026 na plataforma'],
] as const;

export default function PerfilPage() {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex-1 overflow-y-auto bg-page">
      <div className="h-40 bg-[linear-gradient(135deg,var(--aegean-700),var(--aegean-900))] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,transparent,var(--papyrus-600),transparent)]" />
      </div>

      <div className="max-w-[820px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-5 -mt-9 mb-6">
          <div className="w-[88px] h-[88px] rounded-full border-4 border-page overflow-hidden shrink-0 bg-aegean-700 relative">
            <Image src="/assets/perfil.png" alt="Marina Martins" fill sizes="88px" className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="font-display text-[22px] font-bold tracking-[0.06em] text-aegean-900">Marina Martins</div>
            <div className="font-sans text-[13px] text-muted mt-[2px]">@marinamartins · Cineasta · Brasília, DF</div>
          </div>
          <div className="flex gap-[10px] pb-[6px] flex-wrap">
            <Button variant="outline" size="sm">Editar perfil</Button>
            <Button size="sm" icon={IC.bell(14)}>Notificações</Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-7 pb-6 border-b border-subtle">
          <p className="font-sans text-[14px] text-body leading-relaxed flex-1 max-w-full md:max-w-[460px]">
            Estudante do 3° semestre de Cinema e Mídias Digitais e Produção de Áudio e Vídeo nas, respectivas, Universidade Católica de Brasília (UCB) e no Instituo Federal  do Recanto das Emas (IFB). Marina, começou a sua paixão pelo audiovisual na fotografia e, posteriormente, iniciou-se a jornada no Cinema, na qual caminha para a especialização em Direção de Fotografia  e Montagem.
          </p>
          <div className="flex gap-6 shrink-0">
            {STATS.map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-[22px] font-bold text-aegean-800">{n}</div>
                <div className="font-sans text-[12px] text-muted mt-[2px]">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <Tabs tabs={[{ label: 'Obras' }, { label: 'Publicações' }, { label: 'Sobre' }]} activeIndex={tab} onChange={setTab} variant="line" className="mb-6" />

        {tab === 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-10">
            {POSTERS.slice(0, 8).map((p) => (
              <PosterCard key={p.title} title={p.title} genre={p.genre} year={p.year} duration={p.dur} rating={p.rating} src={p.src} />
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className="flex flex-col gap-3 pb-10">
            {POSTS.map((p) => (
              <PostCard key={p.id} author={p.author} authorHandle={p.handle} content={p.content} timestamp={p.time} likes={p.likes} comments={p.comments} tags={p.tags} liked={p.liked} />
            ))}
          </div>
        )}

        {tab === 2 && (
          <div className="bg-white rounded-card border border-subtle p-6 shadow-xs mb-10">
            {ABOUT.map(([k, v]) => (
              <div key={k} className="flex gap-5 py-3 border-b border-subtle last:border-b-0">
                <div className="w-[110px] font-sans text-[13px] font-bold text-muted tracking-[0.04em] shrink-0">{k}</div>
                <div className="font-sans text-[14px] text-body">{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
