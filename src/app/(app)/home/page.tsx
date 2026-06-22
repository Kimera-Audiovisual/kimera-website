'use client';

import { useRouter } from 'next/navigation';
import PosterCard from '@/components/ui/PosterCard';
import PostCard from '@/components/ui/PostCard';
import { POSTERS, POSTS } from '@/lib/data';

const STATS = [
  ['24', 'Obras no catálogo', 'text-aegean-700'],
  ['348', 'Seguidores', 'text-terracotta-500'],
  ['1.2k', 'Visualizações', 'text-papyrus-600'],
] as const;

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex-1 overflow-y-auto bg-page">
      <div className="max-w-[900px] mx-auto px-4 py-6 md:px-8 md:py-9">
        <div className="mb-8">
          <div className="font-sans text-[12px] font-bold tracking-[0.12em] text-muted mb-[6px]">
            DOMINGO, 22 DE JUNHO
          </div>
          <h1 className="font-display text-[34px] font-bold tracking-[0.06em] text-aegean-900 mb-[6px]">
            Bem-vinda, Maria.
          </h1>
          <p className="font-sans text-[15px] text-muted">
            3 novos conteúdos no catálogo · 12 novas publicações na Rede
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mb-9">
          {STATS.map(([n, l, c]) => (
            <div key={l} className="bg-white rounded-card border border-subtle px-[22px] py-5 shadow-xs">
              <div className={['font-display text-[32px] font-bold tracking-[0.04em] leading-none', c].join(' ')}>{n}</div>
              <div className="font-sans text-[13px] text-muted mt-[6px]">{l}</div>
            </div>
          ))}
        </div>

        <div className="mb-9">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-[20px] font-semibold tracking-[0.06em] text-aegean-900">
              Destaques do Catálogo
            </h2>
            <button
              onClick={() => router.push('/catalogo')}
              className="bg-none border-0 cursor-pointer font-sans text-[13px] font-semibold text-aegean-500 tracking-[0.04em]"
            >
              Ver tudo →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {POSTERS.slice(0, 4).map((p) => (
              <PosterCard key={p.title} title={p.title} genre={p.genre} year={p.year} duration={p.dur} rating={p.rating} src={p.src} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-[20px] font-semibold tracking-[0.06em] text-aegean-900">
              Publicações Recentes
            </h2>
            <button
              onClick={() => router.push('/rede')}
              className="bg-none border-0 cursor-pointer font-sans text-[13px] font-semibold text-aegean-500 tracking-[0.04em]"
            >
              Ver rede →
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {POSTS.slice(0, 2).map((p) => (
              <PostCard key={p.id} author={p.author} authorHandle={p.handle} content={p.content} timestamp={p.time} likes={p.likes} comments={p.comments} tags={p.tags} liked={p.liked} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
