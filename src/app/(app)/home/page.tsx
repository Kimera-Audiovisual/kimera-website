'use client';

import { useRouter } from 'next/navigation';
import PosterCard from '@/components/ui/PosterCard';
import PostCard from '@/components/ui/PostCard';
import { POSTERS, POSTS } from '@/lib/data';

const STATS = [
  ['24', 'Obras no catálogo', 'var(--aegean-700)'],
  ['348', 'Seguidores', 'var(--terracotta-500)'],
  ['1.2k', 'Visualizações', 'var(--papyrus-600)'],
] as const;

export default function HomePage() {
  const router = useRouter();

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '36px 32px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: 6 }}>
            DOMINGO, 22 DE JUNHO
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--aegean-900)', marginBottom: 6 }}>
            Bem-vinda, Maria.
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-muted)' }}>
            3 novos conteúdos no catálogo · 12 novas publicações na Rede
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 36 }}>
          {STATS.map(([n, l, c]) => (
            <div
              key={l}
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--border-subtle)',
                padding: '20px 22px',
                boxShadow: 'var(--shadow-xs)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, color: c, letterSpacing: '0.04em', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, letterSpacing: '0.06em', color: 'var(--aegean-900)' }}>
              Destaques do Catálogo
            </h2>
            <button
              onClick={() => router.push('/catalogo')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--aegean-500)', letterSpacing: '0.04em' }}
            >
              Ver tudo →
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {POSTERS.slice(0, 4).map((p) => (
              <PosterCard key={p.title} title={p.title} genre={p.genre} year={p.year} duration={p.dur} rating={p.rating} src={p.src} />
            ))}
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, letterSpacing: '0.06em', color: 'var(--aegean-900)' }}>
              Publicações Recentes
            </h2>
            <button
              onClick={() => router.push('/rede')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--aegean-500)', letterSpacing: '0.04em' }}
            >
              Ver rede →
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {POSTS.slice(0, 2).map((p) => (
              <PostCard key={p.id} author={p.author} authorHandle={p.handle} content={p.content} timestamp={p.time} likes={p.likes} comments={p.comments} tags={p.tags} liked={p.liked} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
