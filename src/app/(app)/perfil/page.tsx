'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Tabs from '@/components/ui/Tabs';
import PosterCard from '@/components/ui/PosterCard';
import PostCard from '@/components/ui/PostCard';
import { IC } from '@/components/icons';
import { POSTERS, POSTS } from '@/lib/data';
import { useIsMobile } from '@/hooks/useIsMobile';

const STATS = [['24', 'Obras'], ['348', 'Seguidores'], ['102', 'Seguindo']] as const;

const ABOUT = [
  ['Localização', 'São Paulo, SP'],
  ['Área', 'Documentário · Cinema de Arte'],
  ['Formação', 'ECA-USP - Comunicações e Artes'],
  ['Desde', '2020 na plataforma'],
] as const;

export default function PerfilPage() {
  const [tab, setTab] = useState(0);
  const isMobile = useIsMobile();

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--surface-page)' }}>
      <div style={{ height: 160, background: 'linear-gradient(135deg, var(--aegean-700), var(--aegean-900))', position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/assets/greek-ornaments.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.08, filter: 'invert(1)' }}
        />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, var(--papyrus-600), transparent)' }} />
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: isMobile ? '0 16px' : '0 32px' }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: isMobile ? 12 : 20, marginTop: -36, marginBottom: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: '50%',
              border: '4px solid var(--surface-page)',
              overflow: 'hidden',
              flexShrink: 0,
              background: 'var(--aegean-700)',
              position: 'relative',
            }}
          >
            <Image src="https://i.pravatar.cc/176?img=3" alt="Maria" fill sizes="88px" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, paddingBottom: 6 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--aegean-900)' }}>
              Maria Oliveira
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>
              @mariaoliveira · Documentarista · São Paulo, SP
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, paddingBottom: 6, flexWrap: 'wrap' }}>
            <Button variant="outline" size="sm">Editar perfil</Button>
            <Button size="sm" icon={IC.bell(14)}>Notificações</Button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 16 : 32, marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid var(--border-subtle)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-body)', lineHeight: 1.65, flex: 1, maxWidth: isMobile ? '100%' : 460 }}>
            Documentarista e educadora audiovisual. Trabalho com imagens desde 2016, acreditando que o cinema pode transformar a forma como vemos o mundo.
          </p>
          <div style={{ display: 'flex', gap: 24, flexShrink: 0 }}>
            {STATS.map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--aegean-800)' }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <Tabs tabs={[{ label: 'Obras' }, { label: 'Publicações' }, { label: 'Sobre' }]} activeIndex={tab} onChange={setTab} variant="line" style={{ marginBottom: 24 }} />

        {tab === 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 12, paddingBottom: 40 }}>
            {POSTERS.slice(0, 8).map((p) => (
              <PosterCard key={p.title} title={p.title} genre={p.genre} year={p.year} duration={p.dur} rating={p.rating} src={p.src} />
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 40 }}>
            {POSTS.map((p) => (
              <PostCard key={p.id} author={p.author} authorHandle={p.handle} content={p.content} timestamp={p.time} likes={p.likes} comments={p.comments} tags={p.tags} liked={p.liked} />
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-subtle)', padding: '24px', boxShadow: 'var(--shadow-xs)', marginBottom: 40 }}>
            {ABOUT.map(([k, v], i) => (
              <div key={k} style={{ display: 'flex', gap: 20, padding: '12px 0', borderBottom: i < ABOUT.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                <div style={{ width: 110, fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.04em', flexShrink: 0 }}>{k}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-body)' }}>{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
